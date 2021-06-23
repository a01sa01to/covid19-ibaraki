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
 * @param resetDate - Date to reset "cumulative"
 */
export default (data: DataType[], ...resetDate: string[]) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  data
    .filter((d) => new Date(d.date) < today)
    .forEach((d) => {
      const subTotal = d.total
      if (resetDate.includes(d.date)) {
        patSum = 0
      }
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
