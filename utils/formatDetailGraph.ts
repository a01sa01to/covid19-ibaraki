type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '入院中'
          value: number
          // children: [
          //   {
          //     attr: '軽症・中等症'
          //     value: number
          //   },
          //   {
          //     attr: '重症'
          //     value: number
          //   },
          //   {
          //     attr: '不明'
          //     value: number
          //   }
          // ]
        },
        {
          attr: '退院'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  // 検査実施人数: number
  陽性者数: number
  入院中: number
  // 軽症中等症: number
  // 重症: number
  // 不明: number
  死亡: number
  退院: number
}

export type GraphDataType = {
  label: string
  transition: number
  // cumulative: number
  bgColor: '#6e86d3' | '#99a8e0' | '#c2caec'
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    // 検査実施人数: data.value,
    陽性者数: data.children[0].value,
    入院中: data.children[0].children[0].value,
    // 軽症中等症: data.children[0].children[0].children[0].value,
    // 重症: data.children[0].children[0].children[1].value,
    // 不明: data.children[0].children[0].children[2].value,
    死亡: data.children[0].children[2].value,
    退院: data.children[0].children[1].value,
  }
  const graphData: GraphDataType[] = []

  ;['入院中', '死亡', '退院'].forEach((_) => {
    const lbl =
      _ === '入院中' ? '入院中・入院予定' : _ === '死亡' ? '死亡' : '退院'
    const fmt =
      _ === '入院中'
        ? formattedData.入院中
        : _ === '死亡'
        ? formattedData.死亡
        : formattedData.退院
    const cl = _ === '入院中' ? '#6e86d3' : _ === '死亡' ? '#99a8e0' : '#c2caec'
    graphData.push({
      label: lbl,
      transition: fmt,
      bgColor: cl,
    })
  })

  return graphData
}
