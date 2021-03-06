<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('検査実施件数（全体）')"
        :title-id="'number-of-tested'"
        :date="date"
      >
        <template #description>
          <ul>
            <li>
              {{ $t('同一の対象者について複数の検体を検査する場合がある') }}
            </li>
            <li>
              {{
                $t(
                  '県公式情報がほとんど更新されないため、このデータは更新の頻度が低い'
                )
              }}
            </li>
            <li>
              {{ $t('端数の関係上、合計しても必ずしも100%とはならない') }}
            </li>
            <li>
              {{
                $t('{date} 時点でのデータである', {
                  date: $d(new Date(date), 'date'),
                })
              }}
            </li>
          </ul>
        </template>
        <div>
          <ul>
            <li :class="[$style.box]">
              <div :class="[$style.content]">
                <span>{{ $t('合計') }}</span>
                <span>
                  <strong>{{ total.number.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                  <div style="width: fit-content; margin-left: 10px">
                    <span :class="$style.unit">{{ $t('全体での陽性率') }}</span>
                    <strong>{{
                      ((total.positive / total.number) * 100).toFixed(2)
                    }}</strong>
                    <span :class="$style.unit">%</span>
                  </div>
                </span>
              </div>
            </li>
            <li v-for="(dt, i) in graphData" :key="i" :class="[$style.box]">
              <div :class="[$style.content, $style.top]">
                <span>{{ $t(dt.label) }}</span>
                <span>
                  <strong>{{ dt.transition.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                  <div>
                    (<strong>{{
                      ((dt.transition / total.number) * 100).toFixed(2)
                    }}</strong>
                    <span :class="$style.unit">%</span>)
                  </div>
                </span>
              </div>
              <div :class="[$style.content, $style.br]">
                <span>{{ $t('確認された陽性者の数') }}</span>
                <span>
                  <strong>{{ dt.positive.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </span>
                <div>
                  <span :class="$style.unit">{{ $t('陽性率') }}</span>
                  <strong>{{
                    ((dt.positive / dt.transition) * 100).toFixed(2)
                  }}</strong>
                  <span :class="$style.unit">%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <horizontal-bar-chart
          :chart-id="'horizontal-chart-inspections'"
          :chart-data="graphData"
        />
        <template #infoPanel>
          <data-view-data-set-panel
            :l-text="info.lText"
            :s-text="info.sText"
            :unit="$t('人')"
          />
        </template>
        <template #footer>
          <open-data-link
            v-show="
              'https://opendata.a01sa01to.com/covid19_ibaraki/inspections_summary'
            "
            :url="'https://opendata.a01sa01to.com/covid19_ibaraki/inspections_summary'"
          />
        </template>
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import DataView from '@/components/DataView.vue'
import DataViewDataSetPanel from '@/components/DataViewDataSetPanel.vue'
import HorizontalBarChart from '@/components/HorizontalBarChart.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'
import Data from '@/data/data.json'
dayjs.extend(duration)

export default {
  components: {
    HorizontalBarChart,
    DataView,
    OpenDataLink,
    DataViewDataSetPanel,
  },
  data() {
    const inspectionsSummary = Data.inspections_summary
    const { date, datasets } = inspectionsSummary

    // 検査実施日別状況

    const graphData = []

    const total = { number: 0, positive: 0 }

    for (let i = 0; i < 3; i++) {
      total.number += datasets[i].data
      total.positive += datasets[i].positive
      graphData.push({
        label: this.$t(datasets[i].label)
          .toString()
          .replace(/<br \/>/, ''),
        transition: datasets[i].data,
        positive: datasets[i].positive,
        bgColor: ['#6e86d3', '#99a8e0', '#c2caec'][i],
      })
    }

    const info = {
      lText: total.number.toLocaleString(),
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(date), 'date'),
      }),
    }

    return {
      date,
      info,
      datasets,
      total,
      graphData,
    }
  },
}
</script>

<style lang="scss" module>
$default-bdw: 3px;
$default-boxdiff: 35px;

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
  color: $green-1;
  border: $default-bdw solid $green-1;

  > span {
    display: block;

    @include font-size(14);

    &:first-child {
      flex-shrink: 2;
      margin-top: 1px;
      text-align: left;
      white-space: pre-wrap;
    }

    &:last-child {
      // white-space: nowrap;
      flex-shrink: 1;
      margin-left: 10px;
      text-align: right;
    }

    &:not(:last-child) {
      overflow-wrap: break-word;
    }

    div {
      display: inline-block;
      width: 7rem;
    }
  }

  strong {
    @include font-size(16);
  }

  span.unit {
    @include font-size(14);
  }
}

.content.top {
  border-bottom: none;
}

.content.br {
  border-top: none;

  div {
    width: 50%;
    text-align: right;
  }
}

.box {
  display: block;
  margin-top: $default-bdw;
}
@function px2vw($px, $vw: 0) {
  @if $vw > 0 {
    @return ceil($px / $vw * 100000vw) / 1000;
  } @else {
    @return $px * 1px;
  }
}

@mixin override($vw, $bdw, $fz, $boxdiff) {
  .content {
    padding: px2vw(5, $vw) px2vw(10, $vw);
    border: px2vw($bdw, $vw) solid $green-1;

    > span {
      @include font-size($fz);

      &:first-child {
        margin-top: px2vw(1, $vw);
      }

      &:last-child {
        margin-left: 10px;
      }
    }

    strong {
      @include font-size($fz + 2);
    }

    span.unit {
      @include font-size($fz);
    }
  }

  .content.br {
    border-top: none;
  }

  .box {
    margin-top: px2vw($bdw, $vw);
  }
}

// Vuetify Breakpoints: Large (1264)
@include lessThan(1263) {
  @include override(1263, 3, 14, 35);
}

// Vuetify Breakpoints: Small (960)
@include lessThan(959) {
  @include override(960, 3, 14, 35);
}
// Vuetify Breakpoints: Extra Small (600)
@include lessThan(600) {
  @include override(600, 3, 14, 35);
}
</style>
