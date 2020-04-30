type DataType = {
  date: Date
  total: number
}

export type GraphDataType = {
  label: string
  transition: number
  cumulative: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  data
    .filter((d) => new Date(d.date) < today)
    .forEach((d) => {
      const date = new Date(d.date)
      const subTotal = d.total
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          transition: subTotal,
          cumulative: patSum,
        })
      }
    })
  return graphData
}
