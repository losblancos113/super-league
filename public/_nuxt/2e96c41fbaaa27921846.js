(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(t,e,n){var r=n(323);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(52).default)("3c1c0d4c",r,!0,{})},322:function(t,e,n){"use strict";var r=n(193);n.n(r).a},323:function(t,e,n){(t.exports=n(51)(!1)).push([t.i,"",""])},326:function(t,e,n){"use strict";n(50);var r=n(5),a=n.n(r),s=(n(14),{methods:{googleSignUp:function(){var t=a()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.dispatch("signInWithGoogle").then(function(){console.log("inside then statement on login")}).catch(function(t){console.log(t.message)});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}),o=(n(322),n(21)),i=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{"text-xs-center":"",xs12:"",sm6:"","offset-sm3":""}},[n("v-btn",{staticClass:"signIn mb-2",attrs:{primary:""},nativeOn:{click:function(e){return t.googleSignUp(e)}}},[t._v("Google Sign In")])],1)],1)},[],!1,null,null,null);i.options.__file="LoginForm.vue";e.a=i.exports},329:function(t,e,n){var r=n(338);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(52).default)("7f7ebfa3",r,!0,{})},337:function(t,e,n){"use strict";var r=n(329);n.n(r).a},338:function(t,e,n){(t.exports=n(51)(!1)).push([t.i,"",""])},352:function(t,e,n){"use strict";n.r(e);n(23),n(22),n(50);var r=n(5),a=n.n(r),s=n(30),o=n.n(s),i=n(326),c=n(14),u=n(29),l={name:"index",components:{LoginForm:i.a},methods:o()({},Object(u.c)(["setTeamList"])),data:function(){return{}},asyncData:function(){var t=a()(regeneratorRuntime.mark(function t(e){var n,r,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,e.params,e.error,n=c.a.collection("teams"),t.prev=2,s=[],t.next=6,n.get();case 6:if(!((r=t.sent).size>0)){t.next=10;break}return t.next=10,r.forEach(function(){var t=a()(regeneratorRuntime.mark(function t(e){var n,r,a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.data(),r=e.ref.collection("players"),t.next=4,r.get();case 4:return a=t.sent,o=[],t.next=8,a.forEach(function(t){o.push({id:t.id,name:t.data().name,kit_number:t.data().kit_number})});case 8:s.push({id:e.id,data:{name:n.name,players:o}});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 10:console.log(s),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.error(t.t0);case 16:return t.abrupt("return",{teams:s});case 17:case"end":return t.stop()}},t,this,[[2,13]])}));return function(e){return t.apply(this,arguments)}}(),updated:function(){console.log("Mounted"),this.setTeamList(this.teams)}},f=(n(337),n(21)),p=Object(f.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-space-around":"",row:"","fill-height":""}},t._l(t.teams,function(e){return n("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md6:"",lg3:""}},[n("v-card",{attrs:{nuxt:"",to:"/admin/teams/"+e.id}},[n("v-card-title",{attrs:{"primary-title":""}},[n("h3",[t._v(t._s(e.data.name))])])],1)],1)}),1)},[],!1,null,"22556dcf",null);p.options.__file="index.vue";e.default=p.exports}}]);