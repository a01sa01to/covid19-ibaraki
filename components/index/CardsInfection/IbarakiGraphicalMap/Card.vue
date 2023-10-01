<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('市町村別感染状況（直近1週間）')"
      :title-id="'ibaraki-graphical-map'"
      :date="date"
    >
      <template #description>
        <p>
          {{ $t('・値は、直近1週間での人口1万人あたりの感染者数である') }}<br />
          {{ $t('・人口は2023年4月1日現在のものを用いた') }}<br />
          {{ $t('・白い地域は、直近1週間の感染者数が0人である') }}<br />
        </p>
        <p>{{ $t('凡例（単位は人）') }}</p>
        <table :class="$style.note">
          <tbody>
            <tr>
              <td>
                <span class="color-test infected-level1" />
                {{ $t('5未満') }}
              </td>
              <td><span class="color-test infected-level2" />5 - 10</td>
              <td><span class="color-test infected-level3" />10 - 15</td>
            </tr>
            <tr>
              <td><span class="color-test infected-level4" />15 - 20</td>
              <td><span class="color-test infected-level5" />20 - 25</td>
              <td>
                <span class="color-test infected-level6" />
                {{ $t('25以上') }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
      <ibaraki-map />
    </data-view>
    <slot name="breadCrumb" />
  </v-col>
</template>

<script>
import IbarakiMap from '@/assets/ibaraki-map.svg?inline'
import DataView from '@/components/index/_shared/DataView.vue'
import CityData from '@/data/cities.json'
import Data from '@/data/data.json'

export default {
  components: {
    IbarakiMap,
    DataView,
  },
  data() {
    return {
      date: Data.patients_city.date,
    }
  },
  mounted() {
    const { data } = Data.patients_city

    CityData.forEach((element) => {
      const num = data.filter((_) => _.city === element.city)[0].total

      const rate = (num / element.population) * 10000

      const targetElement = document
        .getElementById('茨城県地域区分図')
        .getElementById(element.Romaji)

      if (rate === 0) targetElement.classList.add('infected-level0')
      else if (rate < 5) targetElement.classList.add('infected-level1')
      else if (rate < 10) targetElement.classList.add('infected-level2')
      else if (rate < 15) targetElement.classList.add('infected-level3')
      else if (rate < 20) targetElement.classList.add('infected-level4')
      else if (rate < 25) targetElement.classList.add('infected-level5')
      else targetElement.classList.add('infected-level6')
    })
  },
}
</script>

<style lang="scss" module>
.note {
  @include font-size(14);

  td {
    padding-right: 1em;
  }
}
</style>

<!-- 本来ならばSVGをinline展開してそこに限定してcssを適用するべきだが、inline展開ができなかったため妥協 -->
<style lang="scss">
$infected-level0: #fff;
$infected-level1: #ccfbcc;
$infected-level2: #88f2a9;
$infected-level3: #44e5b7;
$infected-level4: #00c1d5;
$infected-level5: #004da5;
$infected-level6: #000072;

.color-test {
  display: inline-block;
  width: 2.5rem;
  height: 1rem;
  margin: 0 0.5rem 0 0;
  vertical-align: middle;
}

.infected-level0 {
  background-color: $infected-level0;
  fill: $infected-level0 !important;
}

.infected-level1 {
  background-color: $infected-level1;
  fill: $infected-level1 !important;
}

.infected-level2 {
  background-color: $infected-level2;
  fill: $infected-level2 !important;
}

.infected-level3 {
  background-color: $infected-level3;
  fill: $infected-level3 !important;
}

.infected-level4 {
  background-color: $infected-level4;
  fill: $infected-level4 !important;
}

.infected-level5 {
  background-color: $infected-level5;
  fill: $infected-level5 !important;
}

.infected-level6 {
  background-color: $infected-level6;
  fill: $infected-level6 !important;
}

svg {
  max-height: 600px;
}
</style>
