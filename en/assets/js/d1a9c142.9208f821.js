"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[79755],{79874:function(t,e,a){a.d(e,{Zo:function(){return g},kt:function(){return k}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},g=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,g=i(t,["components","mdxType","originalType","parentName"]),d=u(a),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return a?n.createElement(m,o(o({ref:e},g),{},{components:a})):n.createElement(m,o({ref:e},g))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11735:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return g}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={title:"LogManager",sidebar_label:"LogManager"},i=void 0,p={unversionedId:"apis/base/debug/LogManager",id:"version-2.x/apis/base/debug/LogManager",title:"LogManager",description:"\u65e5\u5fd7\u7ba1\u7406\u5668\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7 Taro.getLogManager \u83b7\u53d6\u3002",source:"@site/versioned_docs/version-2.x/apis/base/debug/LogManager.md",sourceDirName:"apis/base/debug",slug:"/apis/base/debug/LogManager",permalink:"/taro-docs/en/docs/2.x/apis/base/debug/LogManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/base/debug/LogManager.md",tags:[],version:"2.x",frontMatter:{title:"LogManager",sidebar_label:"LogManager"},sidebar:"version-2.x/API",previous:{title:"getLogManager",permalink:"/taro-docs/en/docs/2.x/apis/base/debug/getLogManager"},next:{title:"RealtimeLogManager",permalink:"/taro-docs/en/docs/2.x/apis/base/debug/RealtimeLogManager"}},u={},g=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"debug",id:"debug",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:4},{value:"info",id:"info",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:4},{value:"log",id:"log",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-2",level:4},{value:"warn",id:"warn",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-3",level:4},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-4",level:2}],c={toc:g};function d(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u65e5\u5fd7\u7ba1\u7406\u5668\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7 Taro.getLogManager \u83b7\u53d6\u3002"),(0,n.kt)("p",null,'\u4f7f\u7528\u8bf4\u660e\n\u6700\u591a\u4fdd\u5b585M\u7684\u65e5\u5fd7\u5185\u5bb9\uff0c\u8d85\u8fc75M\u540e\uff0c\u65e7\u7684\u65e5\u5fd7\u5185\u5bb9\u4f1a\u88ab\u5220\u9664\u3002\n\u5bf9\u4e8e\u5c0f\u7a0b\u5e8f\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 button \u7ec4\u4ef6\u7684 open-type="feedback" \u6765\u4e0a\u4f20\u6253\u5370\u7684\u65e5\u5fd7\u3002\n\u5bf9\u4e8e\u5c0f\u6e38\u620f\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 Taro.createFeedbackButton \u6765\u521b\u5efa\u4e0a\u4f20\u6253\u5370\u7684\u65e5\u5fd7\u7684\u6309\u94ae\u3002\n\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u5de6\u4fa7\u83dc\u5355\u201c\u53cd\u9988\u7ba1\u7406\u201d\u9875\u9762\u67e5\u770b\u76f8\u5173\u6253\u5370\u65e5\u5fd7\u3002'),(0,n.kt)("p",null,"\u57fa\u7840\u5e93\u9ed8\u8ba4\u4f1a\u628a App\u3001Page \u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c wx \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u51fd\u6570\u8c03\u7528\u5199\u5165\u65e5\u5fd7\u3002"),(0,n.kt)("h2",r({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",r({},{id:"debug"}),"debug"),(0,n.kt)("p",null,"\u5199 debug \u65e5\u5fd7"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.debug.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(...args: any[]) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"args"),(0,n.kt)("td",null,(0,n.kt)("code",null,"any[]")),(0,n.kt)("td",null,"\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u7684\u603b\u5927\u5c0f\u4e0d\u8d85\u8fc7100Kb")))),(0,n.kt)("h4",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.debug"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",r({},{id:"info"}),"info"),(0,n.kt)("p",null,"\u5199 info \u65e5\u5fd7"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.info.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(...args: any[]) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"args"),(0,n.kt)("td",null,(0,n.kt)("code",null,"any[]")),(0,n.kt)("td",null,"\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u7684\u603b\u5927\u5c0f\u4e0d\u8d85\u8fc7100Kb")))),(0,n.kt)("h4",r({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.info"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",r({},{id:"log"}),"log"),(0,n.kt)("p",null,"\u5199 log \u65e5\u5fd7"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.log.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(...args: any[]) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"args"),(0,n.kt)("td",null,(0,n.kt)("code",null,"any[]")),(0,n.kt)("td",null,"\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u7684\u603b\u5927\u5c0f\u4e0d\u8d85\u8fc7100Kb")))),(0,n.kt)("h4",r({},{id:"api-\u652f\u6301\u5ea6-2"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.log"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",r({},{id:"warn"}),"warn"),(0,n.kt)("p",null,"\u5199 warn \u65e5\u5fd7"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.warn.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(...args: any[]) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"args"),(0,n.kt)("td",null,(0,n.kt)("code",null,"any[]")),(0,n.kt)("td",null,"\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u7684\u603b\u5927\u5c0f\u4e0d\u8d85\u8fc7100Kb")))),(0,n.kt)("h4",r({},{id:"api-\u652f\u6301\u5ea6-3"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.warn"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6-4"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.debug"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.info"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.log"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.warn"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);