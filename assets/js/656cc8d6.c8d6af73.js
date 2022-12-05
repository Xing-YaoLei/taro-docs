"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64565],{79874:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(93106);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,k=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(k,i(i({ref:r},s),{},{components:t})):n.createElement(k,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63796:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});t(93106);var n=t(79874);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={title:"Taro.createWorker(scriptPath)",sidebar_label:"createWorker"},c=void 0,l={unversionedId:"apis/worker/createWorker",id:"apis/worker/createWorker",title:"Taro.createWorker(scriptPath)",description:"\u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002\u76ee\u524d\u9650\u5236\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a Worker\uff0c\u521b\u5efa\u4e0b\u4e00\u4e2a Worker \u524d\u8bf7\u5148\u8c03\u7528 Worker.terminate",source:"@site/docs/apis/worker/createWorker.md",sourceDirName:"apis/worker",slug:"/apis/worker/createWorker",permalink:"/taro-docs/docs/next/apis/worker/createWorker",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/worker/createWorker.md",tags:[],version:"current",frontMatter:{title:"Taro.createWorker(scriptPath)",sidebar_label:"createWorker"},sidebar:"API",previous:{title:"startFacialRecognitionVerifyAndUploadVideo",permalink:"/taro-docs/docs/next/apis/open-api/facial/startFacialRecognitionVerifyAndUploadVideo"},next:{title:"Worker",permalink:"/taro-docs/docs/next/apis/worker/"}},p={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:s};function f(e){var{components:r}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002\u76ee\u524d\u9650\u5236\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a Worker\uff0c\u521b\u5efa\u4e0b\u4e00\u4e2a Worker \u524d\u8bf7\u5148\u8c03\u7528 ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/apis/worker/#terminate"}),"Worker.terminate")),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:t(88421).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:t(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:t(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(scriptPath: string) => Worker\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"scriptPath"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"worker \u5165\u53e3\u6587\u4ef6\u7684",(0,n.kt)("strong",{parentName:"td"},"\u7edd\u5bf9\u8def\u5f84"))))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const worker = Taro.createWorker('workers/request/index.js') // \u6587\u4ef6\u540d\u6307\u5b9a worker \u7684\u5165\u53e3\u6587\u4ef6\u8def\u5f84\uff0c\u7edd\u5bf9\u8def\u5f84\n  worker.onMessage(function (res) {\n  console.log(res)\n})\nworker.postMessage({\n  msg: 'hello worker'\n})\nworker.terminate()\n")))}f.isMDXComponent=!0},80068:function(e,r,t){r.Z=t.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},96636:function(e,r,t){r.Z=t.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,r,t){r.Z=t.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);