(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{351:function(t,e,o){o(4)({target:"Math",stat:!0},{sign:o(234)})},354:function(t,e,o){"use strict";o(53);var d=o(21);function l(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var c={inserted:function(t,e){var o=e.modifiers||{},c=e.value,n="object"===Object(d.a)(c)?c:{handler:c,options:{}},r=n.handler,v=n.options,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;if(t._observe){if(r&&(!o.quiet||t._observe.init)){var c=Boolean(e.find((function(t){return t.isIntersecting})));r(e,d,c)}t._observe.init&&o.once?l(t):t._observe.init=!0}}),v);t._observe={init:!1,observer:h},h.observe(t)},unbind:l};e.a=c},359:function(t){t.exports=JSON.parse('{"contacts":{"data":[{"date":"2020-06-20","total":112},{"date":"2020-06-21","total":88},{"date":"2020-06-22","total":292},{"date":"2020-06-23","total":219},{"date":"2020-06-24","total":212},{"date":"2020-06-25","total":236},{"date":"2020-06-26","total":300},{"date":"2020-06-27","total":114},{"date":"2020-06-28","total":127},{"date":"2020-06-29","total":365},{"date":"2020-06-30","total":340},{"date":"2020-07-01","total":349},{"date":"2020-07-02","total":319},{"date":"2020-07-03","total":380},{"date":"2020-07-04","total":166},{"date":"2020-07-05","total":123},{"date":"2020-07-06","total":478},{"date":"2020-07-07","total":362},{"date":"2020-07-08","total":351},{"date":"2020-07-09","total":383},{"date":"2020-07-10","total":425},{"date":"2020-07-11","total":174},{"date":"2020-07-12","total":133},{"date":"2020-07-13","total":579},{"date":"2020-07-14","total":642},{"date":"2020-07-15","total":521},{"date":"2020-07-16","total":619},{"date":"2020-07-17","total":618},{"date":"2020-07-18","total":211},{"date":"2020-07-19","total":190},{"date":"2020-07-20","total":744},{"date":"2020-07-21","total":615},{"date":"2020-07-22","total":593},{"date":"2020-07-23","total":236},{"date":"2020-07-24","total":256},{"date":"2020-07-25","total":210},{"date":"2020-07-26","total":210},{"date":"2020-07-27","total":803},{"date":"2020-07-28","total":619},{"date":"2020-07-29","total":733},{"date":"2020-07-30","total":887},{"date":"2020-07-31","total":946},{"date":"2020-08-01","total":264},{"date":"2020-08-02","total":232},{"date":"2020-08-03","total":970},{"date":"2020-08-04","total":705},{"date":"2020-08-05","total":765},{"date":"2020-08-06","total":895},{"date":"2020-08-07","total":790},{"date":"2020-08-08","total":236},{"date":"2020-08-09","total":242},{"date":"2020-08-10","total":286},{"date":"2020-08-11","total":770},{"date":"2020-08-12","total":654},{"date":"2020-08-13","total":478},{"date":"2020-08-14","total":488},{"date":"2020-08-15","total":239},{"date":"2020-08-16","total":216},{"date":"2020-08-17","total":798},{"date":"2020-08-18","total":604},{"date":"2020-08-19","total":594},{"date":"2020-08-20","total":569},{"date":"2020-08-21","total":632},{"date":"2020-08-22","total":185},{"date":"2020-08-23","total":160},{"date":"2020-08-24","total":642},{"date":"2020-08-25","total":549},{"date":"2020-08-26","total":547},{"date":"2020-08-27","total":459},{"date":"2020-08-28","total":499},{"date":"2020-08-29","total":164},{"date":"2020-08-30","total":188},{"date":"2020-08-31","total":501},{"date":"2020-09-01","total":414},{"date":"2020-09-02","total":400},{"date":"2020-09-03","total":407},{"date":"2020-09-04","total":478},{"date":"2020-09-05","total":164},{"date":"2020-09-06","total":146},{"date":"2020-09-07","total":466},{"date":"2020-09-08","total":402},{"date":"2020-09-09","total":324},{"date":"2020-09-10","total":303},{"date":"2020-09-11","total":373},{"date":"2020-09-12","total":180},{"date":"2020-09-13","total":144},{"date":"2020-09-14","total":392},{"date":"2020-09-15","total":330},{"date":"2020-09-16","total":300},{"date":"2020-09-17","total":293},{"date":"2020-09-18","total":301},{"date":"2020-09-19","total":117},{"date":"2020-09-20","total":123},{"date":"2020-09-21","total":136},{"date":"2020-09-22","total":143},{"date":"2020-09-23","total":357},{"date":"2020-09-24","total":315},{"date":"2020-09-25","total":324},{"date":"2020-09-26","total":130},{"date":"2020-09-27","total":101},{"date":"2020-09-28","total":344},{"date":"2020-09-29","total":291},{"date":"2020-09-30","total":265},{"date":"2020-10-01","total":253},{"date":"2020-10-02","total":330},{"date":"2020-10-03","total":98},{"date":"2020-10-04","total":132},{"date":"2020-10-05","total":331},{"date":"2020-10-06","total":243},{"date":"2020-10-07","total":253},{"date":"2020-10-08","total":219},{"date":"2020-10-09","total":261},{"date":"2020-10-10","total":116},{"date":"2020-10-11","total":136},{"date":"2020-10-12","total":347},{"date":"2020-10-13","total":255},{"date":"2020-10-14","total":220},{"date":"2020-10-15","total":207},{"date":"2020-10-16","total":240},{"date":"2020-10-17","total":82}],"date":"2020/10/17 23:59"},"patients_age":{"data":[{"age":"10歳未満","close":29,"new":1},{"age":"10代","close":18,"new":8},{"age":"20代","close":63,"new":67},{"age":"30代","close":58,"new":50},{"age":"40代","close":37,"new":34},{"age":"50代","close":23,"new":34},{"age":"60代","close":27,"new":14},{"age":"70代","close":25,"new":23},{"age":"80代","close":24,"new":12},{"age":"90代","close":4,"new":5},{"age":"100歳以上","close":0,"new":0}],"date":"2020/10/17 23:59"},"patients_city":{"data":[{"city":"利根町","total":2},{"city":"境町","total":1},{"city":"五霞町","total":4},{"city":"八千代町","total":2},{"city":"河内町","total":2},{"city":"阿見町","total":14},{"city":"美浦村","total":3},{"city":"大子町","total":0},{"city":"東海村","total":11},{"city":"城里町","total":11},{"city":"大洗町","total":5},{"city":"茨城町","total":1},{"city":"小美玉市","total":1},{"city":"つくばみらい市","total":11},{"city":"鉾田市","total":2},{"city":"行方市","total":3},{"city":"神栖市","total":8},{"city":"桜川市","total":3},{"city":"かすみがうら市","total":5},{"city":"稲敷市","total":17},{"city":"坂東市","total":6},{"city":"筑西市","total":7},{"city":"那珂市","total":8},{"city":"常陸大宮市","total":7},{"city":"守谷市","total":14},{"city":"潮来市","total":4},{"city":"鹿嶋市","total":8},{"city":"ひたちなか市","total":13},{"city":"つくば市","total":58},{"city":"牛久市","total":15},{"city":"取手市","total":31},{"city":"笠間市","total":7},{"city":"北茨城市","total":0},{"city":"高萩市","total":0},{"city":"常陸太田市","total":8},{"city":"常総市","total":19},{"city":"下妻市","total":11},{"city":"龍ケ崎市","total":9},{"city":"結城市","total":8},{"city":"石岡市","total":14},{"city":"古河市","total":30},{"city":"土浦市","total":33},{"city":"日立市","total":10},{"city":"水戸市","total":96}],"date":"2020/10/17 23:59"},"patients_summary":{"data":[{"date":"2020-06-20","total":2,"close":0},{"date":"2020-06-21","total":0,"close":0},{"date":"2020-06-22","total":0,"close":0},{"date":"2020-06-23","total":0,"close":0},{"date":"2020-06-24","total":0,"close":0},{"date":"2020-06-25","total":0,"close":0},{"date":"2020-06-26","total":2,"close":1},{"date":"2020-06-27","total":0,"close":0},{"date":"2020-06-28","total":1,"close":0},{"date":"2020-06-29","total":1,"close":0},{"date":"2020-06-30","total":0,"close":0},{"date":"2020-07-01","total":0,"close":0},{"date":"2020-07-02","total":2,"close":0},{"date":"2020-07-03","total":6,"close":4},{"date":"2020-07-04","total":1,"close":0},{"date":"2020-07-05","total":0,"close":0},{"date":"2020-07-06","total":3,"close":2},{"date":"2020-07-07","total":1,"close":0},{"date":"2020-07-08","total":1,"close":1},{"date":"2020-07-09","total":1,"close":0},{"date":"2020-07-10","total":7,"close":2},{"date":"2020-07-11","total":0,"close":0},{"date":"2020-07-12","total":3,"close":1},{"date":"2020-07-13","total":3,"close":0},{"date":"2020-07-14","total":2,"close":0},{"date":"2020-07-15","total":5,"close":3},{"date":"2020-07-16","total":2,"close":0},{"date":"2020-07-17","total":4,"close":1},{"date":"2020-07-18","total":5,"close":4},{"date":"2020-07-19","total":5,"close":5},{"date":"2020-07-20","total":1,"close":0},{"date":"2020-07-21","total":4,"close":0},{"date":"2020-07-22","total":5,"close":3},{"date":"2020-07-23","total":2,"close":0},{"date":"2020-07-24","total":2,"close":1},{"date":"2020-07-25","total":0,"close":0},{"date":"2020-07-26","total":3,"close":2},{"date":"2020-07-27","total":2,"close":1},{"date":"2020-07-28","total":15,"close":4},{"date":"2020-07-29","total":9,"close":6},{"date":"2020-07-30","total":12,"close":7},{"date":"2020-07-31","total":14,"close":11},{"date":"2020-08-01","total":14,"close":10},{"date":"2020-08-02","total":14,"close":11},{"date":"2020-08-03","total":5,"close":2},{"date":"2020-08-04","total":7,"close":3},{"date":"2020-08-05","total":10,"close":6},{"date":"2020-08-06","total":12,"close":7},{"date":"2020-08-07","total":12,"close":4},{"date":"2020-08-08","total":12,"close":10},{"date":"2020-08-09","total":17,"close":14},{"date":"2020-08-10","total":6,"close":2},{"date":"2020-08-11","total":3,"close":2},{"date":"2020-08-12","total":10,"close":8},{"date":"2020-08-13","total":15,"close":6},{"date":"2020-08-14","total":12,"close":8},{"date":"2020-08-15","total":7,"close":4},{"date":"2020-08-16","total":2,"close":1},{"date":"2020-08-17","total":4,"close":2},{"date":"2020-08-18","total":7,"close":5},{"date":"2020-08-19","total":13,"close":6},{"date":"2020-08-20","total":3,"close":0},{"date":"2020-08-21","total":11,"close":7},{"date":"2020-08-22","total":8,"close":7},{"date":"2020-08-23","total":5,"close":2},{"date":"2020-08-24","total":4,"close":3},{"date":"2020-08-25","total":5,"close":3},{"date":"2020-08-26","total":12,"close":6},{"date":"2020-08-27","total":8,"close":5},{"date":"2020-08-28","total":6,"close":4},{"date":"2020-08-29","total":4,"close":0},{"date":"2020-08-30","total":2,"close":1},{"date":"2020-08-31","total":1,"close":0},{"date":"2020-09-01","total":4,"close":2},{"date":"2020-09-02","total":6,"close":3},{"date":"2020-09-03","total":4,"close":2},{"date":"2020-09-04","total":8,"close":4},{"date":"2020-09-05","total":6,"close":0},{"date":"2020-09-06","total":10,"close":7},{"date":"2020-09-07","total":0,"close":0},{"date":"2020-09-08","total":5,"close":5},{"date":"2020-09-09","total":1,"close":0},{"date":"2020-09-10","total":4,"close":0},{"date":"2020-09-11","total":13,"close":10},{"date":"2020-09-12","total":3,"close":2},{"date":"2020-09-13","total":3,"close":3},{"date":"2020-09-14","total":2,"close":2},{"date":"2020-09-15","total":2,"close":1},{"date":"2020-09-16","total":2,"close":0},{"date":"2020-09-17","total":3,"close":0},{"date":"2020-09-18","total":1,"close":1},{"date":"2020-09-19","total":1,"close":0},{"date":"2020-09-20","total":1,"close":0},{"date":"2020-09-21","total":3,"close":0},{"date":"2020-09-22","total":2,"close":1},{"date":"2020-09-23","total":1,"close":0},{"date":"2020-09-24","total":1,"close":1},{"date":"2020-09-25","total":1,"close":0},{"date":"2020-09-26","total":5,"close":2},{"date":"2020-09-27","total":1,"close":1},{"date":"2020-09-28","total":11,"close":11},{"date":"2020-09-29","total":3,"close":0},{"date":"2020-09-30","total":5,"close":2},{"date":"2020-10-01","total":2,"close":1},{"date":"2020-10-02","total":9,"close":4},{"date":"2020-10-03","total":3,"close":2},{"date":"2020-10-04","total":5,"close":2},{"date":"2020-10-05","total":1,"close":0},{"date":"2020-10-06","total":4,"close":2},{"date":"2020-10-07","total":12,"close":7},{"date":"2020-10-08","total":5,"close":4},{"date":"2020-10-09","total":2,"close":1},{"date":"2020-10-10","total":6,"close":6},{"date":"2020-10-11","total":3,"close":0},{"date":"2020-10-12","total":1,"close":1},{"date":"2020-10-13","total":0,"close":0},{"date":"2020-10-14","total":5,"close":3},{"date":"2020-10-15","total":4,"close":1},{"date":"2020-10-16","total":4,"close":4},{"date":"2020-10-17","total":2,"close":2}],"date":"2020/10/17 23:59"},"recovered_summary":{"data":[{"date":"2020-06-20","total":0},{"date":"2020-06-21","total":0},{"date":"2020-06-22","total":0},{"date":"2020-06-23","total":0},{"date":"2020-06-24","total":0},{"date":"2020-06-25","total":1},{"date":"2020-06-26","total":1},{"date":"2020-06-27","total":1},{"date":"2020-06-28","total":0},{"date":"2020-06-29","total":2},{"date":"2020-06-30","total":0},{"date":"2020-07-01","total":0},{"date":"2020-07-02","total":0},{"date":"2020-07-03","total":1},{"date":"2020-07-04","total":0},{"date":"2020-07-05","total":0},{"date":"2020-07-06","total":0},{"date":"2020-07-07","total":3},{"date":"2020-07-08","total":0},{"date":"2020-07-09","total":2},{"date":"2020-07-10","total":1},{"date":"2020-07-11","total":0},{"date":"2020-07-12","total":1},{"date":"2020-07-13","total":2},{"date":"2020-07-14","total":1},{"date":"2020-07-15","total":5},{"date":"2020-07-16","total":3},{"date":"2020-07-17","total":5},{"date":"2020-07-18","total":4},{"date":"2020-07-19","total":2},{"date":"2020-07-20","total":1},{"date":"2020-07-21","total":1},{"date":"2020-07-22","total":2},{"date":"2020-07-23","total":2},{"date":"2020-07-24","total":0},{"date":"2020-07-25","total":3},{"date":"2020-07-26","total":2},{"date":"2020-07-27","total":5},{"date":"2020-07-28","total":0},{"date":"2020-07-29","total":0},{"date":"2020-07-30","total":5},{"date":"2020-07-31","total":7},{"date":"2020-08-01","total":3},{"date":"2020-08-02","total":7},{"date":"2020-08-03","total":2},{"date":"2020-08-04","total":5},{"date":"2020-08-05","total":2},{"date":"2020-08-06","total":1},{"date":"2020-08-07","total":9},{"date":"2020-08-08","total":14},{"date":"2020-08-09","total":9},{"date":"2020-08-10","total":11},{"date":"2020-08-11","total":0},{"date":"2020-08-12","total":31},{"date":"2020-08-13","total":12},{"date":"2020-08-14","total":6},{"date":"2020-08-15","total":7},{"date":"2020-08-16","total":11},{"date":"2020-08-17","total":7},{"date":"2020-08-18","total":8},{"date":"2020-08-19","total":15},{"date":"2020-08-20","total":9},{"date":"2020-08-21","total":6},{"date":"2020-08-22","total":6},{"date":"2020-08-23","total":9},{"date":"2020-08-24","total":4},{"date":"2020-08-25","total":7},{"date":"2020-08-26","total":10},{"date":"2020-08-27","total":6},{"date":"2020-08-28","total":6},{"date":"2020-08-29","total":6},{"date":"2020-08-30","total":9},{"date":"2020-08-31","total":2},{"date":"2020-09-01","total":7},{"date":"2020-09-02","total":7},{"date":"2020-09-03","total":4},{"date":"2020-09-04","total":9},{"date":"2020-09-05","total":5},{"date":"2020-09-06","total":4},{"date":"2020-09-07","total":5},{"date":"2020-09-08","total":10},{"date":"2020-09-09","total":5},{"date":"2020-09-10","total":7},{"date":"2020-09-11","total":4},{"date":"2020-09-12","total":4},{"date":"2020-09-13","total":0},{"date":"2020-09-14","total":6},{"date":"2020-09-15","total":6},{"date":"2020-09-16","total":3},{"date":"2020-09-17","total":8},{"date":"2020-09-18","total":4},{"date":"2020-09-19","total":4},{"date":"2020-09-20","total":1},{"date":"2020-09-21","total":0},{"date":"2020-09-22","total":6},{"date":"2020-09-23","total":4},{"date":"2020-09-24","total":2},{"date":"2020-09-25","total":5},{"date":"2020-09-26","total":1},{"date":"2020-09-27","total":0},{"date":"2020-09-28","total":7},{"date":"2020-09-29","total":3},{"date":"2020-09-30","total":2},{"date":"2020-10-01","total":3},{"date":"2020-10-02","total":0},{"date":"2020-10-03","total":3},{"date":"2020-10-04","total":4},{"date":"2020-10-05","total":3},{"date":"2020-10-06","total":1},{"date":"2020-10-07","total":10},{"date":"2020-10-08","total":1},{"date":"2020-10-09","total":5},{"date":"2020-10-10","total":3},{"date":"2020-10-11","total":3},{"date":"2020-10-12","total":5},{"date":"2020-10-13","total":4},{"date":"2020-10-14","total":10},{"date":"2020-10-15","total":6},{"date":"2020-10-16","total":9},{"date":"2020-10-17","total":3}],"date":"2020/10/17 23:59"},"deaths_summary":{"data":[{"date":"2020-06-20","total":0},{"date":"2020-06-21","total":0},{"date":"2020-06-22","total":0},{"date":"2020-06-23","total":0},{"date":"2020-06-24","total":0},{"date":"2020-06-25","total":0},{"date":"2020-06-26","total":0},{"date":"2020-06-27","total":0},{"date":"2020-06-28","total":0},{"date":"2020-06-29","total":0},{"date":"2020-06-30","total":0},{"date":"2020-07-01","total":0},{"date":"2020-07-02","total":0},{"date":"2020-07-03","total":0},{"date":"2020-07-04","total":0},{"date":"2020-07-05","total":0},{"date":"2020-07-06","total":0},{"date":"2020-07-07","total":0},{"date":"2020-07-08","total":0},{"date":"2020-07-09","total":0},{"date":"2020-07-10","total":0},{"date":"2020-07-11","total":0},{"date":"2020-07-12","total":0},{"date":"2020-07-13","total":0},{"date":"2020-07-14","total":0},{"date":"2020-07-15","total":0},{"date":"2020-07-16","total":0},{"date":"2020-07-17","total":0},{"date":"2020-07-18","total":0},{"date":"2020-07-19","total":0},{"date":"2020-07-20","total":0},{"date":"2020-07-21","total":0},{"date":"2020-07-22","total":0},{"date":"2020-07-23","total":0},{"date":"2020-07-24","total":0},{"date":"2020-07-25","total":0},{"date":"2020-07-26","total":0},{"date":"2020-07-27","total":0},{"date":"2020-07-28","total":0},{"date":"2020-07-29","total":0},{"date":"2020-07-30","total":0},{"date":"2020-07-31","total":0},{"date":"2020-08-01","total":0},{"date":"2020-08-02","total":0},{"date":"2020-08-03","total":0},{"date":"2020-08-04","total":0},{"date":"2020-08-05","total":0},{"date":"2020-08-06","total":0},{"date":"2020-08-07","total":0},{"date":"2020-08-08","total":0},{"date":"2020-08-09","total":0},{"date":"2020-08-10","total":0},{"date":"2020-08-11","total":0},{"date":"2020-08-12","total":0},{"date":"2020-08-13","total":0},{"date":"2020-08-14","total":0},{"date":"2020-08-15","total":0},{"date":"2020-08-16","total":0},{"date":"2020-08-17","total":0},{"date":"2020-08-18","total":0},{"date":"2020-08-19","total":1},{"date":"2020-08-20","total":0},{"date":"2020-08-21","total":0},{"date":"2020-08-22","total":0},{"date":"2020-08-23","total":0},{"date":"2020-08-24","total":0},{"date":"2020-08-25","total":1},{"date":"2020-08-26","total":0},{"date":"2020-08-27","total":0},{"date":"2020-08-28","total":1},{"date":"2020-08-29","total":0},{"date":"2020-08-30","total":0},{"date":"2020-08-31","total":0},{"date":"2020-09-01","total":0},{"date":"2020-09-02","total":1},{"date":"2020-09-03","total":0},{"date":"2020-09-04","total":0},{"date":"2020-09-05","total":0},{"date":"2020-09-06","total":0},{"date":"2020-09-07","total":0},{"date":"2020-09-08","total":0},{"date":"2020-09-09","total":0},{"date":"2020-09-10","total":0},{"date":"2020-09-11","total":0},{"date":"2020-09-12","total":1},{"date":"2020-09-13","total":0},{"date":"2020-09-14","total":1},{"date":"2020-09-15","total":0},{"date":"2020-09-16","total":0},{"date":"2020-09-17","total":0},{"date":"2020-09-18","total":0},{"date":"2020-09-19","total":0},{"date":"2020-09-20","total":0},{"date":"2020-09-21","total":0},{"date":"2020-09-22","total":1},{"date":"2020-09-23","total":0},{"date":"2020-09-24","total":0},{"date":"2020-09-25","total":0},{"date":"2020-09-26","total":0},{"date":"2020-09-27","total":0},{"date":"2020-09-28","total":0},{"date":"2020-09-29","total":0},{"date":"2020-09-30","total":0},{"date":"2020-10-01","total":0},{"date":"2020-10-02","total":0},{"date":"2020-10-03","total":0},{"date":"2020-10-04","total":0},{"date":"2020-10-05","total":0},{"date":"2020-10-06","total":0},{"date":"2020-10-07","total":0},{"date":"2020-10-08","total":0},{"date":"2020-10-09","total":0},{"date":"2020-10-10","total":0},{"date":"2020-10-11","total":0},{"date":"2020-10-12","total":0},{"date":"2020-10-13","total":0},{"date":"2020-10-14","total":1},{"date":"2020-10-15","total":0},{"date":"2020-10-16","total":0},{"date":"2020-10-17","total":0}],"date":"2020/10/17 23:59"},"inspection_persons":{"labels":["2020-06-20","2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27","2020-06-28","2020-06-29","2020-06-30","2020-07-01","2020-07-02","2020-07-03","2020-07-04","2020-07-05","2020-07-06","2020-07-07","2020-07-08","2020-07-09","2020-07-10","2020-07-11","2020-07-12","2020-07-13","2020-07-14","2020-07-15","2020-07-16","2020-07-17","2020-07-18","2020-07-19","2020-07-20","2020-07-21","2020-07-22","2020-07-23","2020-07-24","2020-07-25","2020-07-26","2020-07-27","2020-07-28","2020-07-29","2020-07-30","2020-07-31","2020-08-01","2020-08-02","2020-08-03","2020-08-04","2020-08-05","2020-08-06","2020-08-07","2020-08-08","2020-08-09","2020-08-10","2020-08-11","2020-08-12","2020-08-13","2020-08-14","2020-08-15","2020-08-16","2020-08-17","2020-08-18","2020-08-19","2020-08-20","2020-08-21","2020-08-22","2020-08-23","2020-08-24","2020-08-25","2020-08-26","2020-08-27","2020-08-28","2020-08-29","2020-08-30","2020-08-31","2020-09-01","2020-09-02","2020-09-03","2020-09-04","2020-09-05","2020-09-06","2020-09-07","2020-09-08","2020-09-09","2020-09-10","2020-09-11","2020-09-12","2020-09-13","2020-09-14","2020-09-15","2020-09-16","2020-09-17","2020-09-18","2020-09-19","2020-09-20","2020-09-21","2020-09-22","2020-09-23","2020-09-24","2020-09-25","2020-09-26","2020-09-27","2020-09-28","2020-09-29","2020-09-30","2020-10-01","2020-10-02","2020-10-03","2020-10-04","2020-10-05","2020-10-06","2020-10-07","2020-10-08","2020-10-09","2020-10-10","2020-10-11","2020-10-12","2020-10-13","2020-10-14","2020-10-15","2020-10-16","2020-10-17"],"datasets":[{"label":"検査実施人数","data":[23,2,5,25,20,28,18,25,3,5,42,41,51,33,63,19,30,63,65,30,43,77,12,10,84,78,60,124,90,34,18,113,129,64,60,21,25,32,117,111,87,221,145,64,12,224,283,139,127,158,132,94,142,230,150,73,83,29,38,159,98,136,106,120,54,44,144,134,113,92,167,52,51,76,64,89,100,110,38,47,123,50,33,74,118,39,23,150,54,38,48,33,78,9,26,18,29,39,79,60,16,39,107,47,35,18,22,15,40,113,38,45,31,19,99,33,33,54,42,212]}],"date":"2020/10/17 23:59"},"positiveRate":{"data":[{"date":"2020-06-20","positive":2,"tested":23},{"date":"2020-06-21","positive":0,"tested":2},{"date":"2020-06-22","positive":0,"tested":5},{"date":"2020-06-23","positive":0,"tested":25},{"date":"2020-06-24","positive":0,"tested":20},{"date":"2020-06-25","positive":0,"tested":28},{"date":"2020-06-26","positive":2,"tested":18},{"date":"2020-06-27","positive":0,"tested":25},{"date":"2020-06-28","positive":1,"tested":3},{"date":"2020-06-29","positive":1,"tested":5},{"date":"2020-06-30","positive":0,"tested":42},{"date":"2020-07-01","positive":0,"tested":41},{"date":"2020-07-02","positive":2,"tested":51},{"date":"2020-07-03","positive":6,"tested":33},{"date":"2020-07-04","positive":1,"tested":63},{"date":"2020-07-05","positive":0,"tested":19},{"date":"2020-07-06","positive":3,"tested":30},{"date":"2020-07-07","positive":1,"tested":63},{"date":"2020-07-08","positive":1,"tested":65},{"date":"2020-07-09","positive":1,"tested":30},{"date":"2020-07-10","positive":7,"tested":43},{"date":"2020-07-11","positive":0,"tested":77},{"date":"2020-07-12","positive":3,"tested":12},{"date":"2020-07-13","positive":3,"tested":10},{"date":"2020-07-14","positive":2,"tested":84},{"date":"2020-07-15","positive":5,"tested":78},{"date":"2020-07-16","positive":2,"tested":60},{"date":"2020-07-17","positive":4,"tested":124},{"date":"2020-07-18","positive":5,"tested":90},{"date":"2020-07-19","positive":5,"tested":34},{"date":"2020-07-20","positive":1,"tested":18},{"date":"2020-07-21","positive":4,"tested":113},{"date":"2020-07-22","positive":5,"tested":129},{"date":"2020-07-23","positive":2,"tested":64},{"date":"2020-07-24","positive":2,"tested":60},{"date":"2020-07-25","positive":0,"tested":21},{"date":"2020-07-26","positive":3,"tested":25},{"date":"2020-07-27","positive":2,"tested":32},{"date":"2020-07-28","positive":15,"tested":117},{"date":"2020-07-29","positive":9,"tested":111},{"date":"2020-07-30","positive":12,"tested":87},{"date":"2020-07-31","positive":14,"tested":221},{"date":"2020-08-01","positive":14,"tested":145},{"date":"2020-08-02","positive":14,"tested":64},{"date":"2020-08-03","positive":5,"tested":12},{"date":"2020-08-04","positive":7,"tested":224},{"date":"2020-08-05","positive":10,"tested":283},{"date":"2020-08-06","positive":12,"tested":139},{"date":"2020-08-07","positive":12,"tested":127},{"date":"2020-08-08","positive":12,"tested":158},{"date":"2020-08-09","positive":17,"tested":132},{"date":"2020-08-10","positive":6,"tested":94},{"date":"2020-08-11","positive":3,"tested":142},{"date":"2020-08-12","positive":10,"tested":230},{"date":"2020-08-13","positive":15,"tested":150},{"date":"2020-08-14","positive":12,"tested":73},{"date":"2020-08-15","positive":7,"tested":83},{"date":"2020-08-16","positive":2,"tested":29},{"date":"2020-08-17","positive":4,"tested":38},{"date":"2020-08-18","positive":7,"tested":159},{"date":"2020-08-19","positive":13,"tested":98},{"date":"2020-08-20","positive":3,"tested":136},{"date":"2020-08-21","positive":11,"tested":106},{"date":"2020-08-22","positive":8,"tested":120},{"date":"2020-08-23","positive":5,"tested":54},{"date":"2020-08-24","positive":4,"tested":44},{"date":"2020-08-25","positive":5,"tested":144},{"date":"2020-08-26","positive":12,"tested":134},{"date":"2020-08-27","positive":8,"tested":113},{"date":"2020-08-28","positive":6,"tested":92},{"date":"2020-08-29","positive":4,"tested":167},{"date":"2020-08-30","positive":2,"tested":52},{"date":"2020-08-31","positive":1,"tested":51},{"date":"2020-09-01","positive":4,"tested":76},{"date":"2020-09-02","positive":6,"tested":64},{"date":"2020-09-03","positive":4,"tested":89},{"date":"2020-09-04","positive":8,"tested":100},{"date":"2020-09-05","positive":6,"tested":110},{"date":"2020-09-06","positive":10,"tested":38},{"date":"2020-09-07","positive":0,"tested":47},{"date":"2020-09-08","positive":5,"tested":123},{"date":"2020-09-09","positive":1,"tested":50},{"date":"2020-09-10","positive":4,"tested":33},{"date":"2020-09-11","positive":13,"tested":74},{"date":"2020-09-12","positive":3,"tested":118},{"date":"2020-09-13","positive":3,"tested":39},{"date":"2020-09-14","positive":2,"tested":23},{"date":"2020-09-15","positive":2,"tested":150},{"date":"2020-09-16","positive":2,"tested":54},{"date":"2020-09-17","positive":3,"tested":38},{"date":"2020-09-18","positive":1,"tested":48},{"date":"2020-09-19","positive":1,"tested":33},{"date":"2020-09-20","positive":1,"tested":78},{"date":"2020-09-21","positive":3,"tested":9},{"date":"2020-09-22","positive":2,"tested":26},{"date":"2020-09-23","positive":1,"tested":18},{"date":"2020-09-24","positive":1,"tested":29},{"date":"2020-09-25","positive":1,"tested":39},{"date":"2020-09-26","positive":5,"tested":79},{"date":"2020-09-27","positive":1,"tested":60},{"date":"2020-09-28","positive":11,"tested":16},{"date":"2020-09-29","positive":3,"tested":39},{"date":"2020-09-30","positive":5,"tested":107},{"date":"2020-10-01","positive":2,"tested":47},{"date":"2020-10-02","positive":9,"tested":35},{"date":"2020-10-03","positive":3,"tested":18},{"date":"2020-10-04","positive":5,"tested":22},{"date":"2020-10-05","positive":1,"tested":15},{"date":"2020-10-06","positive":4,"tested":40},{"date":"2020-10-07","positive":12,"tested":113},{"date":"2020-10-08","positive":5,"tested":38},{"date":"2020-10-09","positive":2,"tested":45},{"date":"2020-10-10","positive":6,"tested":31},{"date":"2020-10-11","positive":3,"tested":19},{"date":"2020-10-12","positive":1,"tested":99},{"date":"2020-10-13","positive":0,"tested":33},{"date":"2020-10-14","positive":5,"tested":33},{"date":"2020-10-15","positive":4,"tested":54},{"date":"2020-10-16","positive":4,"tested":42},{"date":"2020-10-17","positive":2,"tested":212}],"date":"2020/10/17 23:59"}}')},384:function(t,e,o){t.exports=function(){"use strict";var s,t,i=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,e=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,o={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},d=function(s){return s instanceof u},l=function(s,t,i){return new u(s,i,t.$l)},c=function(s){return t.p(s)+"s"},u=function(){function u(s,t,i){var d=this;if(this.$d={},this.$l=i,t)return l(s*o[c(t)],this);if("number"==typeof s)return this.$ms=s,this.parseFromMilliseconds(),this;if("object"==typeof s)return Object.keys(s).forEach((function(t){d.$d[c(t)]=s[t]})),this.calMilliseconds(),this;if("string"==typeof s){var u=s.match(e);if(u)return this.$d.years=u[2],this.$d.months=u[3],this.$d.weeks=u[4],this.$d.days=u[5],this.$d.hours=u[6],this.$d.minutes=u[7],this.$d.seconds=u[8],this.calMilliseconds(),this}return this}var n=u.prototype;return n.calMilliseconds=function(){var s=this;this.$ms=Object.keys(this.$d).reduce((function(t,i){return t+(s.$d[i]||0)*o[i]}),0)},n.parseFromMilliseconds=function(){var s=this.$ms;this.$d.years=Math.floor(s/31536e6),s%=31536e6,this.$d.months=Math.floor(s/2592e6),s%=2592e6,this.$d.days=Math.floor(s/864e5),s%=864e5,this.$d.hours=Math.floor(s/36e5),s%=36e5,this.$d.minutes=Math.floor(s/6e4),s%=6e4,this.$d.seconds=Math.floor(s/1e3),s%=1e3,this.$d.milliseconds=s},n.toISOString=function(){var s=this.$d.years?this.$d.years+"Y":"",t=this.$d.months?this.$d.months+"M":"",i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var e=i?i+"D":"",o=this.$d.hours?this.$d.hours+"H":"",d=this.$d.minutes?this.$d.minutes+"M":"",l=this.$d.seconds||0;this.$d.milliseconds&&(l+=this.$d.milliseconds/1e3);var c=l?l+"S":"",u="P"+s+t+e+(o||d||c?"T":"")+o+d+c;return"P"===u?"P0D":u},n.toJSON=function(){return this.toISOString()},n.format=function(s){var e=s||"YYYY-MM-DDTHH:mm:ss",o={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return e.replace(i,(function(s,t){return t||String(o[s])}))},n.as=function(s){return this.$ms/o[c(s)]},n.get=function(s){var t=this.$ms,i=c(s);return"milliseconds"===i?t%=1e3:t="weeks"===i?Math.floor(t/o[i]):this.$d[i],t},n.add=function(s,t,i){var e;return e=t?s*o[c(t)]:d(s)?s.$ms:l(s,this).$ms,l(this.$ms+e*(i?-1:1),this)},n.subtract=function(s,t){return this.add(s,t,!0)},n.locale=function(s){var t=this.clone();return t.$l=s,t},n.clone=function(){return l(this.$ms,this)},n.humanize=function(t){return s().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},n.milliseconds=function(){return this.get("milliseconds")},n.asMilliseconds=function(){return this.as("milliseconds")},n.seconds=function(){return this.get("seconds")},n.asSeconds=function(){return this.as("seconds")},n.minutes=function(){return this.get("minutes")},n.asMinutes=function(){return this.as("minutes")},n.hours=function(){return this.get("hours")},n.asHours=function(){return this.as("hours")},n.days=function(){return this.get("days")},n.asDays=function(){return this.as("days")},n.weeks=function(){return this.get("weeks")},n.asWeeks=function(){return this.as("weeks")},n.months=function(){return this.get("months")},n.asMonths=function(){return this.as("months")},n.years=function(){return this.get("years")},n.asYears=function(){return this.as("years")},u}();return function(i,e,o){s=o,t=o().$utils(),o.duration=function(s,t){var i=o.locale();return l(s,{$l:i},t)},o.isDuration=d;var c=e.prototype.add,u=e.prototype.subtract;e.prototype.add=function(s,t){return d(s)&&(s=s.asMilliseconds()),c.bind(this)(s,t)},e.prototype.subtract=function(s,t){return d(s)&&(s=s.asMilliseconds()),u.bind(this)(s,t)}}}()},572:function(t,e,o){"use strict";o.r(e);o(36);var d=o(10),l=o.n(d),c=o(384),n=o.n(c),r=o(381),v=o(359),h=o(347);l.a.extend(n.a);var f={components:{PositiveRateMixedChart:r.default},data:function(){for(var t=v.positiveRate,data=t.data,e=t.date,o=[],d=[],l=[],c=[],n=[],i=0;i<data.length;i++){for(var r=i<7?i+1:7,f=0,y=0,$=0;$<r;$++)f+=data[i-$].tested,y+=data[i-$].positive;var m=f/r,_=y/r;o.push(data[i].positive),l.push(_/m*100);var w=data[i].tested-data[i].positive;d.push(w<0?0:w),c.push(data[i].date),n.push(m)}var M=[o,d,n,l],S=[this.$t("陽性者数"),this.$t("陰性者数"),this.$t("検査人数（週平均）"),this.$t("陽性率")],k=S.map((function(t){return t}));return{date:e,positiveRateGraph:M,positiveRateLabels:c,positiveRateDataLabels:S,positiveRateTableLabels:k,getFormatter:function(t){return 2===t?Object(h.a)(1):3===t?Object(h.b)(1):Object(h.c)()}}}},y=o(6),$=o(32),m=o.n($),_=o(711),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[o("client-only",[o("positive-rate-mixed-chart",{attrs:{title:t.$t("検査の陽性率（第2波）"),"title-id":"wave2/positive-rate","info-titles":[t.$t("検査の陽性率"),t.$t("検査人数")],"chart-id":"wave2-positive-rate-chart","chart-data":t.positiveRateGraph,"get-formatter":t.getFormatter,date:t.date,labels:t.positiveRateLabels,unit:"%","option-unit":t.$t("人"),"data-labels":t.positiveRateDataLabels,"table-labels":t.positiveRateTableLabels},scopedSlots:t._u([{key:"description",fn:function(){return[o("ul",[o("li",[t._v("\n            "+t._s(t.$t("陽性率：陽性判明数の移動平均／（陽性判明数＋陰性判明数）の移動平均"))+"\n          ")]),t._v(" "),o("li",[t._v("\n            "+t._s(t.$t("集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値をもとに算出し、折れ線グラフで示す（例えば、5月7日の陽性率は、5月1日から5月7日までの実績平均を用いて算出）"))+"\n          ")]),t._v(" "),o("li",[t._v("\n            "+t._s(t.$t("速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n          ")]),t._v(" "),o("li",[t._v("\n            "+t._s(t.$t("県が公表しておらず、検査実施人数が不明な日は、陽性者・陰性者ともに0名と表示される"))+"\n          ")]),t._v(" "),o("li",[t._v("\n            "+t._s(t.$t("民間検査機関、帰国者・接触者外来設置等医療機関、その他の検査機関による検査は含まれていない"))+"\n          ")])])]},proxy:!0},{key:"additionalDescription",fn:function(){return[o("ul",[o("li",[t._v("\n            "+t._s(t.$t("凡例をクリックすることにより、グラフを非表示にすることができます。もう一度クリックすると再表示します。"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{PositiveRateMixedChart:o(381).default}),m()(component,{VCol:_.a})}}]);