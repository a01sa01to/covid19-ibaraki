<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('茨城版コロナNext')"
      :title-id="'ibaraki-colona-next'"
      :date="Data.patients.date"
    >
      <template v-slot:button>
        <p :class="$style.note">
          {{ $t('（注）各値は直近1週間の平均値') }}<br />
          {{ $t('（注）病床稼働率は最新のデータでない可能性あり') }}
        </p>
        <table>
          <thead>
            <tr>
              <th colspan="2" style="background-color: #d9d9d9;">
                県内の医療提供体制
              </th>
              <th colspan="1" style="background-color: #98d6a4;">
                都内の感染状況
              </th>
            </tr>
            <tr>
              <th>重症病床稼働率</th>
              <th>病床稼働率</th>
              <th>1日当たりの経路不明陽性者数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{{ patients.pillar.toFixed(1) }}</strong>
                <span :class="$style.unit">%</span>
              </td>
              <td>
                <strong>{{ patients.sickbed.toFixed(1) }}</strong>
                <span :class="$style.unit">%</span>
              </td>
              <td>
                <strong>{{ avg.tokyo.toFixed(1) }}</strong>
                <span :class="$style.unit">{{ $t('人') }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span :class="$style.unit">Stage</span>
                <strong>{{ stage.pillar.toLocaleString() }}</strong>
              </td>
              <td>
                <span :class="$style.unit">Stage</span>
                <strong>{{ stage.sickbed.toLocaleString() }}</strong>
              </td>
              <td>
                <span :class="$style.unit">Stage</span>
                <strong>{{ stage.tokyo.toLocaleString() }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th colspan="3" style="background-color: #99a8e0;">
                県内の感染状況
              </th>
            </tr>
            <tr>
              <th>1日当たりの陽性者数</th>
              <th>陽性者のうち濃厚接触者以外の数</th>
              <th>陽性率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{{ avg.new_patients.toFixed(1) }}</strong>
                <span :class="$style.unit">{{ $t('人') }}</span>
              </td>
              <td>
                <strong>{{ avg.non_densecontact.toFixed(1) }}</strong>
                <span :class="$style.unit">{{ $t('人') }}</span>
              </td>
              <td>
                <strong>{{ avg.rate.toFixed(1) }}</strong>
                <span :class="$style.unit">%</span>
              </td>
            </tr>
            <tr>
              <td>
                <span :class="$style.unit">Stage</span>
                <strong>{{ stage.new_patients.toLocaleString() }}</strong>
              </td>
              <td>
                <span :class="$style.unit">Stage</span>
                <strong>{{ stage.non_densecontact.toLocaleString() }}</strong>
              </td>
              <td>
                <span :class="$style.unit">Stage</span>
                <strong>{{ stage.rate.toLocaleString() }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p :class="$style.note">
          {{ $t('（参考）茨城版コロナNextにおけるStage指標') }}
        </p>
        <table class="stageTable">
          <tbody>
            <tr>
              <td><span style="background-color: #cff;" /></td>
              <td>Stage 1</td>
              <td>感染を抑制できている状態</td>
            </tr>
            <tr>
              <td><span style="background-color: #ff6;" /></td>
              <td>Stage 2</td>
              <td>感染を概ね抑制できている状態</td>
            </tr>
            <tr>
              <td><span style="background-color: #f93;" /></td>
              <td>Stage 3</td>
              <td>感染が拡大している状態</td>
            </tr>
            <tr>
              <td><span style="background-color: #f00;" /></td>
              <td>Stage 4</td>
              <td>感染爆発・医療崩壊のリスクが高い状態</td>
            </tr>
          </tbody>
        </table>
      </template>
    </data-view>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import DataView from '@/components/DataView.vue'

export default {
  components: {
    DataView,
  },
  data() {
    const patients = Data.ibk_colona_next
    const avg = { new_patients: 0, non_densecontact: 0, rate: 0, tokyo: 0 }
    const stage = {
      pillar: 1,
      sickbed: 1,
      new_patients: 1,
      non_densecontact: 1,
      rate: 1,
      tokyo: 1,
    }

    avg.new_patients = patients.new_patients.reduce((a, b) => a + b.value, 0)
    avg.non_densecontact = patients.non_densecontact.reduce(
      (a, b) => a + b.value,
      0
    )
    avg.rate = avg.new_patients / patients.pcr.reduce((a, b) => a + b.value, 0)
    avg.tokyo = patients.tokyo.reduce((a, b) => a + b.value, 0)
    for (const key in avg) {
      avg[key] /= 7
    }

    const _ = { pillar: patients.pillar, sickbed: patients.sickbed }
    for (const i in avg) {
      _[i] = avg[i]
    }

    // [ _でのKey, Stage1->2の境値, Stage2->3, Stage3->4]
    const list = [
      ['pillar', 10, 30, 60],
      ['sickbed', 30, 45, 70],
      ['new_patients', 1, 5, 10],
      ['non_densecontact', 1, 3, 5],
      ['rate', 1, 3, 7],
      ['tokyo', 10, 50, 100],
    ]

    for (const l of list) {
      const d = _[l[0]] // Key
      stage[l[0]] += d > l[1] ? 1 : 0 // Stage2以上であれば +1
      stage[l[0]] += d > l[2] ? 1 : 0 // Stage3以上であれば +1
      stage[l[0]] += d > l[3] ? 1 : 0 // Stage4以上であれば +1
    }

    const data = {
      Data,
      patients,
      avg,
      stage,
    }
    return data
  },
  mounted() {},
}
</script>

<style lang="scss" module>
.note {
  @include font-size(12);

  margin-top: 10px;
  margin-bottom: 0;
  color: $gray-3;
}
table {
  @include font-size(14);
}
</style>
<style lang="scss">
table {
  margin-bottom: 12px;

  th {
    font-weight: 400;
  }

  td {
    width: calc(100% / 6);
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
        span {
          vertical-align: middle;
          width: 16px;
          height: 16px;
          display: inline-block;
          margin: 0 0.5rem 0 0;
          border-radius: 8px;
          border: 0.5px solid #aaa;
        }
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
}
</style>
