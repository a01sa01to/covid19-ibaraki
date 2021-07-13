<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesAttributesCard">
    <client-only>
      <data-table
        :title="$t('陽性者の属性')"
        :title-id="'attributes-of-confirmed-cases'"
        :table-data="patientsTable"
        :date="date"
        :info="sumInfoOfPatients"
        :url="'https://a01sa01to.com/opendata/covid19_ibaraki/patients'"
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
                {{ formatNo(item['整理番号']) }}
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
        <template #description>
          <p style="margin-bottom: 4px">
            {{
              $t(
                '整理番号に「*（アスタリスク）」がついている方については、概要のみが公表されているため、年代・性別が異なっている可能性がある'
              )
            }}
          </p>
        </template>
      </data-table>
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import VueI18n from 'vue-i18n'

import DataTable from '@/components/index/CardsInfection/ConfirmedCasesAttributes/DataTable.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import { DataType, formatTable, TableDateType } from '@/utils/formatTable'

type DataT = {
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
  onChangeItemsPerPage: (itemsPerPage: DataT['itemsPerPage']) => void
  onChangePage: (page: number) => void
  translateWord: (word: string) => string | VueI18n.TranslateResult
  translateDate: (date: string) => string | VueI18n.TranslateResult
  translateAge: (age: string) => VueI18n.TranslateResult
  formatNo: (num: number) => string
}
type Computed = {
  patientsTable: TableDateType
  dataMargin: number
}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  DataT,
  Methods,
  Computed,
  Props
> = {
  components: { DataTable },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const lastData = patientsGraph[patientsGraph.length - 1]
    const lastDay = this.$d(new Date(lastData.label), 'date')
    const dataLength = lastData.cumulative
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
      if (start < 0) {
        start = 0
      }
      const currentPageData = this.patientsData.slice(start, end)
      return formatTable(currentPageData)
    },
    dataMargin() {
      const margin = this.patientsData.length - this.page * this.itemsPerPage
      return margin < 0 ? 0 : margin
    },
  },
  async fetch() {
    if (this.endCursor > 0) {
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
      const endpoint =
        'https://a01sa01to.com/opendata/data/covid19_ibaraki/080004_ibaraki_covid19_patients.csv?mode=json&filter='
      const url =
        endpoint +
        encodeURIComponent(
          `num__No__under__${this.endCursor};num__No__over__${
            lastIndividualNum < 1 ? 1 : lastIndividualNum
          };key__["No","公表_年月日","患者_濃厚接触者フラグ","患者_居住地","患者_年代","患者_性別","患者_職業","発症_年月日"]`
        )

      return await fetch(url)
        .then((response) => response.json())
        .then((data) => ({ patientsData: data.reverse() }))
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
    formatNo(num) {
      // 概要のみ公表されている整理番号にはアスタリスクをつける
      const summaryOnly = [
        // 閉区間として記述
        [1720, 1777],
        [2214, 2223],
        [3524, 3603],
        [4661, 4677],
        [5006, 5033],
        [5632, 5669],
      ]
      for (const range of summaryOnly) {
        if (range[0] <= num && num <= range[1]) {
          return num.toLocaleString() + '*'
        }
      }
      return num.toLocaleString()
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
