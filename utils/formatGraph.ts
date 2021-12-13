import { convertDateToISO8601Format } from '@/utils/formatDate'

type DataType = {
  date: string
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
      const subTotal = d.total
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: convertDateToISO8601Format(d.date),
          transition: subTotal,
          cumulative: patSum,
        })
      }
    })
  return graphData
}
