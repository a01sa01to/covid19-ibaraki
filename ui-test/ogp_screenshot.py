import os
import time

from selenium import webdriver

if not os.path.exists("ogp"):
  os.mkdir("ogp")

PATHS = {
  "/cards/details-of-confirmed-cases": (959, 753),
  "/cards/number-of-confirmed-cases": (959, 650),
  "/cards/attributes-of-confirmed-cases": (959, 471),
  "/cards/number-of-reports-to-covid19-telephone-advisory-center": (959, 613),
  "/cards/number-of-inspection-persons": (959, 667),
  "/cards/ibaraki-city-table": (959,465),
  "/cards/ibaraki-city-map-table": (959,900),
  "/cards/number-of-discharges": (959,613),
  "/cards/number-of-deaths": (959,613)
}

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)

for lang in ("ja", "en", "ja-basic"):
  if not os.path.exists("ogp/{}".format(lang)):
    os.mkdir("ogp/{}".format(lang))
  for path, size in PATHS.items():
    driver.set_window_size(*size)
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
