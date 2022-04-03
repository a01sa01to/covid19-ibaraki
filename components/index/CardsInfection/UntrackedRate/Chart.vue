<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :head-title="title + infoTitles.join(',')"
  >
    <template #description>
      <slot name="description" />
    </template>
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li
        v-for="(dataLabel, i) in dataLabels"
        :key="i"
        @click="onClickLegend(i)"
      >
        <button>
          <div
            v-if="i === 2"
            :style="{
              background: `repeating-linear-gradient(90deg, ${colors[i].fillColor}, ${colors[i].fillColor} 2px, #fff 2px, #fff 4px)`,
              border: 0,
              height: '3px',
            }"
          />
          <div
            v-else-if="i === 3"
            :style="{
              backgroundColor: colors[i].fillColor,
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
          >
            {{ dataLabel }}
          </span>
        </button>
      </li>
    </ul>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <div v-show="canvas">
      <bar
        :ref="'barChart'"
        :chart-id="chartId"
        :chart-data="displayData"
        :options="displayOption"
        :height="240"
        :width="300"
        :display-legends="displayLegends"
        :min="startDate"
        :max="endDate"
      />
      <date-range-slider
        :id="titleId"
        :min-date="minDate"
        :max-date="maxDate"
        :default-day-period="dayPeriod"
        @start-date="startDate = $event"
        @end-date="endDate = $event"
      />
    </div>
    <template #additionalDescription>
      <slot name="additionalDescription" />
    </template>
    <template #dataTable>
      <client-only>
        <data-view-table :headers="tableHeaders" :items="tableData" />
      </client-only>
    </template>
    <template #dataSetPanel>
      <data-view-data-set-panel
        v-for="(di, i) in displayInfo"
        :key="i"
        :title="infoTitles[i]"
        :l-text="di.lText"
        :s-text="di.sText"
        :s-text-under="di.sTextUnder"
        :unit="di.unit"
        :is-single-card="isSingleCard"
      />
    </template>
    <template #footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script lang="ts">
import { ChartOptions } from 'chart.js'
import dayjs, { extend } from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import type { TranslateResult } from 'vue-i18n'

import DataView from '@/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '@/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/index/_shared/DataViewTable.vue'
import DateRangeSlider from '@/components/index/_shared/DateRangeSlider.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'
import { DisplayData } from '@/plugins/vue-chart'
import calcDayBeforeRatio from '@/utils/calcDayBeforeRatio'
import { getGraphSeriesColor, SurfaceStyle } from '@/utils/colors'
import { getNumberToLocaleStringFunction } from '@/utils/valueFormatter'

extend(isBetween)

type Data = {
  canvas: boolean
  displayLegends: boolean[]
  colors: SurfaceStyle[]
  startDate: string
  endDate: string
}
type Methods = {
  makeLineData: (value: number) => number[]
  onClickLegend: (i: number) => void
}
type DisplayInfo = {
  lText: string
  sText: string
  sTextUnder: string
  unit: string
}

