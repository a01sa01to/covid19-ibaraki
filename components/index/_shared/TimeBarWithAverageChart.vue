<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :head-title="title"
  >
    <template #description>
      <slot name="description" />
    </template>
    <template #button>
      <data-selector
        v-model="dataKind"
        :target-id="chartId"
        :style="{ display: canvas ? 'inline-block' : 'none' }"
      />
    </template>
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li v-for="(item, i) in dataLabels" :key="i" @click="onClickLegend(i)">
        <span v-if="dataKind === 'cumulative' || i === 2" />
        <button v-else>
          <div
            v-if="i === 1"
            :style="{
              background: colors[i].fillColor,
              border: 0,
              height: '3px',
            }"
          />
          <div
            v-else
            :style="{
              backgroundColor: colors[i].fillColor,
              borderColor: colors[i].strokeColor,
            }"
          />
          <span
            :style="{
              textDecoration: displayLegends[i] ? 'none' : 'line-through',
            }"
            >{{ item }}</span
          >
        </button>
      </li>
    </ul>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <scrollable-chart v-show="canvas" :display-data="displayData">
      <template #chart="{ chartWidth }">
        <bar
          :ref="'barChart'"
          :chart-id="chartId"
          :chart-data="displayData"
          :options="displayOption"
          :display-legends="displayLegends"
          :height="240"
          :width="chartWidth"
        />
      </template>
      <template #sticky-chart>
        <bar
          class="sticky-legend"
          :chart-id="`${chartId}-header-right`"
          :chart-data="displayDataHeader"
          :options="displayOptionHeader"
          :plugins="yAxesBgPlugin"
          :display-legends="displayLegends"
          :height="240"
        />
      </template>
    </scrollable-chart>
    <template #additionalDescription>
      <slot name="additionalDescription" />
    </template>
    <template #dataTable>
      <client-only>
        <data-view-table :headers="tableHeaders" :items="tableData" />
      </client-only>
    </template>
    <template #dateRangeSelector>
      <date-range-selector
        :chart-data="labels"
        :value="[0, chartDataIndexMax]"
        :with-average="true"
        @input="dateRangeUpdate"
      />
    </template>
    <template #dataSetPanel>
      <data-view-data-set-panel
        :title="infoTitles[0]"
        :l-text="displayInfo[0].lText"
        :s-text="displayInfo[0].sText"
        :s-text-under="displayInfo[0].sTextUnder"
        :unit="displayInfo[0].unit"
      />
    </template>
    <template #footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script lang="ts">
import { Chart } from 'chart.js'
import dayjs from 'dayjs'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import type { TranslateResult } from 'vue-i18n'

