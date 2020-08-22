// 以下のコードを cards-dev.twitter.com/validator に貼り付ける

const HOST = [
  'https://ibaraki.stopcovid19.jp/',
  'https://covid19-dev.a01sa01to.com/',
]

const LANGS = ['ja', 'en', 'ja-basic']

const PATHS = [
  '',
  'cards/details-of-confirmed-cases',
  'cards/number-of-confirmed-cases',
  'cards/attributes-of-confirmed-cases',
  'cards/number-of-reports-to-covid19-telephone-advisory-center',
  'cards/number-of-inspection-persons',
  'cards/ibaraki-city-table',
  'cards/ibaraki-city-map-table',
  'cards/number-of-recovered',
  'cards/number-of-deaths',
  'cards/ibaraki-corona-next',
  'cards/positive-rate',
  'cards/increase-ratio-of-confirmed-cases-by-daily',
  'cards/number-of-confirmed-cases-by-age',
  'cards/number-of-tested',
  'cards/untracked-rate',
  'cards/roller/mito',
  'cards/roller/tsukuba-amakubo',
]

const WAVEPATHS = [
  'number-of-confirmed-cases',
  'attributes-of-confirmed-cases',
  'number-of-reports-to-covid19-telephone-advisory-center',
  'number-of-inspection-persons',
  'ibaraki-city-table',
  'number-of-recovered',
  'number-of-deaths',
  'positive-rate',
  'increase-ratio-of-confirmed-cases-by-daily',
  'number-of-confirmed-cases-by-age',
  'untracked-rate',
]

const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t))

const input = async (host, lang, path) => {
  const url = host + (lang === 'ja' ? '' : lang + '/') + path
  document.querySelector('input.FormControl').value = url
  document.querySelector('input.Button').click()
  console.groupCollapsed(url)
  console.log(`Now updating: ${url}`)
  await sleep(10000) // 10s待つ
  console.groupEnd()
}

;(async () => {
  console.groupCollapsed('LOG')
  for (const host of HOST) {
    for (const lang of LANGS) {
      for (const path of PATHS) {
        await input(host, lang, path)
      }
      for (const wave of [1, 2]) {
        for (const path of WAVEPATHS) {
          await input(host, lang, `cards/wave${wave}/${path}`)
        }
      }
    }
  }
  console.log('All Done!')
  document.querySelector('input.FormControl').value = ''
  console.groupEnd()
  alert('処理が終了しました')
})()
