"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4651],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(n),u=r,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},30786:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"Taro.compressVideo(option)",sidebar_label:"compressVideo"},o=void 0,p={unversionedId:"apis/media/video/compressVideo",id:"apis/media/video/compressVideo",title:"Taro.compressVideo(option)",description:"\u538b\u7f29\u89c6\u9891\u63a5\u53e3\u3002",source:"@site/docs/apis/media/video/compressVideo.md",sourceDirName:"apis/media/video",slug:"/apis/media/video/compressVideo",permalink:"/taro-docs/docs/next/apis/media/video/compressVideo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/video/compressVideo.md",tags:[],version:"current",frontMatter:{title:"Taro.compressVideo(option)",sidebar_label:"compressVideo"},sidebar:"API",previous:{title:"createVideoContext",permalink:"/taro-docs/docs/next/apis/media/video/createVideoContext"},next:{title:"chooseVideo",permalink:"/taro-docs/docs/next/apis/media/video/chooseVideo"}},d={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"Quality",id:"quality",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],c={toc:m};function s(t){var{components:e}=t,i=l(t,["components"]);return(0,a.kt)("wrapper",r({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u538b\u7f29\u89c6\u9891\u63a5\u53e3\u3002\n\u5f00\u53d1\u8005\u53ef\u6307\u5b9a\u538b\u7f29\u8d28\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"quality")," \u8fdb\u884c\u538b\u7f29\u3002\u5f53\u9700\u8981\u66f4\u7cbe\u7ec6\u7684\u63a7\u5236\u65f6\uff0c\u53ef\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"bitrate"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"fps"),"\u3001\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"resolution"),"\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"quality")," \u4f20\u5165\u65f6\uff0c\u8fd9\u4e09\u4e2a\u53c2\u6570\u5c06\u88ab\u5ffd\u7565\u3002\u539f\u89c6\u9891\u7684\u76f8\u5173\u4fe1\u606f\u53ef\u901a\u8fc7 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/apis/media/video/getVideoInfo"}),"getVideoInfo")," \u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.compressVideo.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,a.kt)("h3",r({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"src"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89c6\u9891\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u4e5f\u53ef\u4ee5\u662f\u6c38\u4e45\u6587\u4ef6\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"quality"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof Quality")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u538b\u7f29\u8d28\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bitrate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7801\u7387\uff0c\u5355\u4f4d kbps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"fps"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5e27\u7387")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"resolution"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76f8\u5bf9\u4e8e\u539f\u89c6\u9891\u7684\u5206\u8fa8\u7387\u6bd4\u4f8b\uff0c\u53d6\u503c\u8303\u56f4(0, 1]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,a.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"tempFilePath"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u538b\u7f29\u540e\u7684\u4e34\u65f6\u6587\u4ef6\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"size"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u538b\u7f29\u540e\u7684\u5927\u5c0f\uff0c\u5355\u4f4d kB")))),(0,a.kt)("h3",r({},{id:"quality"}),"Quality"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"low"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4f4e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"medium"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e2d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"high"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9ad8")))),(0,a.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseVideo({\n  sourceType: ['album', 'camera'],\n  maxDuration: 60,\n  camera: 'back',\n  compressed: false,\n  success (res) {\n    Taro.compressVideo({\n      src: res.tempFilePath,\n      quality: quality,\n      bitrate: 1032,\n      fps: 24,\n      resolution:0.5,\n      success (res) {\n        console.log(\"\u538b\u7f29\u6210\u529f\")\n      },\n      fail (err) {\n        console.log(\"\u538b\u7f29\u5931\u8d25\")\n      }\n    })\n  }\n})\n")))}s.isMDXComponent=!0},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);