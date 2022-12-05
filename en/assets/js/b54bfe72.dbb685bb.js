"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[40124],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return f}});var r=a(93106);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(a),f=n,c=s["".concat(o,".").concat(f)]||s[f]||k[f]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},34677:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const i={title:"Taro.request(OBJECT)",sidebar_label:"request"},p=void 0,o={unversionedId:"apis/network/request/request",id:"version-1.x/apis/network/request/request",title:"Taro.request(OBJECT)",description:"\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/network/request/request.md",sourceDirName:"apis/network/request",slug:"/apis/network/request/",permalink:"/taro-docs/en/docs/1.x/apis/network/request/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/network/request/request.md",tags:[],version:"1.x",frontMatter:{title:"Taro.request(OBJECT)",sidebar_label:"request"},sidebar:"version-1.x/API",previous:{title:"downloadFile",permalink:"/taro-docs/en/docs/1.x/apis/network/fileTransfer/downloadFile"},next:{title:"addInterceptor",permalink:"/taro-docs/en/docs/1.x/apis/network/request/addInterceptor"}},d={},m=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u5c0f\u7a0b\u5e8f\u7aef\u4f7f\u7528 RequestTask.abort()",id:"\u5c0f\u7a0b\u5e8f\u7aef\u4f7f\u7528-requesttaskabort",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],k={toc:m};function s(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6682\u4e0d\u652f\u6301\u4f7f\u7528 ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html"}),"RequestTask.onHeadersReceived(function callback)")," \u548c ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html"}),"RequestTask.offHeadersReceived(function callback)")," \u65b9\u6cd5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"url"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u662f"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"data"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Object/String/ArrayBuffer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u8bf7\u6c42\u7684\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"header"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u8bbe\u7f6e\u8bf7\u6c42\u7684 header\uff0cheader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"method"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"GET"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\uff08\u9700\u5927\u5199\uff09\u6709\u6548\u503c\uff1aOPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"dataType"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"json"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5982\u679c\u8bbe\u4e3a json\uff0c\u4f1a\u5c1d\u8bd5\u5bf9\u8fd4\u56de\u7684\u6570\u636e\u505a\u4e00\u6b21 JSON.parse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"responseType"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"text"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u8bbe\u7f6e\u54cd\u5e94\u7684\u6570\u636e\u7c7b\u578b\u3002\u5408\u6cd5\u503c\uff1atext\u3001arraybuffer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"success"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"fail"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"complete"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"H5 \u7aef\u9644\u52a0\u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"jsonp"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String/Boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u4f7f\u7528 jsonp\uff0c\u4e14\u4f7f\u7528\u6b64\u503c\u4f5c\u4e3a\u56de\u8c03\u51fd\u6570\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"jsonpCache"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"false"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"jsonp \u8bf7\u6c42 url \u662f\u5426\u9700\u8981\u88ab\u7f13\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"mode"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"same-origin"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u3002\u6709\u6548\u503c\uff1ano-cors, cors, same-origin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"credentials"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"omit"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u662f\u5426\u643a\u5e26 Cookie\u3002\u6709\u6548\u503c\uff1ainclude, same-origin, omit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"cache"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"default"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u7f13\u5b58\u6a21\u5f0f\u3002\u6709\u6548\u503c\uff1adefault, no-cache, reload, force-cache, only-if-cached")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"success \u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"data"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Object/String/ArrayBuffer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"statusCode"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"header"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP Response Header")))),(0,r.kt)("h2",n({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.request({\n  url: 'http://localhost:8080/test',\n  data: {\n    foo: 'foo',\n    bar: 10\n  },\n  header: {\n    'content-type': 'application/json'\n  }\n})\n  .then(res => console.log(res.data))\n")),(0,r.kt)("h2",n({},{id:"\u5c0f\u7a0b\u5e8f\u7aef\u4f7f\u7528-requesttaskabort"}),"\u5c0f\u7a0b\u5e8f\u7aef\u4f7f\u7528 RequestTask.abort()"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-jsx"}),"const requestTask = Taro.request({\n  url: 'test.php', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  data: {\n    x: '' ,\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json'\n  },\n  success (res) {\n    console.log(res.data)\n  }\n})\nrequestTask.abort() // \u53d6\u6d88\u8bf7\u6c42\u4efb\u52a1\n")),(0,r.kt)("h2",n({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5934\u6761\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"QQ \u8f7b\u5e94\u7528"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"Taro.request"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);