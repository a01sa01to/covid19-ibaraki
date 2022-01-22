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
                '整理番号に「*（アスタリスク）」がついている方については、概要のみが公表されているため、年代・性別・職業が異なっている可能性がある'
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

interface MetaData {
  startCursor: string
  hasPreviousPage: boolean
  updated: string
}

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
  startCursor: string
  hasPreviousPage: boolean
  patientsData: DataType[]
}
type Methods = {
  fetchOpenAPI: () => Promise<{ patientsData: DataType[]; metaData: MetaData }>
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
      date: '',
      page: 1,
      itemsPerPage: 15,
      hasPreviousPage: true,
      startCursor: '',
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
    if (this.hasPreviousPage) {
      const { patientsData, metaData } = await this.fetchOpenAPI()
      this.patientsData = this.patientsData.concat(patientsData)
      this.startCursor = metaData.startCursor
      this.hasPreviousPage = metaData.hasPreviousPage
      this.date = metaData.updated
      this.fetchIfNoCache()
    }
  },
  fetchOnServer: false, // i18nによる日付の変換ができないのでサーバーでは無効化
  methods: {
    async fetchOpenAPI() {
      const endpoint = 'https://a01sa01to.com/opendata/api/'
      return await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              covid19_ibaraki {
                patients(last: ${this.itemsPerPage}${
            this.startCursor ? `, before: "${this.startCursor}"` : ''
          }) {
                  dataset {
                    no
                    publish_date
                    onset_date
                    address
                    age
                    gender
                    occupation
                    close_contact
                  }
                  pageinfo {
                    hasPreviousPage
                    startCursor
                  }
                  last_update
                }
              }
            }
          `,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          const data: {
            dataset: DataType[]
            pageinfo: {
              hasPreviousPage: boolean
              startCursor: string
            }
            // eslint-disable-next-line camelcase
            last_update: string
          } = res.data.covid19_ibaraki.patients
          return {
            patientsData: data.dataset.reverse(),
            metaData: {
              startCursor: data.pageinfo.startCursor,
              hasPreviousPage: data.pageinfo.hasPreviousPage,
              // eslint-disable-next-line camelcase
              updated: data.last_update,
            },
          }
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
      this.startCursor = ''
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
        [26516, 26855],
        [26909, 28618],
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
