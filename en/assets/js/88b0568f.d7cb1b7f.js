"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72501],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,k=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"Taro.onGetWifiList(callback)",sidebar_label:"onGetWifiList"},o=void 0,c={unversionedId:"apis/device/wifi/onGetWifiList",id:"version-3.x/apis/device/wifi/onGetWifiList",title:"Taro.onGetWifiList(callback)",description:"Listens on the event of getting the list of Wi-Fi networks.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/wifi/onGetWifiList.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/onGetWifiList",permalink:"/taro-docs/en/docs/apis/device/wifi/onGetWifiList",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/wifi/onGetWifiList.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onGetWifiList(callback)",sidebar_label:"onGetWifiList"},sidebar:"API",previous:{title:"onWifiConnected",permalink:"/taro-docs/en/docs/apis/device/wifi/onWifiConnected"},next:{title:"offWifiConnectedWithPartialInfo",permalink:"/taro-docs/en/docs/apis/device/wifi/offWifiConnectedWithPartialInfo"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Callback",id:"callback",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:s};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Listens on the event of getting the list of Wi-Fi networks."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/wifi/wx.onGetWifiList.html"}),"Reference"))),(0,r.kt)("h2",i({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,r.kt)("h2",i({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",i({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"The callback function for the event of getting the list of Wi-Fi networks."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h3",i({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"wifiList"),(0,r.kt)("td",null,(0,r.kt)("code",null,"WifiInfo[]")),(0,r.kt)("td",null,"The list of Wi-Fi networks")))),(0,r.kt)("h2",i({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"Taro.onGetWifiList"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0}}]);