type Computed = {
  minDate: string
  maxDate: string
  displayInfo: DisplayInfo[]
  displayData: DisplayData
  displayOption: Chart.ChartOptions
  tableHeaders: TableHeader[]
  tableData: TableItem[]
  startDateIndex: number
  endDateIndex: number
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
  unit: string[]
  url: string
  byDate: boolean
  dayPeriod: number
  isSingleCard: boolean
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
  },
  components: {
    DataView,
    DataViewTable,
    DataViewDataSetPanel,
    OpenDataLink,
    DateRangeSlider,
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
      default: 'UntrackedRateMixedChart',
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
      type: Array,
      default: () => [],
    },
    url: {
      type: String,
      default: '',
    },
    byDate: {
      type: Boolean,
      default: false,
    },
    dayPeriod: {
      type: Number,
      default: 60,
    },
    isSingleCard: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      displayLegends: [true, true, true, true],
      colors: [
        getGraphSeriesColor('A'),
        getGraphSeriesColor('C'),
        getGraphSeriesColor('E'),
        getGraphSeriesColor('E'),
      ],
      canvas: true,
      startDate: '2020-01-01',
      endDate: dayjs().format('YYYY-MM-DD'),
    }
  },
  computed: {
    minDate() {
      return dayjs(this.labels[0]).format('YYYY-MM-DD')
    },
    maxDate() {
      return dayjs(this.labels[this.labels.length - 1]).format('YYYY-MM-DD')
    },
    displayInfo() {
      const { lastDay, lastDayData, dayBeforeRatio } = calcDayBeforeRatio({
        displayData: this.displayData,
        dataIndex: 2,
        digit: 1,
      })
      const {
        lastDay: lastDay3,
        lastDayData: lastDayData3,
        dayBeforeRatio: dayBeforeRatio3,
      } = calcDayBeforeRatio({
        displayData: this.displayData,
        dataIndex: 3,
        digit: 1,
      })
      return [
        {
          lText: lastDayData,
          sText: `${this.$t('{date} の数値', {
            date: this.$d(lastDay, 'date'),
          })}（${this.$t('7日間移動平均')}）`,
          sTextUnder: `（${this.$t('前日比')}: ${dayBeforeRatio} ${
            this.unit[0]
          }）`,
          unit: this.unit[0],
        },
        {
          lText: lastDayData3,
          sText: `${this.$t('{date} の数値', {
            date: this.$d(lastDay3, 'date'),
          })}（${this.$t('7日間移動平均値をもとに算出')}）`,
          sTextUnder: `（${this.$t('前日比')}: ${dayBeforeRatio3} ${
            this.unit[1]
          }）`,
          unit: this.unit[1],
        },
      ]
    },
    displayData() {
      const graphSeries = [
        getGraphSeriesColor('A'),
        getGraphSeriesColor('C'),
        getGraphSeriesColor('E'),
        getGraphSeriesColor('E'),
      ]
      return {
        labels: this.labels.slice(this.startDateIndex, this.endDateIndex + 1),
        datasets: [
          {
            type: 'bar',
            yAxisID: 'y-axis-1',
            label: this.dataLabels[0],
            data: this.chartData[0].slice(
              this.startDateIndex,
              this.endDateIndex + 1
            ),
            backgroundColor: graphSeries[0].fillColor,
            borderColor: graphSeries[0].strokeColor,
            borderWidth: 1,
            order: 4,
          },
          {
            type: 'bar',
            yAxisID: 'y-axis-1',
            label: this.dataLabels[1],
            data: this.chartData[1].slice(
              this.startDateIndex,
              this.endDateIndex + 1
            ),
            backgroundColor: graphSeries[1].fillColor,
            borderColor: graphSeries[1].strokeColor,
            borderWidth: 1,
            order: 3,
          },
          {
            type: 'line',
            yAxisID: 'y-axis-1',
            label: this.dataLabels[2],
            data: this.chartData[2].slice(
              this.startDateIndex,
              this.endDateIndex + 1
            ),
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            borderColor: graphSeries[2].strokeColor,
            borderWidth: 3,
            borderDash: [4],
            fill: false,
            order: 2,
            lineTension: 0,
          },
          {
            type: 'line',
            yAxisID: 'y-axis-2',
            label: this.dataLabels[3],
            data: this.chartData[3].slice(
              this.startDateIndex,
              this.endDateIndex + 1
            ),
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            borderColor: graphSeries[3].strokeColor,
            borderWidth: 3,
            fill: false,
            order: 1,
            lineTension: 0,
          },
        ],
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...(this.tableLabels as string[]).map((text, i) => {
          return { text, value: String(i), align: 'end' }
        }),
      ]
    },
    tableData() {
      return this.labels
        .map((label, i) => {
          return Object.assign(
            { text: label },
            ...this.chartData.map((_, j) => {
              const data = this.chartData[j]
              if (data[i] === null) {
                return {
                  [j]: '',
                }
              }
              return {
                [j]: this.getFormatter(j)(data[i]),
              }
            })
          )
        })
        .sort((a, b) => dayjs(a.text).unix() - dayjs(b.text).unix())
        .reverse()
    },
    displayOption() {
      const unit = this.unit[1]

      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            title: (tooltipItem, data) => {
              if (tooltipItem[0].datasetIndex! < 4) {
                const label = data.labels![tooltipItem[0].index!] as string
                return this.$d(new Date(label), 'date')
              }
              return ''
            },
            label: (tooltipItem) => {
              const cases = this.getFormatter(tooltipItem.datasetIndex!)(
                parseFloat(tooltipItem.value!)
              )
              let label = `${
                this.dataLabels[tooltipItem.datasetIndex!]
              } : ${cases} ${this.$t('人')}`
              if (tooltipItem.datasetIndex! >= 3) {
                label = `${
                  this.dataLabels[tooltipItem.datasetIndex!]
                } : ${cases} ${unit}`
              }
              return label
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
              id: 'y-axis-1',
              position: 'left',
              stacked: true,
              gridLines: {
                display: true,
                drawOnChartArea: true,
                color: '#E5E5E5',
              },
              ticks: {
                maxTicksLimit: 8,
                fontColor: '#808080',
                suggestedMin: 0,
                precision: 0,
              },
            },
            {
              id: 'y-axis-2',
              position: 'right',
              gridLines: {
                display: true,
                drawOnChartArea: false,
                color: '#E5E5E5',
              },
              ticks: {
                maxTicksLimit: 8,
                fontColor: '#808080',
                suggestedMin: 0,
                precision: 0,
                callback: (value) => {
                  return `${value}%`
                },
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
    startDateIndex() {
      const searchIndex = this.labels.findIndex((item) => {
        const date = dayjs(item).format('YYYY-MM-DD')
        return date === this.startDate
      })
      return searchIndex === -1 ? 0 : searchIndex
    },
    endDateIndex() {
      const searchIndex = this.labels.findIndex((item) => {
        const date = dayjs(item).format('YYYY-MM-DD')
        return date === this.endDate
      })

      return searchIndex === -1 ? this.labels.length - 1 : searchIndex
    },
  },
  methods: {
    onClickLegend(i) {
      this.displayLegends[i] = !this.displayLegends[i]
      this.displayLegends = this.displayLegends.slice()
    },
    makeLineData(value: number): number[] {
      return this.chartData[0].map((_) => value)
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

    this.$nextTick().then(() => {
      this.startDate = dayjs(this.maxDate)
        .subtract(this.dayPeriod, 'day')
        .format('YYYY-MM-DD')
    })
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
