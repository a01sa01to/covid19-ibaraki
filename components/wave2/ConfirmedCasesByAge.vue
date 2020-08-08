<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('年代別の感染状況')"
      :title-id="'wave2/number-of-confirmed-cases-by-age'"
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
import Data from '@/data/data.json'
import formatTable, { headers3 } from '@/utils/formatTable'
import DataTable from '@/components/AgeTable.vue'

export default {
  components: {
    DataTable,
  },
  data() {
    Data.patients.data = Data.patients.data.filter(
      (_) => new Date(_.date) > new Date('2020-06-19')
    )
    const patientsTable = formatTable(Data.patients.data)

    patientsTable.headers = headers3

    for (const header of patientsTable.headers) {
      header.text = this.$t(header.value)
    }

    for (const row of patientsTable.datasets) {
      row.年代 = this.$t(row.年代)
      const flt = patientsTable.ageDataset.filter((_) => _.年代 === row.年代)
      if (flt.length === 0) {
        patientsTable.ageDataset.push({
          年代: row.年代,
          計: 1,
          濃厚接触者: Number(row.濃厚接触者 === '○'),
          新規: Number(row.濃厚接触者 !== '○'),
        })
      } else {
        const idx = patientsTable.ageDataset.indexOf(flt[0])
        patientsTable.ageDataset[idx].計++
        row.濃厚接触者 === '○'
          ? patientsTable.ageDataset[idx].濃厚接触者++
          : patientsTable.ageDataset[idx].新規++
      }
    }

    for (const dt of patientsTable.ageDataset) {
      dt.割合 = ((dt.計 / patientsTable.datasets.length) * 100).toFixed(2) + '%'
    }

    patientsTable.ageDataset.sort((a, b) => (a.計 < b.計 ? 1 : -1))

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
