import dayjs from 'dayjs'
type DataType = {
  date: string
  nowTotal: { ac: number; co: number }
  data: { date: string; accept: number; collect: number }[]
}
type ChartDataType = {
  label: string
  transition: number
  cumulative: number
}[]
export default (Data: DataType) => {
  // 検査陽性者の状況
  const updatedAt = dayjs(Data.date).format('YYYY/MM/DD HH:mm')

  const data = Data.data
  const today = new Date()
  const chartDataAccept: ChartDataType = []
  const chartDataCollect: ChartDataType = []
  let acSum = 0
  let coSum = 0
  data
    .filter((d) => new Date(d.date) < today)
    .forEach((d) => {
      const date = new Date(d.date)
      if (!isNaN(d.accept) && !isNaN(d.collect)) {
        acSum += d.accept
        coSum += d.collect
        chartDataAccept.push({
          label: `${date.getFullYear()}/${
            date.getMonth() + 1
          }/${date.getDate()}`,
          transition: d.accept,
          cumulative: acSum,
        })
        chartDataCollect.push({
          label: `${date.getFullYear()}/${
            date.getMonth() + 1
          }/${date.getDate()}`,
          transition: d.collect,
          cumulative: coSum,
        })
      }
    })

  return {
    chartDataAccept,
    chartDataCollect,
    updatedAt,
  }
}
