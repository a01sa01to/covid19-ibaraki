export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

type Series = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#1d51c1',
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#1549b7',
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#c2caec',
}

const surfaceStyleD: SurfaceStyle = {
  strokeColor: '#1b4d30',
  fillColor: '#e7eaf7',
}

const surfaceStyleE: SurfaceStyle = {
  strokeColor: '#cc7004',
  fillColor: '#cc7004',
}

const surfaceStyleF: SurfaceStyle = {
  strokeColor: '#1549b7',
  fillColor: '#1549b7',
}

const surfaceStyleG: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#e2eee2',
}

const surfaceStyleH: SurfaceStyle = {
  strokeColor: '#006CA8',
  fillColor: '#006CA8',
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    case 4:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC, surfaceStyleG]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}

export function getGraphSeriesColor(series: Series) {
  const styles: { [key in Series]: SurfaceStyle } = {
    A: surfaceStyleA,
    B: surfaceStyleB,
    C: surfaceStyleC,
    D: surfaceStyleD,
    E: surfaceStyleE,
    F: surfaceStyleF,
    G: surfaceStyleG,
    H: surfaceStyleH,
  }
  return styles[series]
}
