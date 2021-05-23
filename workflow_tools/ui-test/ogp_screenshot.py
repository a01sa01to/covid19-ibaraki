import os
import time

from selenium import webdriver

if not os.path.exists("ogp"):
  os.mkdir("ogp")

PATHS = [
  "/cards/roller/mito",
  "/cards/roller/tsukuba-amakubo",
  "/cards/roller/tsuchiura-sakura",
  "/cards/details-of-confirmed-cases",
  "/cards/ibaraki-graphical-map"
  "/cards/ibaraki-corona-next",
  "/cards/number-of-tested",
  "/cards/number-of-confirmed-cases",
  "/cards/number-of-mutant-confirmed-cases",
  "/cards/attributes-of-confirmed-cases",
  "/cards/number-of-reports-to-covid19-telephone-advisory-center",
  "/cards/number-of-inspection-persons",
  "/cards/number-of-confirmed-cases-by-municipalities",
  "/cards/number-of-recovered",
  "/cards/number-of-deaths",
  "/cards/number-of-confirmed-cases-by-age",
  "/cards/untracked-rate",
  "/cards/infection-status-by-national-index"
]

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)

def screenshot(path, lang):
  driver.set_window_size(959,502)
  driver.get(
    "http://localhost:8000{}/?ogp=true".format(
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
