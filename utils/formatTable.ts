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
  No: number
  公表_年月日: string
  発症_年月日: string | undefined
  患者_居住地: string | undefined
  患者_年代: string | undefined
  患者_性別: '男性' | '女性' | string
  患者_職業: string | undefined
  患者_濃厚接触者フラグ: number | undefined
  [key: string]: any
}

type TableDataType = {
  整理番号: number
  公表日: string
  居住地: DataType['患者_居住地']
  年代: DataType['患者_年代']
  性別: DataType['患者_性別'] | '不明'
  職業: DataType['患者_職業']
  発症日: DataType['発症_年月日']
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
    整理番号: d.No,
    公表日: d['公表_年月日'] ?? '不明',
    居住地: d['患者_居住地'] ?? '調査中',
    年代: d['患者_年代'] ?? '不明',
    性別: d['患者_性別'] ?? '不明',
    職業: d['患者_職業'] ?? '-',
    発症日: d['発症_年月日'] ?? '',
    濃厚接触者: d['患者_濃厚接触者フラグ'] ? '○' : '',
  }))
  return {
    headers,
    datasets,
  }
}
