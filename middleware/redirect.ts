import { Middleware } from '@nuxt/types'

const redirect: Middleware = ({ route, redirect }) => {
  if (route.path.includes('ibaraki-city-table')) {
    return redirect('./number-of-confirmed-cases-by-municipalities')
  }
  if (route.path.includes('ibaraki-city-map-table')) {
    return redirect('./ibaraki-graphical-map')
  }
}

export default redirect
