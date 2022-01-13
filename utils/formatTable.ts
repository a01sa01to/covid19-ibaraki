type Header = {
  text: string
  value: string
  align?: string
  type?: 'date' | 'age'
}

const headers: Header[] = [
  { text: '整理番号', value: '整理番号', align: 'center' },
  { text: '公表日', value: '公表日', type: 'date', align: 'center' },
  { text: '濃厚接触者', value: '濃厚接触者', align: 'center' },
  { text: '居住地', value: '居住地', align: 'center' },
  { text: '年代', value: '年代', type: 'age', align: 'center' },
  { text: '性別', value: '性別', align: 'center' },
  { text: '職業', value: '職業', align: 'center' },
  { text: '発症日', value: '発症日', type: 'date', align: 'center' },
]

export type DataType = {
  no: number
  publish_date: string
  onset_date: string | null
  address: string | null
  age: string | undefined
  gender: '男性' | '女性' | string
  occupation: string | null
  close_contact: boolean
  [key: string]: any
}

type TableDataType = {
  整理番号: number
  公表日: string
  居住地: DataType['address']
  年代: DataType['age']
  性別: DataType['gender'] | '不明'
  職業: DataType['occupation']
  発症日: DataType['onset_date']
  濃厚接触者: string
}

export type TableDateType = {
  headers: Header[]
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export function formatTable(data: DataType[]): TableDateType {
  const datasets = data.map((d) => ({
    整理番号: d['no'],
    公表日: d['publish_date'] ?? '不明',
    居住地: d['address'] ?? '調査中',
    年代: d['age'] ?? '不明',
    性別: d['gender'] ?? '不明',
    職業: d['occupation'] ?? '-',
    発症日: d['onset_date'] ?? '',
    濃厚接触者: d['close_contact'] ? '○' : '',
  }))
  return {
    headers,
    datasets,
  }
}
