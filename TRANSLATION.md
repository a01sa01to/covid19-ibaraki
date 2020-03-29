# How to contribute translations

We are using Transifex to manage the resources that are used by internationalized content.

## For contributors of translations

Please go to our project page on the Transifex.<br>
https://www.transifex.com/asas-4/covid19-ibaraki/

Please join our team from `Help Translate "Covid19-Ibaraki"` button. You will need to make/login account before joining our team.

<!-- ![](./.github/img/2020-03-16-16-05-37.png) -->

After joining, please go to the dashboard page.

https://www.transifex.com/asas-4/covid19-ibaraki/dashboard/

Press `Translate` button on the language resource that you want to contribute.

![](./.github/img/2020-03-16-16-09-47.png)

You will see the translation editor. Search the text you want to translate from the left pane, then enter the translated text in the text area on the right pane.

![](./.github/img/2020-03-16-16-11-14.png)

After editing, please press `Save Translation` button.

After the translation completed, the dev team will update the language resources with latest texts.

Transifex has some useful features like a dictionary feature. Feel free to use it if it is useful. Any suggestions are welcome!

## Adding new language

If you want to add new language. Please request new language via Transifex system. However, we may not accept every languages due to reviewing capacity limit.

## For developers

If you have something new texts which needs translation, please add the strings to `../assets/locales/ja.json` and make a pull request to `development`branch. You can use same string for key and value.

We are using [nuxt-i18n](https://github.com/nuxt-community/nuxt-i18n) as a translation system. Please refer [their document](https://nuxtjs.org/examples/i18n/) to know how to use the library.

After the text was translated, an organizer will apply new resources on the `development` branch.
