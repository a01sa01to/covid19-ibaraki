type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '療養中'
          value: number
          // children: [
          //   {
          //     attr: '軽症'
          //     value: number
          //   },
          //   {
          //     attr: '中等症'
          //     value: number
          //   },
          //   {
          //     attr: '重症'
          //     value: number
          //   }
          // ]
        },
        {
          attr: '回復済'
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
  検査実施人数: number
  陽性者数: number
  療養中: number
  // 軽症: number
  // 中等症: number
  // 重症: number
  死亡: number
  回復済: number
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
    検査実施人数: data.value,
    陽性者数: data.children[0].value,
    療養中: data.children[0].children[0].value,
    // 軽症: data.children[0].children[0].children[0].value,
    // 中等症: data.children[0].children[0].children[1].value,
    // 重症: data.children[0].children[0].children[1].value,
    死亡: data.children[0].children[2].value,
    回復済: data.children[0].children[1].value,
  }
  const graphData: GraphDataType[] = []

  ;['療養中', '死亡', '回復済'].forEach((_) => {
    const lbl = _ === '療養中' ? '療養中' : _ === '死亡' ? '死亡' : '回復済'
    const fmt =
      _ === '療養中'
        ? formattedData.療養中
        : _ === '死亡'
        ? formattedData.死亡
        : formattedData.回復済
    const cl = _ === '療養中' ? '#6e86d3' : _ === '死亡' ? '#99a8e0' : '#c2caec'
    graphData.push({
      label: lbl,
      transition: fmt,
      bgColor: cl,
    })
  })

  return graphData
}
