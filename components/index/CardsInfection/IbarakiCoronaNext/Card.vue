<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('茨城版コロナNext')"
        :title-id="'ibaraki-corona-next'"
        :date="Data.ibk_corona_next.date"
        :url="'https://a01sa01to.com/opendata/covid19_ibaraki/corona_next'"
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
          </ul>
          <ul :class="$style.container">
            <li style="width: 100%; list-style: none">
              <div
                :class="$style.content"
                style="display: block; min-height: fit-content"
              >
                <span>
                  {{ $t('現在の対策状況：') }}
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ Data.ibk_corona_next.stage }}</strong
                  ><br />
                  {{ $t('（{date}から）', { date: formattedMoveDate }) }}
                </span>
              </div>
            </li>
          </ul>
          <table class="ibkCoronaNext">
            <thead>
              <tr>
                <th colspan="2" style="background-color: #d9d9d9">
                  {{ $t('医療提供体制') }}
                </th>
              </tr>
              <tr>
                <th>{{ $t('重症病床稼働数') }}</th>
                <th>{{ $t('病床稼働数') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>{{ patients.severe.toFixed(0) }}</strong>
                  <span :class="$style.unit">{{ $t('床.bed') }}</span>
                </td>
                <td>
                  <strong>{{ patients.sickbed.toFixed(0) }}</strong>
                  <span :class="$style.unit">{{ $t('床.bed') }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    :class="['stageMark', 'MarkSmall', `stage${stage.severe}`]"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.severe.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('相当.stage') }}</span>
                </td>
                <td>
                  <span
                    :class="['stageMark', 'MarkSmall', `stage${stage.sickbed}`]"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.sickbed.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('相当.stage') }}</span>
                </td>
              </tr>
              <tr :class="$style.additionalData">
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.severe }}</strong>
                  <span :class="$style.unit">{{ $t('床.bed') }}</span>
                </td>
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.sickbed }}</strong>
                  <span :class="$style.unit">{{ $t('床.bed') }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="ibkCoronaNext">
            <thead>
              <tr>
                <th colspan="2" style="background-color: #99a8e0">
                  {{ $t('感染状況（週平均）') }}
                </th>
              </tr>
              <tr>
                <th>{{ $t('1日当たりの陽性者数') }}</th>
                <th>{{ $t('陽性者のうち濃厚接触者以外の数') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>{{ patients.new_patients.toFixed(1) }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </td>
                <td>
                  <strong>{{ patients.non_closecontact.toFixed(1) }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    :class="[
                      'stageMark',
                      'MarkSmall',
                      `stage${stage.new_patients}`,
                    ]"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.new_patients.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('相当.stage') }}</span>
                </td>
                <td>
                  <span
                    :class="[
                      'stageMark',
                      'MarkSmall',
                      `stage${stage.non_closecontact}`,
                    ]"
                  />
                  <span :class="$style.unit">Stage</span>
                  <strong>{{ stage.non_closecontact.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('相当.stage') }}</span>
                </td>
              </tr>
              <tr :class="$style.additionalData">
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.new_patients }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </td>
                <td>
                  <span :class="$style.delta">{{ $t('前週比') }}:&nbsp;</span>
                  <strong>{{ deltaStr.non_closecontact }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p :class="$style.note">
            {{ $t('（参考）茨城版コロナNextにおけるStage指標') }}
          </p>
          <table class="stageTable ibkCoronaNext">
            <tbody>
              <tr>
                <td><span class="stageMark stage1" /></td>
                <td>Stage 1</td>
                <td>{{ $t('感染を抑制できている状態') }}</td>
              </tr>
              <tr>
                <td><span class="stageMark stage2" /></td>
                <td>Stage 2</td>
                <td>{{ $t('感染を概ね抑制できている状態') }}</td>
              </tr>
              <tr>
                <td><span class="stageMark stage3" /></td>
                <td>Stage 3</td>
                <td>{{ $t('感染が拡大している状態') }}</td>
              </tr>
              <tr>
                <td><span class="stageMark stage4" /></td>
                <td>Stage 4</td>
                <td>{{ $t('感染爆発・医療崩壊のリスクが高い状態') }}</td>
              </tr>
            </tbody>
          </table>
        </template>
        <template #footer>
          <open-data-link
            v-show="
              'https://a01sa01to.com/opendata/covid19_ibaraki/corona_next'
            "
            :url="'https://a01sa01to.com/opendata/covid19_ibaraki/corona_next'"
          />
        </template>
      </data-view>
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import DataView from '@/components/index/_shared/DataView.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'
import Data from '@/data/data.json'

export default {
  components: {
    DataView,
    OpenDataLink,
  },
  data() {
    const patients = Data.ibk_corona_next
    const stage = {
      severe: 1,
      sickbed: 1,
      new_patients: 1,
      non_closecontact: 1,
    }

    const _ = {
      severe: patients.severe,
      sickbed: patients.sickbed,
      new_patients: patients.new_patients,
      non_closecontact: patients.non_closecontact,
    }
    const _Y = {
      severe: patients.severe_lastweek,
      sickbed: patients.sickbed_lastweek,
      new_patients: patients.new_patients_lastweek,
      non_closecontact: patients.non_closecontact_lastweek,
    }
    const delta = {}
    for (const key in _) {
      delta[key] = _[key] - _Y[key]
    }
    // [ _でのKey, Stage1->2の境値, Stage2->3, Stage3->4]
    const list = [
      ['severe', 7, 12, 24],
      ['sickbed', 67, 185, 287],
      ['new_patients', 20, 60, 100],
      ['non_closecontact', 10, 25, 40],
    ]

    for (const l of list) {
      const d = _[l[0]] // Key
      stage[l[0]] += (d > l[1]) + (d > l[2]) + (d > l[3])
    }

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
      if (key === 'severe' || key === 'sickbed') {
        deltaStr[key] = formatDelta(delta[key], 0)
      } else {
        deltaStr[key] = formatDelta(delta[key], 1)
      }
    }

    const moveDate = new Date(Data.ibk_corona_next.moveDate)
    const formattedMoveDate = this.$d(moveDate, 'dateWithoutYear')

    return {
      Data,
      patients,
      stage,
      deltaStr,
      formattedMoveDate,
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
table.ibkCoronaNext {
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

    &.stage1 {
      background-color: #cff;
    }

    &.stage2 {
      background-color: #ff6;
    }

    &.stage3 {
      background-color: #f93;
    }

    &.stage4 {
      background-color: #f00;
    }
  }
}
</style>
