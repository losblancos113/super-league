(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{202:function(n,t,e){var content=e(332);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(55).default)("52d5f69f",content,!0,{sourceMap:!1})},331:function(n,t,e){"use strict";var o=e(202);e.n(o).a},332:function(n,t,e){(n.exports=e(54)(!1)).push([n.i,"",""])},335:function(n,t,e){"use strict";e(53);var o=e(8),r=(e(20),{methods:{googleSignUp:function(){var n=Object(o.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.$store.dispatch("signInWithGoogle").then(function(){console.log("inside then statement on login")}).catch(function(n){console.log(n.message)});case 1:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()}}),c=(e(331),e(24)),component=Object(c.a)(r,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-layout",[e("v-flex",{attrs:{"text-xs-center":"",xs12:"",sm6:"","offset-sm3":""}},[e("v-btn",{staticClass:"signIn mb-2",attrs:{primary:""},nativeOn:{click:function(t){return n.googleSignUp(t)}}},[n._v("Google Sign In")])],1)],1)},[],!1,null,null,null);t.a=component.exports},349:function(n,t,e){"use strict";e.r(t);var o={components:{LoginForm:e(335).a}},r=e(24),component=Object(r.a)(o,function(){var n=this.$createElement,t=this._self._c||n;return t("v-container",[t("login-form")],1)},[],!1,null,null,null);t.default=component.exports}}]);