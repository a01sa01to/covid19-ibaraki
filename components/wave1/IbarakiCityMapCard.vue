<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('市町村毎の感染状況（第1波）')"
      :title-id="'wave1/ibaraki-city-table'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="Data.patients.date"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/hassei.html'"
      :source="$t('県公式サイトで見る')"
      :custom-sort="customSort"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data_wave1.json'
import formatTable, { headers2 } from '@/utils/formatTable'
import DataTable from '@/components/CityTable.vue'
import Phonetics from '@/data/cities.json'

export default {
  components: {
    DataTable,
  },
  data() {
    const patientsTable = formatTable(Data.patients.data)

    patientsTable.headers = headers2

    for (const header of patientsTable.headers) {
      header.text = this.$t(header.value)
    }

    for (const row of patientsTable.datasets) {
      row.居住地 = this.$t(row.居住地)
      const flt = patientsTable.cityDataset.filter(
        (_) => _.市町村 === row.居住地
      )
      if (flt.length === 0) {
        const Hira = Phonetics.filter((c) => c.city === row.居住地)[0]
        let area = ''
        if (
          [
            '日立市',
            '常陸太田市',
            '高萩市',
            '北茨城市',
            'ひたちなか市',
            '常陸大宮市',
            '那珂市',
            '東海村',
            '大子町',
            'ひたちなか保健所管内',
          ].includes(row.居住地)
        )
          area = '県北地域'
        else if (
          [
            '水戸市',
            '笠間市',
            '小美玉市',
            '茨城町',
            '城里町',
            '大洗町',
            '中央保健所管内',
          ].includes(row.居住地)
        )
          area = '県央地域'
        else if (
          [
            '鹿嶋市',
            '潮来市',
            '神栖市',
            '行方市',
            '鉾田市',
            '潮来保健所管内',
          ].includes(row.居住地)
        )
          area = '鹿行地域'
        else if (
          [
            '土浦市',
            '石岡市',
            '龍ケ崎市',
            '取手市',
            '牛久市',
            'つくば市',
            '守谷市',
            '稲敷市',
            'かすみがうら市',
            'つくばみらい市',
            '美浦村',
            '阿見町',
            '河内町',
            '利根町',
            '龍ケ崎保健所管内',
            'つくば保健所管内',
            '土浦保健所管内',
          ].includes(row.居住地)
        )
          area = '県南地域'
        else if (
          [
            '古河市',
            '筑西市',
            '結城市',
            '下妻市',
            '常総市',
            '坂東市',
            '桜川市',
            '八千代町',
            '五霞町',
            '境町',
            '筑西保健所管内',
          ].includes(row.居住地)
        )
          area = '県西地域'
        else if (row.居住地 === '県内') area = '県内'
        else area = '県外'

        patientsTable.cityDataset.push({
          地域: area,
          市町村: row.居住地,
          ふりがな: Hira ? Hira.Hiragana : '',
          新規: Number(row.濃厚接触者 === ''),
          濃厚接触者: Number(row.濃厚接触者 !== ''),
          発生数計: 1,
        })
      } else {
        const idx = patientsTable.cityDataset.indexOf(flt[0])
        const citydata = patientsTable.cityDataset[idx]
        citydata.発生数計++
        row.濃厚接触者 === '' ? citydata.新規++ : citydata.濃厚接触者++
      }
    }

    patientsTable.cityDataset.sort((a, b) => (a.発生数計 < b.発生数計 ? 1 : -1))

    return {
      Data,
      patientsTable,
    }
  },
  methods: {
    customSort(items, index, isDesc) {
      items.sort((a, b) => {
        if (a[index[0]] === b[index[0]]) {
          return 0
        }

        const comparison = Number(a[index[0]]) < Number(b[index[0]]) ? -1 : 1

        return isDesc[0] ? comparison * -1 : comparison
      })
      return items
    },
  },
}
</script>
