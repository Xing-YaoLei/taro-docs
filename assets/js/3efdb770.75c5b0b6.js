"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59452],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Taro.checkSession(option)",sidebar_label:"checkSession"},l=void 0,p={unversionedId:"apis/open-api/login/checkSession",id:"version-3.x/apis/open-api/login/checkSession",title:"Taro.checkSession(option)",description:"\u68c0\u67e5\u767b\u5f55\u6001\u662f\u5426\u8fc7\u671f\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/login/checkSession.md",sourceDirName:"apis/open-api/login",slug:"/apis/open-api/login/checkSession",permalink:"/taro-docs/docs/apis/open-api/login/checkSession",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/open-api/login/checkSession.md",tags:[],version:"3.x",frontMatter:{title:"Taro.checkSession(option)",sidebar_label:"checkSession"},sidebar:"API",previous:{title:"login",permalink:"/taro-docs/docs/apis/open-api/login/"},next:{title:"getAccountInfoSync",permalink:"/taro-docs/docs/apis/open-api/account/getAccountInfoSync"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:s};function m(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u68c0\u67e5\u767b\u5f55\u6001\u662f\u5426\u8fc7\u671f\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 Taro.login \u63a5\u53e3\u83b7\u5f97\u7684\u7528\u6237\u767b\u5f55\u6001\u62e5\u6709\u4e00\u5b9a\u7684\u65f6\u6548\u6027\u3002\u7528\u6237\u8d8a\u4e45\u672a\u4f7f\u7528\u5c0f\u7a0b\u5e8f\uff0c\u7528\u6237\u767b\u5f55\u6001\u8d8a\u6709\u53ef\u80fd\u5931\u6548\u3002\u53cd\u4e4b\u5982\u679c\u7528\u6237\u4e00\u76f4\u5728\u4f7f\u7528\u5c0f\u7a0b\u5e8f\uff0c\u5219\u7528\u6237\u767b\u5f55\u6001\u4e00\u76f4\u4fdd\u6301\u6709\u6548\u3002\u5177\u4f53\u65f6\u6548\u903b\u8f91\u7531\u5fae\u4fe1\u7ef4\u62a4\uff0c\u5bf9\u5f00\u53d1\u8005\u900f\u660e\u3002\u5f00\u53d1\u8005\u53ea\u9700\u8981\u8c03\u7528 Taro.checkSession \u63a5\u53e3\u68c0\u6d4b\u5f53\u524d\u7528\u6237\u767b\u5f55\u6001\u662f\u5426\u6709\u6548\u3002"),(0,r.kt)("p",null,"\u767b\u5f55\u6001\u8fc7\u671f\u540e\u5f00\u53d1\u8005\u53ef\u4ee5\u518d\u8c03\u7528 Taro.login \u83b7\u53d6\u65b0\u7684\u7528\u6237\u767b\u5f55\u6001\u3002\u8c03\u7528\u6210\u529f\u8bf4\u660e\u5f53\u524d session_key \u672a\u8fc7\u671f\uff0c\u8c03\u7528\u5931\u8d25\u8bf4\u660e session_key \u5df2\u8fc7\u671f\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html"}),"\u5c0f\u7a0b\u5e8f\u767b\u5f55"),"\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.checkSession({\n  success: function () {\n    //session_key \u672a\u8fc7\u671f\uff0c\u5e76\u4e14\u5728\u672c\u751f\u547d\u5468\u671f\u4e00\u76f4\u6709\u6548\n  },\n  fail: function () {\n    // session_key \u5df2\u7ecf\u5931\u6548\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c\u767b\u5f55\u6d41\u7a0b\n    Taro.login() //\u91cd\u65b0\u767b\u5f55\n  }\n})\n")))}m.isMDXComponent=!0},80068:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},96636:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);