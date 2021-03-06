<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-table
        :title="$t('陽性者の属性（第2波）')"
        :title-id="'wave2/attributes-of-confirmed-cases'"
        :table-data="patientsTable"
        :date="date"
        :info="sumInfoOfPatients"
        :url="'https://opendata.a01sa01to.com/covid19_ibaraki/patients'"
        :loaded="dataMargin >= 0"
        :error="$fetchState.error"
        :data-length="dataLength"
        @on-change-items-per-page="onChangeItemsPerPage"
        @on-change-page="onChangePage"
      >
        <template #tableBody="{ items, headers }">
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <th scope="row" class="text-center DataTable-cell">
                {{ item['整理番号'] }}
              </th>
              <td
                v-for="(header, j) in headers.slice(1)"
                :key="j"
                :class="`text-${header.align || 'start'} DataTable-cell`"
              >
                <template v-if="header.type === 'date'">
                  {{ translateDate(item[header.value]) }}
                </template>
                <template v-else-if="header.type === 'age'">
                  {{ translateAge(item[header.value]) }}
                </template>
                <template v-else>
                  {{ translateWord(item[header.value]) }}
                </template>
              </td>
            </tr>
          </tbody>
        </template>
      </data-table>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import DataTable from '@/components/DataTable.vue'
import Data from '@/data/data.json'
import { DataType, formatTable, TableDateType } from '@/utils/formatTable'

type Data = {
  dataLength: number
  sumInfoOfPatients: {
    lText: string
    sText: VueI18n.TranslateResult
    unit: VueI18n.TranslateResult
  }
  date: string
  page: number
  itemsPerPage: 15 | 30 | 50 | 100 | 200 | 300 | 500 | 1000
  endCursor: number
  patientsData: DataType[]
}
type Methods = {
  fetchOpenAPI: () => Promise<{ patientsData: DataType }>
  fetchIfNoCache: () => void
  onChangeItemsPerPage: (itemsPerPage: Data['itemsPerPage']) => void
  onChangePage: (page: number) => void
  translateWord: (word: string) => string | VueI18n.TranslateResult
  translateDate: (date: string) => string | VueI18n.TranslateResult
  translateAge: (age: string) => VueI18n.TranslateResult
}
type Computed = {
  patientsTable: TableDateType
  dataMargin: number
}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: { DataTable },
  data() {
    // 感染者数グラフ
    const lastDay = this.$d(
      dayjs("2020-10-17").toDate(),
      'date'
    )
    const dataLength = 557
    const sumInfoOfPatients = {
      lText: dataLength.toLocaleString(),
      sText: this.$t('{date}の累計', { date: lastDay }),
      unit: this.$t('人'),
    }

    return {
      dataLength,
      sumInfoOfPatients,
      date: Data.lastUpdate,
      page: 1,
      itemsPerPage: 15,
      endCursor: dataLength,
      patientsData: [],
    }
  },
  computed: {
    patientsTable() {
      const end = this.page * this.itemsPerPage
      let start = end - this.itemsPerPage
      if(start < 0){ start = 0 }
      const currentPageData = this.patientsData.slice(start, end)
      return formatTable(currentPageData)
    },
    dataMargin() {
      const margin = this.patientsData.length - this.page * this.itemsPerPage
      return margin < 0 ? 0 : margin
    },
  },
  async fetch() {
    if(this.endCursor > 0){
      const { patientsData } = await this.fetchOpenAPI()
      this.endCursor -= patientsData.length
      this.patientsData = this.patientsData.concat(patientsData)
      this.fetchIfNoCache()
    }
  },
  fetchOnServer: false, // i18nによる日付の変換ができないのでサーバーでは無効化
  methods: {
    async fetchOpenAPI() {
      const lastIndividualNum = this.endCursor - this.itemsPerPage + 1
      const endpoint = 'https://opendata.a01sa01to.com/data/covid19_ibaraki/080004_ibaraki_covid19_patients.csv?mode=json&filter='
      const url = endpoint + encodeURIComponent(`num__No__under__${this.endCursor+168};num__No__over__${lastIndividualNum < 1 ? 169 : lastIndividualNum+168};key__["No","公表_年月日","患者_濃厚接触者フラグ","患者_居住地","患者_年代","患者_性別","患者_職業","発症_年月日"]`)

      return await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const returnData = data.reverse();
          returnData.forEach((d: { No: number })=>{ d.No -= 168 })
          return { patientsData: returnData }
        })
        .catch((error) => {
          throw new Error(error.toString())
        })
    },
    fetchIfNoCache() {
      // メモリ上に次ページのデータがなければ先読みしてページネーション時の待ち時間を減らす
      if (this.dataMargin <= 0) setTimeout(() => this.$fetch(), 0)
    },
    onChangeItemsPerPage(itemsPerPage) {
      this.itemsPerPage = itemsPerPage
      this.endCursor = this.dataLength
      this.patientsData = []
      this.$fetch()
    },
    onChangePage(page) {
      this.page = page
      this.fetchIfNoCache()
    },
    translateDate(date) {
      const day = dayjs(date)
      if (!day.isValid()) return date
      return this.$d(day.toDate(), 'date')
    },
    translateAge(_age) {
      const [age, dai] = _age.split(/(代)$/, 2)
      return dai ? this.$t('{age}代', { age }) : this.$t(_age)
    },
    translateWord(word) {
      // 文字列が `null` or 以下の記号だった場合は翻訳しない
      // 全角のハイフン, 半角のハイフン, 全角のダッシュ, 全角ハイフンマイナス
      const notTranslateWords = ['-', '‐', '―', '－', null]
      return notTranslateWords.includes(word) ? word : this.$t(word)
    },
  },
}
export default options
</script>

<style lang="scss" scoped>
.DataTable-cell {
  white-space: nowrap;
}
</style>
