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
            >{{ dataLabel }}</span
          >
        </button>
      </li>
    </ul>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <scrollable-chart
      v-show="canvas"
      :display-data="displayData"
      :is-weekly="true"
    >
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
          :plugins="yAxesBgRightPlugin"
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
        <data-view-table :headers="tableHeaders" :items="formattedTableData" />
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
      />
    </template>
    <template #footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script lang="ts">
import { Chart, ChartOptions } from 'chart.js'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import type { TranslateResult } from 'vue-i18n'

import DataView from '@/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '@/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
} from '@/components/index/_shared/DataViewTable.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'
import ScrollableChart from '@/components/index/_shared/ScrollableChart.vue'
import {
  DisplayData,
  yAxesBgPlugin,
  yAxesBgRightPlugin,
} from '@/plugins/vue-chart'
import { getGraphSeriesColor, SurfaceStyle } from '@/utils/colors'
import { getNumberToLocaleStringFunction } from '@/utils/valueFormatter'

type Data = {
  canvas: boolean
  displayLegends: boolean[]
  colors: SurfaceStyle[]
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
  displayInfo: DisplayInfo[]
  displayData: DisplayData
  displayOption: Chart.ChartOptions
  displayDataHeader: DisplayData
  displayOptionHeader: Chart.ChartOptions
  scaledTicksYAxisMax: number
  scaledTicksYAxisMaxRight: number
  tableHeaders: TableHeader[]
  formattedTableData: string[][]
  headTitle: string
}
type Props = {
  title: string
  titleId: string
  infoTitles: string[]
  chartId: string
  chartData: number[][]
  tableData: number[][]
  getFormatter: Function
  date: string
  labels: string[]
  dataLabels: string[] | TranslateResult[]
  tableLabels: string[] | TranslateResult[]
  unit: string[]
  url: string
  yAxesBgPlugin: Chart.PluginServiceRegistrationOptions[]
  yAxesBgRightPlugin: Chart.PluginServiceRegistrationOptions[]
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
    ScrollableChart,
    OpenDataLink,
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
      default: 'MutantInspectionPersonsNumberChart',
    },
    chartData: {
      type: Array,
      required: false,
      default: () => [],
    },
    tableData: {
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
    yAxesBgPlugin: {
      type: Array,
      default: () => yAxesBgPlugin,
    },
    yAxesBgRightPlugin: {
      type: Array,
      default: () => yAxesBgRightPlugin,
    },
  },
  data: () => ({
    displayLegends: [true, true, true],
    colors: [
      getGraphSeriesColor('A'),
      getGraphSeriesColor('C'),
      getGraphSeriesColor('E'),
    ],
    canvas: true,
  }),
  computed: {
    displayInfo() {
      const delta = (tableData: number[], digit: number) => {
        const dt = tableData.slice(-2)[1] - tableData.slice(-2)[0]
        let sign = ''
        switch (Math.sign(dt)) {
          case 0:
            sign = '±'
            break
          case 1:
            sign = '+'
            break
          case -1:
            sign = '-'
            break
        }
        const dtStr = Math.abs(dt).toFixed(digit)
        return sign + dtStr
      }

      return [
        {
          lText: this.tableData[0].slice(-1)[0].toLocaleString(),
          sText: `${this.$t('{date} の数値', {
            date: this.labels.slice(-1)[0],
          })}`,
          sTextUnder: `（${this.$t('前週比')}: ${delta(this.tableData[0], 0)} ${
            this.unit[0]
          }）`,
          unit: this.unit[0],
        },
        {
          lText: this.tableData[2].slice(-1)[0].toFixed(1),
          sText: `${this.$t('{date} の数値', {
            date: this.labels.slice(-1)[0],
          })}`,
          sTextUnder: `（${this.$t('前週比')}: ${delta(this.tableData[2], 1)} ${
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
      ]
      return {
        labels: this.labels,
        datasets: [
          {
            type: 'bar',
            yAxisID: 'y-axis-1',
            label: this.dataLabels[0],
            data: this.chartData[0],
            backgroundColor: graphSeries[0].fillColor,
            borderColor: graphSeries[0].strokeColor,
            borderWidth: 1,
            order: 3,
          },
          {
            type: 'bar',
            yAxisID: 'y-axis-1',
            label: this.dataLabels[1],
            data: this.chartData[1],
            backgroundColor: graphSeries[1].fillColor,
            borderColor: graphSeries[1].strokeColor,
            borderWidth: 1,
            order: 4,
          },
          {
            type: 'line',
            yAxisID: 'y-axis-2',
            label: this.dataLabels[2],
            data: this.chartData[2],
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            borderColor: graphSeries[2].strokeColor,
            borderWidth: 3,
            fill: false,
            order: 2,
            lineTension: 0,
          },
        ],
      }
    },
    headTitle() {
      return this.title + this.infoTitles.join(',')
    },
    tableHeaders() {
      return [
        { text: this.$t('期間'), value: 'text' },
        ...(this.tableLabels as string[]).map((text, i) => {
          return { text, value: String(i) }
        }),
      ]
    },
    formattedTableData() {
      return this.labels
        .map((label, i) => {
          return Object.assign(
            { text: label },
            ...this.tableData.map((_, j) => {
              const data = this.tableData[j]
              if (data[i] === null) {
                return { [j]: '' }
              }
              return { [j]: this.getFormatter(j)(data[i]) }
            })
          )
        })
        .reverse()
    },
    displayOption() {
      const scaledTicksYAxisMax = this.scaledTicksYAxisMax
      const scaledTicksYAxisMaxRight = this.scaledTicksYAxisMaxRight

      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            title: (tooltipItem) => {
              const dateString = this.labels[tooltipItem[0].index!]
              return this.$t('期間: {duration}', {
                duration: dateString!,
              }) as string
            },
            label: (tooltipItem, data) => {
              const index = tooltipItem.datasetIndex!
              const title = this.$t(data.datasets![index].label!)
              const num = this.getFormatter(tooltipItem.datasetIndex!)(
                parseFloat(tooltipItem.value!)
              )
              const unit = this.$t(this.unit[Number(index > 1)])
              return `${title}: ${num} ${unit}`
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
              id: 'period',
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                fontColor: '#808080',
                callback: (_, i) => {
                  return this.labels[i]
                },
              },
            },
            {
              id: 'year',
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
                unit: 'year',
                displayFormats: {
                  year: 'YYYY',
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
                fontSize: 12,
                maxTicksLimit: 10,
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMax,
                fontColor: '#808080',
                callback: (value) => {
                  return `${value}${this.unit[0]}`
                },
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
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMaxRight,
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
    displayDataHeader() {
      return {
        labels: this.labels,
        datasets: [
          {
            data: [this.displayData.datasets[0].data[0]],
            backgroundColor: 'transparent',
            yAxisID: 'y-axis-1',
            borderWidth: 0,
          },
          {
            data: [this.displayData.datasets[1].data[0]],
            backgroundColor: 'transparent',
            yAxisID: 'y-axis-1',
            borderWidth: 0,
          },
          {
            data: [this.displayData.datasets[2].data[0]],
            backgroundColor: 'transparent',
            yAxisID: 'y-axis-2',
            borderWidth: 0,
          },
        ],
      }
    },
    displayOptionHeader() {
      const scaledTicksYAxisMax = this.scaledTicksYAxisMax
      const scaledTicksYAxisMaxRight = this.scaledTicksYAxisMaxRight

      const options: ChartOptions = {
        tooltips: { enabled: false },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              id: 'period',
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                fontColor: 'transparent',
                callback: (_, i) => {
                  return this.labels[i]
                },
              },
            },
            {
              id: 'year',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: false, // displayOption では true
                drawBorder: false,
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: 'transparent', // displayOption では #808080
                padding: 13, // 3 + 10(tickMarkLength)，displayOption では 3
                fontStyle: 'bold',
              },
              type: 'time',
              time: {
                unit: 'year',
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
                drawOnChartArea: false, // displayOption では true
                color: '#E5E5E5',
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMax,
                callback: (value) => {
                  return `${value}${this.unit[0]}`
                },
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
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMaxRight,
                callback: (value) => {
                  return `${value}%`
                },
              },
            },
          ],
        },
        animation: { duration: 0 },
      }
      return options
    },
    scaledTicksYAxisMax() {
      const max = Array.from(this.chartData[0].keys())
        .map((i) => this.chartData[0][i] + this.chartData[1][i])
        .reduce((a, b) => Math.max(a, b), 0)
      return max
    },
    scaledTicksYAxisMaxRight() {
      return 100
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
