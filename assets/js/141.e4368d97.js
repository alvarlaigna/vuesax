(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{432:function(e,n,t){},545:function(e,n,t){"use strict";var a=t(432);t.n(a).a},635:function(e,n,t){"use strict";t.r(n);var a={data:function(){return{value1:""}},computed:{inputValido:function(){return!/^\d+$/.test(this.value1)}}},l=(t(545),t(0)),s=Object(l.a)(a,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"centerx"},[t("vs-input",{attrs:{"vs-label":"Enter only numbers","vs-placeholder":"0123456789"},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),t("vs-alert",{attrs:{"vs-active":e.inputValido,"vs-color":"danger","vs-icon":"new_releases"}},[e._v("\n    the value is "),t("b",[e._v("invalid")]),e._v(" you can only enter numbers\n  ")])],1)},[],!1,null,null,null);n.default=s.exports}}]);