import Vue from 'vue'
import dayjs from 'dayjs'

const headers = [
  { text: '整理番号', value: '整理番号' },
  { text: '公表日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '濃厚接触者', value: '濃厚接触者' },
]

type DataType = {
  num: number
  date: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  [key: string]: any
}

type TableDataType = {
  整理番号: DataType['num']
  公表日: string
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  濃厚接触者: DataType['濃厚接触者']
}

type CityTableType = {
  地域: string
  市町村: string
  ふりがな: string
  発生数: number
}

type AgeTableType = {
  年代: string
  新規: number
  濃厚接触者: number
  計: number
  割合: number
}

export const headers2 = [
  { text: '地域', value: '地域' },
  { text: '市町村', value: '市町村' },
  { text: 'ふりがな', value: 'ふりがな' },
  { text: '発生数', value: '発生数' },
]

export const headers3 = [
  { text: '年代', value: '年代' },
  { text: '新規', value: '新規' },
  { text: '濃厚接触者', value: '濃厚接触者' },
  { text: '計', value: '計' },
  { text: '新規の割合', value: '新規の割合' },
  { text: '全体に占める割合', value: '全体に占める割合' },
]

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
  cityDataset: CityTableType[]
  ageDataset: AgeTableType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: [],
    cityDataset: [],
    ageDataset: [],
  }
  data.forEach((d) => {
    const releaseDate = dayjs(d.date).isValid()
      ? Vue.prototype.$nuxt.$options.i18n.d(new Date(d.date), 'dateWithoutYear')
      : '不明'
    const TableRow: TableDataType = {
      整理番号: d.num,
      公表日: releaseDate,
      居住地: d['居住地'] ?? '調査中',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      濃厚接触者: d['濃厚接触者'],
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) =>
    a.整理番号 === b.整理番号 ? 0 : a.整理番号 < b.整理番号 ? 1 : -1
  )
  return tableDate
}
