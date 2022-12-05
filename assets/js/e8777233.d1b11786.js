"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68600],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43828:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Taro.pluginLogin(option)",sidebar_label:"pluginLogin"},o=void 0,p={unversionedId:"apis/open-api/login/pluginLogin",id:"apis/open-api/login/pluginLogin",title:"Taro.pluginLogin(option)",description:"\u8be5\u63a5\u53e3\u4ec5\u5728\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u4e2d\u53ef\u8c03\u7528\uff0c\u8c03\u7528\u63a5\u53e3\u83b7\u5f97\u63d2\u4ef6\u7528\u6237\u6807\u5fd7\u51ed\u8bc1\uff08code\uff09\u3002\u63d2\u4ef6\u53ef\u4ee5\u6b64\u51ed\u8bc1\u6362\u53d6\u7528\u4e8e\u8bc6\u522b\u7528\u6237\u7684\u6807\u8bc6 openpid\u3002\u7528\u6237\u4e0d\u540c\u3001\u5bbf\u4e3b\u5c0f\u7a0b\u5e8f\u4e0d\u540c\u6216\u63d2\u4ef6\u4e0d\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u8be5\u6807\u8bc6\u5747\u4e0d\u76f8\u540c\uff0c\u5373\u5f53\u4e14\u4ec5\u5f53\u540c\u4e00\u4e2a\u7528\u6237\u5728\u540c\u4e00\u4e2a\u5bbf\u4e3b\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u540c\u4e00\u4e2a\u63d2\u4ef6\u65f6\uff0copenpid \u624d\u4f1a\u76f8\u540c",source:"@site/docs/apis/open-api/login/pluginLogin.md",sourceDirName:"apis/open-api/login",slug:"/apis/open-api/login/pluginLogin",permalink:"/taro-docs/docs/next/apis/open-api/login/pluginLogin",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/open-api/login/pluginLogin.md",tags:[],version:"current",frontMatter:{title:"Taro.pluginLogin(option)",sidebar_label:"pluginLogin"},sidebar:"API",previous:{title:"WriteResult",permalink:"/taro-docs/docs/next/apis/files/WriteResult"},next:{title:"login",permalink:"/taro-docs/docs/next/apis/open-api/login/"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3}],s={toc:u};function d(t){var{components:e}=t,i=l(t,["components"]);return(0,r.kt)("wrapper",a({},s,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8be5\u63a5\u53e3\u4ec5\u5728\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u4e2d\u53ef\u8c03\u7528"),"\uff0c\u8c03\u7528\u63a5\u53e3\u83b7\u5f97\u63d2\u4ef6\u7528\u6237\u6807\u5fd7\u51ed\u8bc1\uff08code\uff09\u3002\u63d2\u4ef6\u53ef\u4ee5\u6b64\u51ed\u8bc1\u6362\u53d6\u7528\u4e8e\u8bc6\u522b\u7528\u6237\u7684\u6807\u8bc6 openpid\u3002\u7528\u6237\u4e0d\u540c\u3001\u5bbf\u4e3b\u5c0f\u7a0b\u5e8f\u4e0d\u540c\u6216\u63d2\u4ef6\u4e0d\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u8be5\u6807\u8bc6\u5747\u4e0d\u76f8\u540c\uff0c\u5373\u5f53\u4e14\u4ec5\u5f53\u540c\u4e00\u4e2a\u7528\u6237\u5728\u540c\u4e00\u4e2a\u5bbf\u4e3b\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u540c\u4e00\u4e2a\u63d2\u4ef6\u65f6\uff0copenpid \u624d\u4f1a\u76f8\u540c"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.pluginLogin.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",a({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"code"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7528\u4e8e\u6362\u53d6 openpid \u7684\u51ed\u8bc1\uff08\u6709\u6548\u671f\u4e94\u5206\u949f\uff09\u3002\u63d2\u4ef6\u5f00\u53d1\u8005\u53ef\u4ee5\u7528\u6b64 code \u5728\u5f00\u53d1\u8005\u670d\u52a1\u5668\u540e\u53f0\u8c03\u7528 ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/user-info/auth.getPluginOpenPId.html"}),"auth.getPluginOpenPId")," \u6362\u53d6 openpid\u3002")))))}d.isMDXComponent=!0},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);