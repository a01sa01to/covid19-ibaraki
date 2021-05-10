import { Middleware } from '@nuxt/types'

const redirect: Middleware = ({ route, redirect }) => {
  if (route.path.includes('ibaraki-city-table')) {
    return redirect('./number-of-confirmed-cases-by-municipalities')
  }
  if (route.path.includes('ibaraki-city-map-table')) {
    return redirect('./ibaraki-graphical-map')
  }
  if (route.path.includes('flow')) {
    return redirect(
      'https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html'
    )
  }
  if (route.path.match(/^\/EmergencyMeasure(s)?(\/)?/i)) {
    return redirect('/emergency-measures')
  }
}

export default redirect
