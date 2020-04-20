<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('市町村毎の感染状況(地図)')"
      :title-id="'ibaraki-city-map-table'"
      :date="Data.patients.date"
    >
      <template v-slot:button>
        <p :class="$style.note">
          {{ $t('（注）退院している人数を含む') }}
          {{ cityPatientsNumber }}
        </p>
      </template>
      <ibaraki-map />
    </data-view>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import IbarakiMap from '@/assets/ibaraki-map.svg'
import DataView from '@/components/DataView.vue'

export default {
  components: {
    IbarakiMap,
    DataView,
  },
  data() {
    const patients = Data.patients.data
    // 市町村の患者人数の連想配列
    const cityPatientsNumber = {}
    for (const key of patients) {
      cityPatientsNumber[key.居住地] = patients.filter(function (x) {
        return x.居住地 === key.居住地
      }).length
    }

    const data = {
      Data,
      cityPatientsNumber,
    }

    return data
  },
  methods: {},
}
</script>

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>
<!-- 本来ならばSVGをinline展開してそこに限定してcssを適用するべきだが、inline展開ができなかったため妥協 -->
<style lang="scss">
#ibaraki-map_svg__Yuuki {
  fill: blue;
}
#ibaraki-map_svg__Goka {
  fill: blue;
}
#ibaraki-map_svg__Shirosato {
  fill: blue;
}
#ibaraki-map_svg__Tone {
  fill: blue;
}
#ibaraki-map_svg__Kawachi {
  fill: blue;
}
</style>
