<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('市町村毎の感染状況')"
      :title-id="'ibaraki-city-table'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/hassei.html'"
      :source="$t('県公式サイトで見る')"
      :date="Data.patients.date"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatTable from '@/utils/formatTable'
import DataTable from '@/components/CityTable.vue'

export default {
  components: {
    DataTable
  },
  data() {
    const patientsTable = formatTable(Data.patients.data)

	patientsTable.headers = [{"text": "発生数"}, {"text": "市町村"}, {"text": "入院者数"}, {"text": "退院者数"}]

    for (const header of patientsTable.headers) {
	  header.text = this.$t(header.text);
	  header.value = header.text;
	}

	for (const row of patientsTable.datasets) {
		const flt = patientsTable.cityDataset.filter(_=>_.市町村 === row.居住地);
		if(flt.length === 0){
			patientsTable.cityDataset.push({
				市町村: row.居住地,
				入院者数: (row.退院 !== "◯") ? 1 : 0,
				退院者数: (row.退院 === "◯") ? 1 : 0,
				発生数: 1
			})
		}
		else{
			const idx = patientsTable.cityDataset.indexOf(flt[0])
			patientsTable.cityDataset[idx].発生数++;
			(row.退院 === "◯") ? patientsTable.cityDataset[idx].退院者数++ : patientsTable.cityDataset[idx].入院者数++
		}
	}

	const data =  {
      Data,
      patientsTable
    }

    return data;
  }
}
</script>
