<template>
  <div class="LegendStickyChart">
    <div class="scrollable" :style="{ display: canvas ? 'block' : 'none' }">
      <div :style="{ width: `${chartWidth}px` }">
        <horizontal-bar
          :ref="'barChart'"
          :chart-id="chartId"
          :chart-data="displayData"
          :options="displayOption"
          :plugins="scrollPlugin"
          :height="240"
          :width="chartWidth"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { Chart } from 'chart.js'
import { GraphDataType } from '@/utils/formatDetailGraph'
import DataView from '@/components/DataView.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'
import {
  yAxesBgPlugin,
  scrollPlugin,
  DisplayDetailData,
} from '@/plugins/vue-chart'

type Data = {
  dataKind: 'transition'
  canvas: boolean
  chartWidth: number | null
}
type Methods = {}

type Computed = {
  displayInfo: {
    lText: string
    sText: string
    unit: string
  }
  displayData: DisplayDetailData
  displayOption: Chart.ChartOptions
  scaledTicksYAxisMax: number
}
type Props = {
  chartId: string
  chartData: GraphDataType[]
  unit: string
  url: string
  scrollPlugin: Chart.PluginServiceRegistrationOptions[]
  yAxesBgPlugin: Chart.PluginServiceRegistrationOptions[]
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
    this.dataKind = 'transition'
  },
  components: { DataView, OpenDataLink },
  props: {
    chartId: {
      type: String,
      default: 'horizontal-bar',
    },
    chartData: {
      type: Array,
      default: () => [],
    },
    unit: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    scrollPlugin: {
      type: Array,
      default: () => scrollPlugin,
    },
    yAxesBgPlugin: {
      type: Array,
      default: () => yAxesBgPlugin,
    },
  },
  data: () => ({
    dataKind: 'transition',
    chartWidth: null,
    canvas: true,
  }),
  computed: {
    displayInfo() {
      let sum = 0
      this.chartData.forEach((_) => {
        sum += _.transition
      })
      return {
        lText: sum.toLocaleString(),
        sText: '陽性患者数 累計',
        unit: this.unit,
      }
    },
    displayData() {
      return {
        labels: [],
        datasets: this.chartData.map((d) => {
          return {
            label: d.label,
            data: [d.transition],
            backgroundColor: d.bgColor,
          }
        }),
      }
    },
    displayOption() {
      const options: Chart.ChartOptions = {
        tooltips: {
          displayColors: true,
          callbacks: {
            title(tooltipItem, data) {
              return data.labels![tooltipItem[0].index!] as string[]
            },
          },
        },
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              stacked: true,
              // gridLines: {
              //   display: false
              // },
              // ticks: {
              //   fontSize: 9,
              //   maxTicksLimit: 20,
              //   fontColor: '#808080',
              //   suggestedMax: scaledTicksYAxisMax,
              //   maxRotation: 0
              // },
              // #2384: If you set "type" to "time", make sure that the bars at both ends are not hidden.
              // #2384: typeをtimeに設定する時はグラフの両端が見切れないか確認してください
            },
          ],
          xAxes: [
            {
              // id: 'status',
              stacked: true,
              // gridLines: {
              //   display: true,
              //   color: '#E5E5E5'
              // },
              // ticks: {
              //   suggestedMin: 0,
              //   maxTicksLimit: 8,
              //   fontColor: '#808080',
              // }
            },
          ],
        },
      }
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
    },
    scaledTicksYAxisMax() {
      const dataKind = 'transition'
      const values = this.chartData.map((d) => d[dataKind])
      return Math.max(...values)
    },
  },
  methods: {},
  mounted() {
    if (this.$el) {
      this.chartWidth =
        ((this.$el!.clientWidth - 22 * 2 - 38) / 60) *
          this.displayData.labels!.length +
        38
      this.chartWidth = Math.max(
        this.$el!.clientWidth - 22 * 2,
        this.chartWidth
      )
    }
    const barChart = this.$refs.barChart as Vue
    const barElement = barChart.$el
    const canvas = barElement.querySelector('canvas')
    // const labelledbyId = `${this.titleId}-graph`

    if (canvas) {
      canvas.setAttribute('role', 'img')
      // canvas.setAttribute('aria-labelledby', labelledbyId)
    }
  },
}

export default Vue.extend(options)
</script>
