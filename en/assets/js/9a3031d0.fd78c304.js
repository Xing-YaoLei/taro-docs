"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[95321],{79874:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},i),{},{components:n})):a.createElement(k,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},c=void 0,s={unversionedId:"apis/device/compass/onCompassChange",id:"apis/device/compass/onCompassChange",title:"Taro.onCompassChange(callback)",description:"Listens on the compass data change event at a frequency of 5 times per second. Listening automatically starts after the API is called. You can use Taro.stopCompass to stop listening.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/compass/onCompassChange.md",sourceDirName:"apis/device/compass",slug:"/apis/device/compass/onCompassChange",permalink:"/taro-docs/en/docs/next/apis/device/compass/onCompassChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/compass/onCompassChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},sidebar:"API",previous:{title:"startCompass",permalink:"/taro-docs/en/docs/next/apis/device/compass/startCompass"},next:{title:"offCompassChange",permalink:"/taro-docs/en/docs/next/apis/device/compass/offCompassChange"}},u={},i=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Callback",id:"callback",level:3},{value:"OnCompassChangeCallbackResult",id:"oncompasschangecallbackresult",level:3},{value:"accuracy",id:"accuracy",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:i};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Listens on the compass data change event at a frequency of 5 times per second. Listening automatically starts after the API is called. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.stopCompass")," to stop listening."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/compass/wx.onCompassChange.html"}),"Reference"))),(0,a.kt)("h2",r({},{id:"type"}),"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,a.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,a.kt)("h3",r({},{id:"callback"}),"Callback"),(0,a.kt)("p",null,"The callback function for the compass data change event."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: OnCompassChangeCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"OnCompassChangeCallbackResult"))))),(0,a.kt)("h3",r({},{id:"oncompasschangecallbackresult"}),"OnCompassChangeCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"accuracy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string | number")),(0,a.kt)("td",null,"The accuracy")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"direction"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The degree of the direction faced")))),(0,a.kt)("h3",r({},{id:"accuracy"}),"accuracy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Accuracy Difference Between iOS and Android"),"\nThe accuracy values are different on iOS and Android."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"iOS: The accuracy is a number-type value indicating the deviation from the magnetic north pole. 0 indicates the device points to magnetic north, 90 east, 180 south, and so on."),(0,a.kt)("li",{parentName:"ul"},"Android: The accuracy is a string-type enumerated value.")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"high"),(0,a.kt)("td",null,"High accuracy")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"medium"),(0,a.kt)("td",null,"Moderate accuracy")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"low"),(0,a.kt)("td",null,"Low accuracy")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"no-contact"),(0,a.kt)("td",null,"Unreliable. Connection with sensor lost.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"unreliable"),(0,a.kt)("td",null,"Unreliable. Unknown error.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"unknow ","{value}"),(0,a.kt)("td",null,"An unknown accuracy enumerated value. That is, the value returned by the Android system is not a standard enumerated value of accuracy.")))),(0,a.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.onCompassChange(function (res) {\n  console.log(res.direction)\n})\n")),(0,a.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.onCompassChange"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);