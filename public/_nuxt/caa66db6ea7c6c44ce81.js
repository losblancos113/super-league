(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{298:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var a=s(300);s(302),s(303),s(304);a.apps.length||a.initializeApp({apiKey:"AIzaSyDHRV643GlgRPO8XORc0uJ6WJ6NE4xP9Dw",authDomain:"super-league-7c6d4.firebaseapp.com",databaseURL:"https://super-league-7c6d4.firebaseio.com",projectId:"super-league-7c6d4",storageBucket:"super-league-7c6d4.appspot.com",messagingSenderId:"55504288873"});var r=a.firestore();r.settings({timestampsInSnapshots:!0});a.auth();var n=r},299:function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return o});var a=s(173),r=s.n(a),n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(s,a){if(!s.hasOwnProperty(t)||!a.hasOwnProperty(t))return 0;var r="string"==typeof s[t]?s[t].toUpperCase():s[t],n="string"==typeof a[t]?a[t].toUpperCase():a[t],o=0;return r>n?o=1:r<n&&(o=-1),"desc"==e?-1*o:o}},o=function(t){var e=new Date(1e3*t.seconds);return r()(e).format("YYYY-MM-DD hh:mm A")}},305:function(t,e,s){var a={"./af":174,"./af.js":174,"./ar":175,"./ar-dz":176,"./ar-dz.js":176,"./ar-kw":177,"./ar-kw.js":177,"./ar-ly":178,"./ar-ly.js":178,"./ar-ma":179,"./ar-ma.js":179,"./ar-sa":180,"./ar-sa.js":180,"./ar-tn":181,"./ar-tn.js":181,"./ar.js":175,"./az":182,"./az.js":182,"./be":183,"./be.js":183,"./bg":184,"./bg.js":184,"./bm":185,"./bm.js":185,"./bn":186,"./bn.js":186,"./bo":187,"./bo.js":187,"./br":188,"./br.js":188,"./bs":189,"./bs.js":189,"./ca":190,"./ca.js":190,"./cs":191,"./cs.js":191,"./cv":192,"./cv.js":192,"./cy":193,"./cy.js":193,"./da":194,"./da.js":194,"./de":195,"./de-at":196,"./de-at.js":196,"./de-ch":197,"./de-ch.js":197,"./de.js":195,"./dv":198,"./dv.js":198,"./el":199,"./el.js":199,"./en-au":200,"./en-au.js":200,"./en-ca":201,"./en-ca.js":201,"./en-gb":202,"./en-gb.js":202,"./en-ie":203,"./en-ie.js":203,"./en-il":204,"./en-il.js":204,"./en-nz":205,"./en-nz.js":205,"./eo":206,"./eo.js":206,"./es":207,"./es-do":208,"./es-do.js":208,"./es-us":209,"./es-us.js":209,"./es.js":207,"./et":210,"./et.js":210,"./eu":211,"./eu.js":211,"./fa":212,"./fa.js":212,"./fi":213,"./fi.js":213,"./fo":214,"./fo.js":214,"./fr":215,"./fr-ca":216,"./fr-ca.js":216,"./fr-ch":217,"./fr-ch.js":217,"./fr.js":215,"./fy":218,"./fy.js":218,"./gd":219,"./gd.js":219,"./gl":220,"./gl.js":220,"./gom-latn":221,"./gom-latn.js":221,"./gu":222,"./gu.js":222,"./he":223,"./he.js":223,"./hi":224,"./hi.js":224,"./hr":225,"./hr.js":225,"./hu":226,"./hu.js":226,"./hy-am":227,"./hy-am.js":227,"./id":228,"./id.js":228,"./is":229,"./is.js":229,"./it":230,"./it.js":230,"./ja":231,"./ja.js":231,"./jv":232,"./jv.js":232,"./ka":233,"./ka.js":233,"./kk":234,"./kk.js":234,"./km":235,"./km.js":235,"./kn":236,"./kn.js":236,"./ko":237,"./ko.js":237,"./ku":238,"./ku.js":238,"./ky":239,"./ky.js":239,"./lb":240,"./lb.js":240,"./lo":241,"./lo.js":241,"./lt":242,"./lt.js":242,"./lv":243,"./lv.js":243,"./me":244,"./me.js":244,"./mi":245,"./mi.js":245,"./mk":246,"./mk.js":246,"./ml":247,"./ml.js":247,"./mn":248,"./mn.js":248,"./mr":249,"./mr.js":249,"./ms":250,"./ms-my":251,"./ms-my.js":251,"./ms.js":250,"./mt":252,"./mt.js":252,"./my":253,"./my.js":253,"./nb":254,"./nb.js":254,"./ne":255,"./ne.js":255,"./nl":256,"./nl-be":257,"./nl-be.js":257,"./nl.js":256,"./nn":258,"./nn.js":258,"./pa-in":259,"./pa-in.js":259,"./pl":260,"./pl.js":260,"./pt":261,"./pt-br":262,"./pt-br.js":262,"./pt.js":261,"./ro":263,"./ro.js":263,"./ru":264,"./ru.js":264,"./sd":265,"./sd.js":265,"./se":266,"./se.js":266,"./si":267,"./si.js":267,"./sk":268,"./sk.js":268,"./sl":269,"./sl.js":269,"./sq":270,"./sq.js":270,"./sr":271,"./sr-cyrl":272,"./sr-cyrl.js":272,"./sr.js":271,"./ss":273,"./ss.js":273,"./sv":274,"./sv.js":274,"./sw":275,"./sw.js":275,"./ta":276,"./ta.js":276,"./te":277,"./te.js":277,"./tet":278,"./tet.js":278,"./tg":279,"./tg.js":279,"./th":280,"./th.js":280,"./tl-ph":281,"./tl-ph.js":281,"./tlh":282,"./tlh.js":282,"./tr":283,"./tr.js":283,"./tzl":284,"./tzl.js":284,"./tzm":285,"./tzm-latn":286,"./tzm-latn.js":286,"./tzm.js":285,"./ug-cn":287,"./ug-cn.js":287,"./uk":288,"./uk.js":288,"./ur":289,"./ur.js":289,"./uz":290,"./uz-latn":291,"./uz-latn.js":291,"./uz.js":290,"./vi":292,"./vi.js":292,"./x-pseudo":293,"./x-pseudo.js":293,"./yo":294,"./yo.js":294,"./zh-cn":295,"./zh-cn.js":295,"./zh-hk":296,"./zh-hk.js":296,"./zh-tw":297,"./zh-tw.js":297};function r(t){var e=n(t);return s(e)}function n(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=305},306:function(t,e,s){var a=s(321);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(48).default)("59497dc0",a,!0,{})},307:function(t,e,s){var a=s(323);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(48).default)("40459138",a,!0,{})},320:function(t,e,s){"use strict";var a=s(306);s.n(a).a},321:function(t,e,s){(t.exports=s(47)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},322:function(t,e,s){"use strict";var a=s(307);s.n(a).a},323:function(t,e,s){(t.exports=s(47)(!1)).push([t.i,".VuetifyLogo{width:180px;-webkit-transform:rotateY(560deg);transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}@keyframes turn{to{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}",""])},324:function(t,e,s){"use strict";s.r(e);s(19),s(46);var a=s(6),r=s.n(a),n=(s(320),s(17)),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);o.options.__file="Logo.vue";var i=o.exports,l=(s(322),Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"data:image/png;base64,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"}})},[],!1,null,null,null));l.options.__file="VuetifyLogo.vue";var u=l.exports,c=s(298),d=s(299),f={components:{Logo:i,VuetifyLogo:u},data:function(){return{season1:{},tableHeaders:[{text:"#",align:"left",sortable:!1},{text:"Team",align:"left",sortable:!1,value:"name"},{text:"PL",value:"game_played"},{text:"W",value:"won"},{text:"D",value:"draw"},{text:"L",value:"lose"},{text:"F",value:"goals_for"},{text:"A",value:"goals_against"},{text:"GD",value:"GD"},{text:"Pts",value:"point"}]}},asyncData:function(){var t=r()(regeneratorRuntime.mark(function t(e){var s,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,e.params,e.error,s=c.a.collection("seasons").where("active","==",!0),t.prev=2,t.next=5,s.get();case 5:(a=t.sent).size>0&&(r=a.docs[0].data()),console.log(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0);case 13:return t.abrupt("return",{seasone_name:r.name,teams:r.teams.sort(Object(d.a)("point","desc"))});case 14:case"end":return t.stop()}},t,this,[[2,10]])}));return function(e){return t.apply(this,arguments)}}()},j=Object(n.a)(f,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[s("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[s("div",{staticClass:"text-xs-center"},[s("vuetify-logo")],1),t._v(" "),s("div",{staticClass:"xs10 offset-xs1"},[s("v-data-table",{attrs:{headers:t.tableHeaders,items:t.teams,"disable-initial-sort":!0},scopedSlots:t._u([{key:"items",fn:function(e){return[s("td",[t._v(t._s(e.index+1))]),t._v(" "),s("td",[t._v(t._s(e.item.name))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.game_played))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.won))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.draw))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.lose))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.goals_for))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.goals_against))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.goals_for-e.item.goals_against))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.point))])]}}])})],1)])],1)},[],!1,null,null,null);j.options.__file="index.vue";e.default=j.exports}}]);