import DataSelector from '@/components/index/_shared/DataSelector.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '@/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/index/_shared/DataViewTable.vue'
import DateRangeSelector from '@/components/index/_shared/DateRangeSelector.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'
import ScrollableChart from '@/components/index/_shared/ScrollableChart.vue'
import { DisplayData, yAxesBgPlugin } from '@/plugins/vue-chart'
import calcDayBeforeRatio from '@/utils/calcDayBeforeRatio'
import { getGraphSeriesColor, SurfaceStyle } from '@/utils/colors'
import { getNumberToLocaleStringFunction } from '@/utils/valueFormatter'
type Data = {
  canvas: boolean
  displayLegends: boolean[]
  colors: SurfaceStyle[]
  dataKind: 'transition' | 'cumulative'
  graphRange: [number, number]
  dateRangedChartData: number[][]
  dateRangedLabels: string[]
}
type Methods = {
  makeLineData: (value: number) => number[]
  onClickLegend: (i: number) => void
  dateRangeUpdate: (value: [number, number]) => void
}
type Computed = {
  displayInfo: [
    {
      lText: string
      sText: string
      sTextUnder: string
      unit: string
    }
  ]
  displayData: DisplayData
  displayOption: Chart.ChartOptions
  displayDataHeader: DisplayData
  displayOptionHeader: Chart.ChartOptions
  scaledTicksYAxisMax: number
  tableHeaders: TableHeader[]
  tableData: TableItem[]
  chartDataIndexMax: number
}
type Props = {
  title: string
  titleId: string
  infoTitles: string[]
  chartId: string
  chartData: number[][]
  getFormatter: Function
  date: string
  labels: string[]
  dataLabels: string[] | TranslateResult[]
  tableLabels: string[] | TranslateResult[]
  unit: string
  url: string
  yAxesBgPlugin: Chart.PluginServiceRegistrationOptions[]
  byDate: boolean
}
const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  created() {
    this.canvas = process.browser
    this.dataKind =
      this.$route.query.embed && this.$route.query.dataKind === 'cumulative'
        ? 'cumulative'
        : 'transition'
  },
  components: {
    DataView,
    DataViewTable,
    DataSelector,
    DataViewDataSetPanel,
    ScrollableChart,
    OpenDataLink,
    DateRangeSelector,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      required: false,
      default: '',
    },
    infoTitles: {
      type: Array,
      required: false,
      default: () => [],
    },
    chartId: {
      type: String,
      default: 'number-of-confirmed-cases-chart',
    },
    chartData: {
      type: Array,
      required: false,
      default: () => [],
    },
    getFormatter: {
      type: Function,
      required: false,
      default: (_: number) => getNumberToLocaleStringFunction(),
    },
    date: {
      type: String,
      required: true,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    labels: {
      type: Array,
      default: () => [],
    },
    dataLabels: {
      type: Array,
      default: () => [],
    },
    tableLabels: {
      type: Array,
      default: () => [],
    },
    unit: {
      type: String,
      default: '',
    },
    yAxesBgPlugin: {
      type: Array,
      default: () => yAxesBgPlugin,
    },
    byDate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const colors: SurfaceStyle[] = [
      getGraphSeriesColor('B'),
      getGraphSeriesColor('E'),
    ]
    return {
      displayLegends: [true, true],
      colors,
      canvas: true,
      dataKind: 'transition',
      graphRange: [0, 1],
      dateRangedChartData: this.chartData,
      dateRangedLabels: this.labels,
    }
  },
  computed: {
    displayInfo() {
      const { lastDay, lastDayData, dayBeforeRatio } = calcDayBeforeRatio({
        displayData: this.displayData,
      })
      const formattedLastDay = this.$d(lastDay, 'date')
      if (this.dataKind === 'transition' && this.byDate) {
        return [
          {
            lText: lastDayData,
            sText: `${formattedLastDay} ${this.$t('日別値')}`,
            sTextUnder: `（${this.$t('前日比')}: ${dayBeforeRatio} ${
              this.unit
            }）`,
            unit: this.unit,
          },
        ]
      } else if (this.dataKind === 'transition') {
        return [
          {
            lText: lastDayData,
            sText: `${formattedLastDay} ${this.$t('実績値')}`,
            sTextUnder: `（${this.$t('前日比')}: ${dayBeforeRatio} ${
              this.unit
            }）`,
            unit: this.unit,
          },
        ]
      }
      return [
        {
          lText: lastDayData,
          sText: `${formattedLastDay} ${this.$t('累計値')}`,
          sTextUnder: `（${this.$t('前日比')}: ${dayBeforeRatio} ${
            this.unit
          }）`,
          unit: this.unit,
        },
      ]
    },
    displayData() {
      if (this.dataKind === 'transition') {
        return {
          labels: this.dateRangedLabels,
          datasets: [
            {
              type: 'bar',
              label: this.dataLabels[0],
              data: this.dateRangedChartData[0],
              backgroundColor: this.colors[0].fillColor,
              borderColor: this.colors[0].strokeColor,
              borderWidth: 1,
              order: 3,
            },
            {
              type: 'line',
              label: this.dataLabels[1],
              data: this.dateRangedChartData[1],
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: this.colors[1].fillColor,
              borderWidth: 3,
              fill: false,
              order: 2,
              lineTension: 0,
            },
          ],
        }
      }
      return {
        labels: this.dateRangedLabels,
        datasets: [
          {
            type: 'bar',
            label: this.dataLabels[2],
            data: this.dateRangedChartData[2],
            backgroundColor: this.colors[0].fillColor,
            borderColor: this.colors[0].strokeColor,
            borderWidth: 1,
            order: 3,
          },
        ],
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...(this.tableLabels as string[]).map((text, i) => {
          return { text, value: `${i}`, align: 'center' }
        }),
      ]
    },
    tableData() {
      return (
        this.labels
          // return this.labels
          .map((label, i) => {
            return Object.assign(
              { text: label },
              ...(this.tableLabels as string[]).map((_, j) => {
                return {
                  [j]: this.getFormatter(j)(this.chartData[j][i]),
                }
              })
            )
          })
          .sort((a, b) => dayjs(a.text).unix() - dayjs(b.text).unix())
          .reverse()
      )
    },
    displayOption() {
      const unit = this.unit
      const scaledTicksYAxisMax = this.scaledTicksYAxisMax
      const options: Chart.ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: (tooltipItem) => {
              const cases = this.getFormatter(tooltipItem.datasetIndex!)(
                parseFloat(tooltipItem.value!)
              )
              return `${
                this.dataLabels[tooltipItem.datasetIndex!]
              } : ${cases} ${unit}`
            },
            title: (tooltipItem, data) => {
              if (tooltipItem[0].datasetIndex! < 2) {
                const label = data.labels![tooltipItem[0].index!] as string
                return this.$d(new Date(label), 'date')
              }
              return ''
            },
          },
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: '#808080',
                maxRotation: 0,
                callback: (label: string) => {
                  return dayjs(label).format('D')
                },
              },
              // #2384: If you set "type" to "time", make sure that the bars at both ends are not hidden.
              // #2384: typeをtimeに設定する時はグラフの両端が見切れないか確認してください
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: true,
                drawBorder: false,
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: '#808080',
                padding: 3,
                fontStyle: 'bold',
              },
              type: 'time',
              time: {
                unit: 'month',
                displayFormats: {
                  month: 'YYYY-MM',
                },
              },
            },
          ],
          yAxes: [
            {
              position: 'left',
              gridLines: {
                display: true,
                drawOnChartArea: true,
                color: '#E5E5E5',
              },
              ticks: {
                maxTicksLimit: 8,
                fontColor: '#808080',
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMax,
              },
            },
          ],
        },
      }
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
    },
    displayDataHeader() {
      if (this.dataKind === 'transition') {
        return {
          labels: ['2020-01-01'],
          datasets: [
            {
              data: [Math.max(...this.dateRangedChartData[0])],
              backgroundColor: 'transparent',
              borderWidth: 0,
            },
            {
              data: [Math.max(...this.dateRangedChartData[1])],
              backgroundColor: 'transparent',
              borderWidth: 0,
            },
          ],
        }
      }
      return {
        labels: ['2020-01-01'],
        datasets: [
          {
            data: [Math.max(...this.dateRangedChartData[2])],
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
        ],
      }
    },
    displayOptionHeader() {
      const scaledTicksYAxisMax = this.scaledTicksYAxisMax
      const options: Chart.ChartOptions = {
        tooltips: { enabled: false },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: 'transparent', // displayOption では '#808080'
                maxRotation: 0,
                callback: (label: string) => {
                  return dayjs(label).format('D')
                },
              },
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: false, // displayOption では true
                drawBorder: false,
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: 'transparent', // displayOption では '#808080'
                padding: 13, // 3 + 10(tickMarkLength)，displayOption では 3
                fontStyle: 'bold',
              },
              type: 'time',
              time: {
                unit: 'month',
                displayFormats: {
                  month: 'YYYY-MM',
                },
              },
            },
          ],
          yAxes: [
            {
              position: 'left',
              gridLines: {
                display: true,
                drawOnChartArea: false, // displayOption では true
                color: '#E5E5E5',
              },
              ticks: {
                maxTicksLimit: 8,
                fontColor: '#808080',
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMax,
              },
            },
          ],
        },
        animation: { duration: 0 },
      }
      return options
    },
    scaledTicksYAxisMax() {
      if (this.dataKind === 'transition') {
        return Math.max(...this.dateRangedChartData[0])
      }
      return Math.max(...this.dateRangedChartData[2])
    },
    chartDataIndexMax() {
      if (!this.labels || this.labels.length === 0) {
        return 1
      }
      this.dateRangeUpdate([0, this.labels.length - 1])
      return this.labels.length - 1
    },
  },
  methods: {
    onClickLegend(i) {
      this.displayLegends[i] = !this.displayLegends[i]
      this.displayLegends = this.displayLegends.slice()
    },
    makeLineData(value: number): number[] {
      return this.dateRangedChartData[0].map((_) => value)
    },
    dateRangeUpdate(rangeValue: [number, number]) {
      if (Math.abs(rangeValue[1] - rangeValue[0]) < 13) {
        return
      }
      this.graphRange = rangeValue
      this.dateRangedChartData = this.chartData.map((data) =>
        data.slice(rangeValue[0], rangeValue[1] + 1)
      )
      this.dateRangedLabels = this.labels.slice(
        rangeValue[0],
        rangeValue[1] + 1
      )
    },
  },
  mounted() {
    const barChart = this.$refs.barChart as Vue
    const barElement = barChart.$el
    const canvas = barElement.querySelector('canvas')
    const labelledbyId = `${this.titleId}-graph`
    if (canvas) {
      canvas.setAttribute('role', 'img')
      canvas.setAttribute('aria-labelledby', labelledbyId)
    }
  },
}
export default Vue.extend(options)
</script>

<style module lang="scss">
.Graph {
  &Legend {
    padding: 0 !important;
    text-align: center;
    list-style: none;

    li {
      display: inline-block;
      margin: 0 3px;

      div {
        display: inline-block;
        width: 40px;
        height: 12px;
        margin: 2px 4px;
        vertical-align: middle;
        border-style: solid;
        border-width: 1px;
      }

      button {
        color: $gray-3;
        @include font-size(12);
      }
    }
  }
}
</style>
