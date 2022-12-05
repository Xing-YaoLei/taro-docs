"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15186],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),i=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},c=function(t){var e=i(t.components);return l.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),s=i(n),p=r,m=s["".concat(d,".").concat(p)]||s[p]||k[p]||o;return n?l.createElement(m,u(u({ref:e},c),{},{components:n})):l.createElement(m,u({ref:e},c))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,u=new Array(o);u[0]=s;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=t,a.mdxType="string"==typeof t?t:r,u[1]=a;for(var i=2;i<o;i++)u[i]=n[i];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66450:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"Taro.getSystemInfoSync()",sidebar_label:"getSystemInfoSync"},a=void 0,d={unversionedId:"apis/base/system/getSystemInfoSync",id:"version-2.x/apis/base/system/getSystemInfoSync",title:"Taro.getSystemInfoSync()",description:"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u540c\u6b65\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-2.x/apis/base/system/getSystemInfoSync.md",sourceDirName:"apis/base/system",slug:"/apis/base/system/getSystemInfoSync",permalink:"/taro-docs/docs/2.x/apis/base/system/getSystemInfoSync",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/base/system/getSystemInfoSync.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getSystemInfoSync()",sidebar_label:"getSystemInfoSync"},sidebar:"version-2.x/API",previous:{title:"getSystemInfo",permalink:"/taro-docs/docs/2.x/apis/base/system/getSystemInfo"},next:{title:"getUpdateManager",permalink:"/taro-docs/docs/2.x/apis/base/update/getUpdateManager"}},i={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Result",id:"result",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],k={toc:c};function s(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",r({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u540c\u6b65\u63a5\u53e3\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"() => Result\n")),(0,l.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,l.kt)("h3",r({},{id:"result"}),"Result"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a",(0,l.kt)("strong",{parentName:"p"},"H5")," \u7aef\u4e0d\u652f\u6301 version\u3001statusBarHeight\u3001fontSizeSetting\u3001SDKVersion"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"SDKVersion"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"albumAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u76f8\u518c\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"benchmarkLevel"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u8bbe\u5907\u6027\u80fd\u7b49\u7ea7\uff08\u4ec5Android\u5c0f\u6e38\u620f\uff09\u3002\u53d6\u503c\u4e3a\uff1a-2 \u6216 0\uff08\u8be5\u8bbe\u5907\u65e0\u6cd5\u8fd0\u884c\u5c0f\u6e38\u620f\uff09\uff0c-1\uff08\u6027\u80fd\u672a\u77e5\uff09\uff0c>=1\uff08\u8bbe\u5907\u6027\u80fd\u503c\uff0c\u8be5\u503c\u8d8a\u9ad8\uff0c\u8bbe\u5907\u6027\u80fd\u8d8a\u597d\uff0c\u76ee\u524d\u6700\u9ad8\u4e0d\u523050\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bluetoothEnabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u84dd\u7259\u7684\u7cfb\u7edf\u5f00\u5173")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"brand"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u8bbe\u5907\u54c1\u724c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cameraAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u6444\u50cf\u5934\u7684\u5f00\u5173")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fontSizeSetting"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u7528\u6237\u5b57\u4f53\u5927\u5c0f\uff08\u5355\u4f4dpx\uff09\u3002\u4ee5\u5fae\u4fe1\u5ba2\u6237\u7aef\u300c\u6211-\u8bbe\u7f6e-\u901a\u7528-\u5b57\u4f53\u5927\u5c0f\u300d\u4e2d\u7684\u8bbe\u7f6e\u4e3a\u51c6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"language"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"locationAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u5b9a\u4f4d\u7684\u5f00\u5173")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"locationEnabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5730\u7406\u4f4d\u7f6e\u7684\u7cfb\u7edf\u5f00\u5173")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"microphoneAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u9ea6\u514b\u98ce\u7684\u5f00\u5173")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"model"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u8bbe\u5907\u578b\u53f7")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notificationAlertAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u63d0\u9192\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notificationAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u7684\u5f00\u5173")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notificationBadgeAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u6807\u8bb0\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notificationSoundAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u58f0\u97f3\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"pixelRatio"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u8bbe\u5907\u50cf\u7d20\u6bd4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"platform"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u5ba2\u6237\u7aef\u5e73\u53f0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"safeArea"),(0,l.kt)("td",null,(0,l.kt)("code",null,"SafeAreaResult")),(0,l.kt)("td",null,"\u5728\u7ad6\u5c4f\u6b63\u65b9\u5411\u4e0b\u7684\u5b89\u5168\u533a\u57df")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"screenHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u5c4f\u5e55\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"screenWidth"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u5c4f\u5e55\u5bbd\u5ea6\uff0c\u5355\u4f4dpx")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"statusBarHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"system"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u64cd\u4f5c\u7cfb\u7edf\u53ca\u7248\u672c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"version"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u5fae\u4fe1\u7248\u672c\u53f7")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"wifiEnabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"Wi-Fi \u7684\u7cfb\u7edf\u5f00\u5173")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"windowHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5355\u4f4dpx")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"windowWidth"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6\uff0c\u5355\u4f4dpx")))),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"try {\n  const res = Taro.getSystemInfoSync()\n  console.log(res.model)\n  console.log(res.pixelRatio)\n  console.log(res.windowWidth)\n  console.log(res.windowHeight)\n  console.log(res.language)\n  console.log(res.version)\n  console.log(res.platform)\n} catch (e) {\n  // Do something when catch error\n}\n")),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.getSystemInfoSync"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);