(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{532:function(e,t,r){"use strict";r.r(t);var c=r(381),o=r(392),n=r(384),d=r(386),m=r(387),f=r(389),l=r(390),h=r(391),k=r(395),C=r(393),y=r(383),v=r(382),$=r(385),w=r(394),A={components:{PositiveRateCard:y.a,ConfirmedCasesDetailsCard:c.a,ConfirmedCasesNumberCard:o.a,ConfirmedCasesAttributesCard:n.a,IbarakiCityCard:d.a,IbarakiCityMapCard:m.a,InspectionPersonsNumberCard:f.a,TelephoneAdvisoryReportsNumberCard:l.a,RecoveredCard:h.a,DeathsCard:k.a,IbarakiCoronaNext:C.a,ConfirmedCasesIncreaseRatioByWeekCard:v.a,ConfirmedCasesByAge:$.a,TestedNumberCard:w.a},data:function(){var e;switch(this.$route.params.card){case"details-of-confirmed-cases":e="confirmed-cases-details-card";break;case"number-of-confirmed-cases":e="confirmed-cases-number-card";break;case"attributes-of-confirmed-cases":e="confirmed-cases-attributes-card";break;case"number-of-inspection-persons":e="inspection-persons-number-card";break;case"number-of-reports-to-covid19-telephone-advisory-center":e="telephone-advisory-reports-number-card";break;case"ibaraki-city-table":e="ibaraki-city-card";break;case"ibaraki-city-map-table":e="ibaraki-city-map-card";break;case"number-of-recovered":e="recovered-card";break;case"number-of-deaths":e="deaths-card";break;case"ibaraki-corona-next":e="ibaraki-corona-next";break;case"positive-rate":e="positive-rate-card";break;case"increase-ratio-of-confirmed-cases-by-daily":e="confirmed-cases-increase-ratio-by-week-card";break;case"number-of-confirmed-cases-by-age":e="confirmed-cases-by-age";break;case"number-of-tested":e="tested-number-card"}return{cardComponent:e,title:void 0,updatedAt:void 0}},head:function(){var e=this,t="https://ibaraki.stopcovid19.jp",r=(new Date).getTime(),c="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(r):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(r),o="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。")),n="".concat(this.$t("茨城県")," ").concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"));return{titleTemplate:function(title){return"".concat(e.title||title," | ").concat(n)},link:["cards/".concat(this.$route.params.card)],meta:[{hid:"og:url",property:"og:url",content:"".concat(t).concat(this.$route.path,"/")},{hid:"og:title",property:"og:title",template:function(title){return"".concat(e.title||title," | ").concat(n)},content:""},{hid:"description",name:"description",template:function(t){return"".concat(e.updatedAt||t," | ").concat(o)},content:""},{hid:"og:description",property:"og:description",template:function(t){return"".concat(e.updatedAt||t," | ").concat(o)},content:""},{hid:"og:image",property:"og:image",content:c},{hid:"twitter:image",name:"twitter:image",content:c}]}}},I=r(6),component=Object(I.a)(A,(function(){var e=this.$createElement;return(this._self._c||e)(this.cardComponent,{tag:"component"})}),[],!1,null,null,null);t.default=component.exports}}]);