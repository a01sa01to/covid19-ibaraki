import os
import time

from selenium import webdriver

if not os.path.exists("ogp"):
    os.mkdir("ogp")

PATHS = {
    "/cards/details-of-confirmed-cases": (959, 500),
    "/cards/number-of-confirmed-cases": (959, 500),
    "/cards/attributes-of-confirmed-cases": (959, 480),
    "/cards/number-of-reports-to-covid19-telephone-advisory-center": (959, 500),
    "/cards/number-of-inspection-persons": (959, 600),
    "/cards/ibaraki-city-table": (959,480),
}

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)

# for lang in ("ja", "en", "zh-cn", "zh-tw", "ko", "ja-basic"):
lang = "ja"
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
    if ('heatmap' in path):
        time.sleep(20)
    driver.save_screenshot(
        "ogp/{}.png".format(
            path if lang == "ja" else "{}/{}".format(lang, path)
        )
    )
