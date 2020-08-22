import os
import time

from selenium import webdriver

if not os.path.exists("ogp"):
  os.mkdir("ogp")

PATHS = [
  "/cards/details-of-confirmed-cases",
  "/cards/ibaraki-city-map-table"
  "/cards/ibaraki-corona-next",
  "/cards/number-of-tested",
  "/cards/roller/mito",
  "/cards/roller/tsukuba-amakubo",
]

WAVEPATHS = [
  "number-of-confirmed-cases",
  "attributes-of-confirmed-cases",
  "number-of-reports-to-covid19-telephone-advisory-center",
  "number-of-inspection-persons",
  "ibaraki-city-table",
  "number-of-recovered",
  "number-of-deaths",
  "positive-rate",
  "increase-ratio-of-confirmed-cases-by-daily",
  "number-of-confirmed-cases-by-age",
  "untracked-rate",
]

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)

def screenshot(path, lang):
  driver.set_window_size(959,502)
  driver.get(
    "http://localhost:8000{}?ogp=true".format(
      path if lang == "ja" else "/{}{}".format(lang, path)
    )
  )
  path = path.replace("/cards/", "").replace("/", "_")
  driver.save_screenshot(
    "ogp/{}.png".format(
      path if lang == "ja" else "{}/{}".format(lang, path)
    )
  )
  print("Path:{}, Lang:{} ...done!".format(path,lang))

for lang in ("ja", "en", "ja-basic"):
  if not os.path.exists("ogp/{}".format(lang)):
    os.mkdir("ogp/{}".format(lang))
  for path in PATHS:
    screenshot(path,lang)
  for wave in range(2):
    for path in WAVEPATHS:
      screenshot("/cards/wave{}/{}".format(wave+1, path), lang)