"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68568],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=p(n),d=i,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,a(a({ref:e},s),{},{components:n})):r.createElement(m,a({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68417:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const a={title:"Taro.getWifiList(option)",sidebar_label:"getWifiList"},l=void 0,c={unversionedId:"apis/device/wifi/getWifiList",id:"version-2.x/apis/device/wifi/getWifiList",title:"Taro.getWifiList(option)",description:"\u8bf7\u6c42\u83b7\u53d6 Wi-Fi \u5217\u8868\u3002\u5728 onGetWifiList \u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u8fd4\u56de wifiList \u6570\u636e\u3002 Android \u8c03\u7528\u524d\u9700\u8981 \u7528\u6237\u6388\u6743 scope.userLocation\u3002",source:"@site/versioned_docs/version-2.x/apis/device/wifi/getWifiList.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/getWifiList",permalink:"/taro-docs/en/docs/2.x/apis/device/wifi/getWifiList",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/wifi/getWifiList.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getWifiList(option)",sidebar_label:"getWifiList"},sidebar:"version-2.x/API",previous:{title:"offGetWifiList",permalink:"/taro-docs/en/docs/2.x/apis/device/wifi/offGetWifiList"},next:{title:"getConnectedWifi",permalink:"/taro-docs/en/docs/2.x/apis/device/wifi/getConnectedWifi"}},p={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:s};function f(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",i({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8bf7\u6c42\u83b7\u53d6 Wi-Fi \u5217\u8868\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"onGetWifiList")," \u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"wifiList")," \u6570\u636e\u3002 ",(0,r.kt)("strong",{parentName:"p"},"Android \u8c03\u7528\u524d\u9700\u8981 ",(0,r.kt)("a",i({parentName:"strong"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"}),"\u7528\u6237\u6388\u6743")," scope.userLocation\u3002")),(0,r.kt)("p",null,"iOS \u5c06\u8df3\u8f6c\u5230\u7cfb\u7edf\u7684 Wi-Fi \u754c\u9762\uff0cAndroid \u4e0d\u4f1a\u8df3\u8f6c\u3002 iOS 11.0 \u53ca iOS 11.1 \u4e24\u4e2a\u7248\u672c\u56e0\u7cfb\u7edf\u95ee\u9898\uff0c\u8be5\u65b9\u6cd5\u5931\u6548\u3002\u4f46\u5728 iOS 11.2 \u4e2d\u5df2\u4fee\u590d\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<WifiError>\n")),(0,r.kt)("h2",i({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",i({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: WifiError) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: WifiError) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: WifiError) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"Taro.getWifiList"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0}}]);