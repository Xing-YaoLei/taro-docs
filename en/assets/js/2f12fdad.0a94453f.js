"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[90506],{79874:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return s}});var l=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=l.createContext({}),m=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},o=function(t){var e=m(t.components);return l.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,p=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=m(a),s=r,c=d["".concat(p,".").concat(s)]||d[s]||k[s]||n;return a?l.createElement(c,u(u({ref:e},o),{},{components:a})):l.createElement(c,u({ref:e},o))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,u=new Array(n);u[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,u[1]=i;for(var m=2;m<n;m++)u[m]=a[m];return l.createElement.apply(null,u)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88556:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return o}});a(93106);var l=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t},r.apply(this,arguments)}function n(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const u={title:"\u67e5\u8be2\u76f8\u5173 API"},i=void 0,p={unversionedId:"test-utils/queries",id:"test-utils/queries",title:"\u67e5\u8be2\u76f8\u5173 API",description:"\u7c7b\u578b\u8bf4\u660e",source:"@site/docs/test-utils/queries.md",sourceDirName:"test-utils",slug:"/test-utils/queries",permalink:"/taro-docs/en/docs/next/test-utils/queries",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/test-utils/queries.md",tags:[],version:"current",frontMatter:{title:"\u67e5\u8be2\u76f8\u5173 API"},sidebar:"docs",previous:{title:"\u6e32\u67d3\u76f8\u5173 API",permalink:"/taro-docs/en/docs/next/test-utils/render"},next:{title:"\u4e8b\u4ef6\u76f8\u5173 API",permalink:"/taro-docs/en/docs/next/test-utils/fire-event"}},m={},o=[{value:"\u7c7b\u578b\u8bf4\u660e",id:"\u7c7b\u578b\u8bf4\u660e",level:2},{value:"\u6309\u7167\u9009\u62e9\u5668\u67e5\u8be2",id:"\u6309\u7167\u9009\u62e9\u5668\u67e5\u8be2",level:2},{value:"querySelector",id:"queryselector",level:3},{value:"querySelectorAll",id:"queryselectorall",level:3},{value:"waitForQuerySelector",id:"waitforqueryselector",level:3},{value:"waitForQuerySelectorAll",id:"waitforqueryselectorall",level:3},{value:"\u6309\u7167\u6587\u672c\u67e5\u8be2",id:"\u6309\u7167\u6587\u672c\u67e5\u8be2",level:2},{value:"queryByText",id:"querybytext",level:3},{value:"queryByTextAll",id:"querybytextall",level:3},{value:"waitForQueryByText",id:"waitforquerybytext",level:3},{value:"waitForQueryAllByText",id:"waitforqueryallbytext",level:3},{value:"\u6309\u7167 Placeholder \u67e5\u8be2",id:"\u6309\u7167-placeholder-\u67e5\u8be2",level:2},{value:"queryByPlaceholder",id:"querybyplaceholder",level:3},{value:"queryAllByPlaceholder",id:"queryallbyplaceholder",level:3},{value:"waitForQueryByPlaceholder",id:"waitforquerybyplaceholder",level:3},{value:"waitForQueryAllByPlaceholder",id:"waitforqueryallbyplaceholder",level:3},{value:"\u6309\u7167\u5c5e\u6027\u67e5\u8be2",id:"\u6309\u7167\u5c5e\u6027\u67e5\u8be2",level:2},{value:"queryByAttribute",id:"querybyattribute",level:3},{value:"queryAllByAttribute",id:"queryallbyattribute",level:3},{value:"waitForQueryByAttribute",id:"waitforquerybyattribute",level:3},{value:"waitForQueryAllByAttribute",id:"waitforqueryallbyattribute",level:3}],k={toc:o};function d(t){var{components:e}=t,a=n(t,["components"]);return(0,l.kt)("wrapper",r({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b\u8bf4\u660e"}),"\u7c7b\u578b\u8bf4\u660e"),(0,l.kt)("p",null,"TWaitforParams\uff1a\n| \u53c2\u6570 | \u7c7b\u578b | \u5fc5\u987b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| ----------- | ----------- | -------------- |-------------- |-------------- |\n| container | HTMLElement | | | window.document | \u67e5\u8be2\u7684 root \u8282\u70b9 |\n| timeout | number | | 1000 | \u5931\u6548\u65f6\u95f4 |\n| interval | number | | 50 | \u67e5\u8be2\u95f4\u9694 |\n| mutationObserverOptions | MutationObserverInit | | {subtree: true, childList: true, attributes: true, characterData: true }| \u76d1\u542c\u5668\u53c2\u6570 |"),(0,l.kt)("h2",r({},{id:"\u6309\u7167\u9009\u62e9\u5668\u67e5\u8be2"}),"\u6309\u7167\u9009\u62e9\u5668\u67e5\u8be2"),(0,l.kt)("h3",r({},{id:"queryselector"}),"querySelector"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"function querySelector(selectors: string): HTMLElement\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"selectors"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\uff0c\u540c docuemt.querySelector \u4e00\u81f4")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const btns = testUtils.querySelectorAll('.btns')\n")),(0,l.kt)("h3",r({},{id:"queryselectorall"}),"querySelectorAll"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"function querySelectorAll(selectors: string): HTMLElement[]\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"selectors"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\uff0c\u540c docuemt.querySelectorAll \u4e00\u81f4")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const btns = testUtils.querySelectorAll('.btns')\n")),(0,l.kt)("h3",r({},{id:"waitforqueryselector"}),"waitForQuerySelector"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"async function waitForQuerySelector(selectors: string, params?: TParams): Promise<HTMLElement>\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"selectors"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\uff0c\u540c docuemt.querySelector \u4e00\u81f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"params"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"TWaitforParams"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\uff1a\u89c1 TWaitforParams \u8bf4\u660e")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const btn = await testUtils.waitForQuerySelector('.async-btn')\n")),(0,l.kt)("h3",r({},{id:"waitforqueryselectorall"}),"waitForQuerySelectorAll"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"async function waitForQuerySelectorAll(selectors: string, params?: TParams): Promise<HTMLElement[]>\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"selectors"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\uff0c\u540c docuemt.querySelectorAll \u4e00\u81f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"params"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"TWaitforParams"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\uff1a\u89c1 TWaitforParams \u8bf4\u660e")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const btns = await testUtils.waitForQuerySelectorAll('.async-btns')\n")),(0,l.kt)("h2",r({},{id:"\u6309\u7167\u6587\u672c\u67e5\u8be2"}),"\u6309\u7167\u6587\u672c\u67e5\u8be2"),(0,l.kt)("h3",r({},{id:"querybytext"}),"queryByText"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"function queryByText(text: string, selector?: string): HTMLElement\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u672c\u5185\u5bb9\uff0c\u90e8\u5206\u5339\u914d\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"selector"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\uff0c\u540c docuemt.querySelector \u4e00\u81f4")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// <Text>Hello World!!!</Text>\nconst textView = testUtils.queryByText('Hello World')\n")),(0,l.kt)("h3",r({},{id:"querybytextall"}),"queryByTextAll"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"function queryAllByText(text: string, selector?: string): HTMLElement[]\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u672c\u5185\u5bb9\uff0c\u90e8\u5206\u5339\u914d\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"selector"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\uff0c\u540c docuemt.querySelector \u4e00\u81f4")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// <Text>Hello World!!</Text>\n// <View>Hello World!!!</View>\nconst textViews = testUtils.queryAllByText('Hello World')\n")),(0,l.kt)("h3",r({},{id:"waitforquerybytext"}),"waitForQueryByText"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"async function waitForQueryByText(text: string, selector?: string, params?: TWaitforParams): HTMLElement\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u672c\u5185\u5bb9\uff0c\u90e8\u5206\u5339\u914d\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"selector"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\uff0c\u540c docuemt.querySelector \u4e00\u81f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"params"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"TWaitforParams"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\uff1a\u89c1 TWaitforParams \u8bf4\u660e")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),'// <Text>Hello World!!!</Text>\nconst textView = async testUtils.waitForQueryByText("Hello World");\n')),(0,l.kt)("h3",r({},{id:"waitforqueryallbytext"}),"waitForQueryAllByText"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"async function waitForQueryAllByText(text: string, selector?: string, params?: TWaitforParams): HTMLElement[]\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u672c\u5185\u5bb9\uff0c\u90e8\u5206\u5339\u914d\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"selector"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\uff0c\u540c docuemt.querySelector \u4e00\u81f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"params"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"TWaitforParams"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\uff1a\u89c1 TWaitforParams \u8bf4\u660e")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),'// <Text>Hello World!!</Text>\n// <View>Hello World!!!</View>\nconst textViews = async testUtils.waitForQueryAllByText("Hello World");\n')),(0,l.kt)("h2",r({},{id:"\u6309\u7167-placeholder-\u67e5\u8be2"}),"\u6309\u7167 Placeholder \u67e5\u8be2"),(0,l.kt)("h3",r({},{id:"querybyplaceholder"}),"queryByPlaceholder"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"function queryByPlaceholder(text: string): HTMLElement\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"placeholder \u5185\u5bb9")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// <input placeholder=\"hello\" />\nconst input = testUtils.queryByPlaceholder('hello')\n")),(0,l.kt)("h3",r({},{id:"queryallbyplaceholder"}),"queryAllByPlaceholder"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"function queryAllByPlaceholder(text: string): HTMLElement[]\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"placeholder \u5185\u5bb9")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),'// <input placeholder="hello" />\n// <input placeholder="hello" />\nconst inputs = testUtils.queryAllByPlaceholder(\'hello\')\n')),(0,l.kt)("h3",r({},{id:"waitforquerybyplaceholder"}),"waitForQueryByPlaceholder"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"async function waitForQueryByPlaceholder(text: string, params?: TParams): Promise<HTMLElement>\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"placeholder \u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"params"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"TWaitforParams"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\uff1a\u89c1 TWaitforParams \u8bf4\u660e")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// <input placeholder=\"async-placeholde\" />\nconst input = await testUtils.waitForQueryByPlaceholder('async-placeholder')\n")),(0,l.kt)("h3",r({},{id:"waitforqueryallbyplaceholder"}),"waitForQueryAllByPlaceholder"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"async function waitForQueryAllByPlaceholder(text: string, params?: TParams): Promise<HTMLElement[]>\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"placeholder \u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"params"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"TWaitforParams"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\uff1a\u89c1 TWaitforParams \u8bf4\u660e")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),'// <input placeholder="async-placeholde" />\n// <input placeholder="async-placeholde" />\nconst inputs = await testUtils.waitForQueryAllByPlaceholder(\'async-placeholder\')\n')),(0,l.kt)("h2",r({},{id:"\u6309\u7167\u5c5e\u6027\u67e5\u8be2"}),"\u6309\u7167\u5c5e\u6027\u67e5\u8be2"),(0,l.kt)("h3",r({},{id:"querybyattribute"}),"queryByAttribute"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"function queryByAttribute(attr: string, value: any): HTMLElement\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"attr"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u5c5e\u6027 key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"value"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"any"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u5c5e\u6027 value")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// <div key=\"value\" />\nconst view = testUtils.queryByAttribute('key', 'value')\n")),(0,l.kt)("h3",r({},{id:"queryallbyattribute"}),"queryAllByAttribute"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"function queryAllByAttribute(attr: string, value: any): HTMLElement[]\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"attr"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u5c5e\u6027 key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"value"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"any"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u5c5e\u6027 value")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// <div key=\"value\" />\n// <div key=\"value\" />\nconst view = testUtils.queryAllByAttribute('key', 'value')\n")),(0,l.kt)("h3",r({},{id:"waitforquerybyattribute"}),"waitForQueryByAttribute"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"async function waitForQueryByAttribute(attr: string, value: string, params?: TParams): Promise<HTMLElement>\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"attr"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u5c5e\u6027 key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"value"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"any"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u5c5e\u6027 value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"params"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"TWaitforParams"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\uff1a\u89c1 TWaitforParams \u8bf4\u660e")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// <div key=\"value\" />\nconst view = await testUtils.waitForQueryByAttribute('key', 'value')\n")),(0,l.kt)("h3",r({},{id:"waitforqueryallbyattribute"}),"waitForQueryAllByAttribute"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"async function waitForQueryAllByAttribute(attr: string, value: string, params?: TParams): Promise<HTMLElement[]>\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u987b"),(0,l.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"attr"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u5c5e\u6027 key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"value"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"any"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u662f"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u5c5e\u6027 value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:null}),"params"),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"TWaitforParams"),(0,l.kt)("td",r({parentName:"tr"},{align:null})),(0,l.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\uff1a\u89c1 TWaitforParams \u8bf4\u660e")))),(0,l.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// <div key=\"value\" />\n// <div key=\"value\" />\nconst inputs = await testUtils.waitForQueryAllByAttribute('key', 'value')\n")))}d.isMDXComponent=!0}}]);