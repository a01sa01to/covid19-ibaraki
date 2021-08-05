<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('国の指標による感染状況')"
        :title-id="'infection-status-by-national-index'"
        :date="Data.ibk_corona_next.date"
      >
        <template #button>
          <ul :class="$style.note">
            <li>
              {{
                $t(
                  '医療提供体制については、空港検疫や県外で確認された陽性者による病床利用を算入していない。'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '入院が必要な方は、発生届の翌日までに入院できているため、「入院率」は適用されない。'
                )
              }}
            </li>
            <li>
              {{ $t('確保病床数は600床、確保重症病床数は70床となっている。') }}
            </li>
            <li>
              {{
                $t(
                  '指標名に*印のついたものは、人口10万人当たりの値を表す。なお、人口は2021年1月1日現在のものを用いた。'
                )
              }}
            </li>
          </ul>
          <table class="NationalInfectionStatus">
            <thead>
              <tr>
                <th colspan="3" style="background-color: #d9d9d9">
                  {{ $t('医療提供体制への負荷') }}
                </th>
              </tr>
              <tr>
                <th>{{ $t('病床稼働率') }}</th>
                <th>{{ $t('重症病床稼働率') }}</th>
                <th>{{ $t('療養者数') }}*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>{{ statusData.sickbed.toFixed(1) }}</strong>
                  <span :class="$style.unit">%</span>
                </td>
                <td>
                  <strong>{{ statusData.pillar.toFixed(1) }}</strong>
                  <span :class="$style.unit">%</span>
                </td>
                <td>
                  <strong>{{ statusData.care.toFixed(1) }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    :class="['stageMark', 'MarkSmall']"
                    :style="stageToStyle(stage.sickbed)"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.sickbed }}</strong>
                </td>
                <td>
                  <span
                    :class="['stageMark', 'MarkSmall']"
                    :style="stageToStyle(stage.pillar)"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.pillar }}</strong>
                </td>
                <td>
                  <span
                    :class="['stageMark', 'MarkSmall']"
                    :style="stageToStyle(stage.care)"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.care }}</strong>
                </td>
              </tr>
              <tr :class="$style.additionalData">
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.sickbed }}</strong>
                  <span :class="$style.unit">%</span>
                </td>
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.pillar }}</strong>
                  <span :class="$style.unit">%</span>
                </td>
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.care }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="NationalInfectionStatus">
            <thead>
              <tr>
                <th colspan="3" style="background-color: #d9d9d9">
                  {{ $t('感染状況（週合計）') }}
                </th>
              </tr>
              <tr>
                <th>{{ $t('陽性率') }}</th>
                <th>{{ $t('新規陽性者数') }}*</th>
                <th>{{ $t('感染経路不明割合') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>{{ statusData.posi_rate.toFixed(1) }}</strong>
                  <span :class="$style.unit">%</span>
                </td>
                <td>
                  <strong>{{ statusData.new_patients.toFixed(1) }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </td>
                <td>
                  <strong>{{ statusData.nonclose_rate.toFixed(1) }}</strong>
                  <span :class="$style.unit">%</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    :class="['stageMark', 'MarkSmall']"
                    :style="stageToStyle(stage.posi_rate)"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.posi_rate }}</strong>
                </td>
                <td>
                  <span
                    :class="['stageMark', 'MarkSmall']"
                    :style="stageToStyle(stage.new_patients)"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.new_patients }}</strong>
                </td>
                <td>
                  <span
                    :class="['stageMark', 'MarkSmall']"
                    :style="stageToStyle(stage.nonclose_rate)"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.nonclose_rate }}</strong>
                </td>
              </tr>
              <tr :class="$style.additionalData">
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.posi_rate }}</strong>
                  <span :class="$style.unit">%</span>
                </td>
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.new_patients }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </td>
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.nonclose_rate }}</strong>
                  <span :class="$style.unit">%</span>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p :class="$style.note">
            {{ $t('（参考）国の指標におけるStage指標') }}
          </p>
          <table class="stageTable NationalInfectionStatus">
            <tbody>
              <tr>
                <td><span class="stageMark" :style="stageToStyle(1)" /></td>
                <td>Stage 1</td>
                <td>{{ $t('医療提供体制に特段の支障がない段階') }}</td>
              </tr>
              <tr>
                <td><span class="stageMark" :style="stageToStyle(2)" /></td>
                <td>Stage 2</td>
                <td>
                  {{
                    $t('感染者の漸増および医療提供体制への負荷が蓄積する段階')
                  }}
                </td>
              </tr>
              <tr>
                <td><span class="stageMark" :style="stageToStyle(3)" /></td>
                <td>Stage 3</td>
                <td>
                  {{
                    $t(
                      '感染者の急増及び医療提供体制における大きな支障の発生を避けるための対応が必要な段階'
                    )
                  }}
                </td>
              </tr>
              <tr>
                <td><span class="stageMark" :style="stageToStyle(4)" /></td>
                <td>Stage 4</td>
                <td>
                  {{
                    $t(
                      '爆発的な感染拡大及び深刻な医療提供体制の機能不全を避けるための対応が必要な段階'
                    )
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </data-view>
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import DataView from '@/components/index/_shared/DataView.vue'
import CityData from '@/data/cities.json'
import Data from '@/data/data.json'

export default {
  components: {
    DataView,
  },
  data() {
    const PrefPopulation = CityData.reduce((a, b) => a + b.population, 0)
    const coronaNext = Data.ibk_corona_next
    const stage = {
      sickbed: 2,
      pillar: 2,
      care: 2,
      posi_rate: 2,
      new_patients: 2,
      nonclose_rate: 2,
    }

    const _ = {
      sickbed: (coronaNext.sickbed / 600) * 100,
      pillar: (coronaNext.pillar / 70) * 100,
      care: (coronaNext.care / PrefPopulation) * 10e4,
      new_patients: ((coronaNext.new_patients * 7) / PrefPopulation) * 10e4,
      nonclose_rate:
        (coronaNext.non_closecontact / coronaNext.new_patients) * 100,
      posi_rate: coronaNext.positive_rate,
    }
    const _Y = {
      sickbed: (coronaNext.sickbed_lastweek / 600) * 100,
      pillar: (coronaNext.pillar_lastweek / 70) * 100,
      care: (coronaNext.care_lastweek / PrefPopulation) * 10e4,
      new_patients:
        ((coronaNext.new_patients_lastweek * 7) / PrefPopulation) * 10e4,
      nonclose_rate:
        (coronaNext.non_closecontact_lastweek /
          coronaNext.new_patients_lastweek) *
        100,
      posi_rate: coronaNext.positive_rate_lastweek,
    }
    const delta = {}
    for (const key in _) {
      delta[key] = _[key] - _Y[key]
    }
    // [ _でのKey, Stage2->3, Stage3->4]
    const list = [
      ['sickbed', 20, 50],
      ['pillar', 20, 50],
      ['care', 20, 30],
      ['new_patients', 15, 25],
      ['nonclose_rate', 50, 50],
      ['posi_rate', 5, 10],
    ]

    for (const l of list) {
      const d = _[l[0]] // Key
      stage[l[0]] += (d > l[1]) + (d > l[2])
      if (stage[l[0]] <= 2) {
        stage[l[0]] = this.$t('2以下')
      } else if (l[1] === l[2]) {
        stage[l[0]] = this.$t('3以上')
      } else {
        stage[l[0]] = stage[l[0]].toLocaleString()
      }
    }

    const stageStyle = {
      1: 'background-color:#b4c7e7;',
      2: 'background-color:#fff2cc;',
      3: 'background-color:#c55a11;',
      4: 'background-color:#ff0000;',
      '2以下':
        'background:linear-gradient(to bottom right,#b4c7e7 0%,#b4c7e7 50%,#fff2cc 50%,#fff2cc 100%);',
      '3以上':
        'background:linear-gradient(to bottom right,#c55a11 0%,#c55a11 50%,#ff0000 50%,#ff0000 100%);',
    }
    const stageToStyle = (stg) => stageStyle[stg]

    const formatDelta = (n, digit) => {
      let str = ''
      switch (Math.sign(n)) {
        case 1:
          str = '+'
          break
        case -1:
          str = '-'
          break
        case 0:
          str = '±'
          break
      }
      str += ' '
      str += Math.abs(n).toFixed(digit)
      return str
    }

    const deltaStr = {}
    for (const key in delta) {
      deltaStr[key] = formatDelta(delta[key], 1)
    }

    return {
      Data,
      statusData: _,
      stage,
      deltaStr,
      stageToStyle,
    }
  },
}
</script>

<style lang="scss" module>
.note {
  @include font-size(12);

  margin-top: 10px;
  margin-bottom: 0;
  color: $gray-3;
}

$default-bdw: 3px;
$default-boxh: 150px;
$default-boxdiff: 35px;

.container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  // override default styles
  padding-left: 0 !important;
  line-height: 1.35;

  * {
    box-sizing: border-box;
  }

  ul {
    padding-left: 0;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: $default-boxh;
  padding: 10px 2px;
  text-align: center;

  > span {
    @include font-size(18);

    display: block;

    &.link {
      @include font-size(12);

      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      margin: 4px;
      margin-top: 16px;
      // font-size: 1.2rem;
      text-align: right;

      > a {
        width: 49.5%;
      }
    }

    &:not(:last-child) {
      overflow-wrap: break-word;
    }
  }

  span strong {
    @include font-size(20);
  }

  span.unit {
    @include font-size(18);
  }
}

.additionalData {
  font-size: 0.8em;

  span.delta::before {
    content: '(';
  }

  span.unit::after {
    content: ' )';
  }
}
</style>
<style lang="scss">
table.NationalInfectionStatus {
  @include font-size(14);

  width: 100%;
  margin-bottom: 12px;

  th {
    font-weight: 400;
  }

  td {
    text-align: center;
  }

  &.stageTable {
    &,
    tbody,
    tr {
      width: 100%;
    }

    td {
      &:nth-child(1) {
        width: 50px;
        height: fit-content;
        text-align: right;
      }

      &:nth-child(2) {
        width: 70px;
        text-align: left;
      }

      &:nth-child(3) {
        width: fit-content;
        text-align: left;
      }
    }
  }

  span.stageMark {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 0.5rem 0 0;
    vertical-align: middle;
    border: 0.5px solid #aaa;
    border-radius: 8px;

    &.MarkSmall {
      margin: 0;
      transform: scale(0.75);
    }
  }
}
</style>
