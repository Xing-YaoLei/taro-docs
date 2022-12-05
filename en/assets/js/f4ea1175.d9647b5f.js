"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[65873],{79874:function(t,e,n){n.d(e,{Zo:function(){return i},kt:function(){return s}});var l=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=l.createContext({}),u=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):k(k({},e),t)),n},i=function(t){var e=u(t.components);return l.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),d=u(n),s=a,m=d["".concat(c,".").concat(s)]||d[s]||p[s]||r;return n?l.createElement(m,k(k({ref:e},i),{},{components:n})):l.createElement(m,k({ref:e},i))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,k=new Array(r);k[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,k[1]=o;for(var u=2;u<r;u++)k[u]=n[u];return l.createElement.apply(null,k)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40455:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return i}});n(93106);var l=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},a.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const k={title:"SocketTask",sidebar_label:"SocketTask"},o=void 0,c={unversionedId:"apis/network/webSocket/SocketTask",id:"version-3.x/apis/network/webSocket/SocketTask",title:"SocketTask",description:"The WebSocket task can be created and returned via the Taro.connectSocket() API.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/network/webSocket/SocketTask.md",sourceDirName:"apis/network/webSocket",slug:"/apis/network/webSocket/SocketTask",permalink:"/taro-docs/en/docs/apis/network/webSocket/SocketTask",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/network/webSocket/SocketTask.md",tags:[],version:"3.x",frontMatter:{title:"SocketTask",sidebar_label:"SocketTask"},sidebar:"API",previous:{title:"closeSocket",permalink:"/taro-docs/en/docs/apis/network/webSocket/closeSocket"},next:{title:"stopLocalServiceDiscovery",permalink:"/taro-docs/en/docs/apis/network/mdns/stopLocalServiceDiscovery"}},u={},i=[{value:"Methods",id:"methods",level:2},{value:"close",id:"close",level:3},{value:"API Support",id:"api-support",level:4},{value:"onClose",id:"onclose",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"onError",id:"onerror",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"onMessage",id:"onmessage",level:3},{value:"API Support",id:"api-support-3",level:4},{value:"onOpen",id:"onopen",level:3},{value:"API Support",id:"api-support-4",level:4},{value:"send",id:"send",level:3},{value:"API Support",id:"api-support-5",level:4},{value:"Parameters",id:"parameters",level:2},{value:"CloseOption",id:"closeoption",level:3},{value:"OnCloseCallback",id:"onclosecallback",level:3},{value:"OnCloseCallbackResult",id:"onclosecallbackresult",level:3},{value:"OnErrorCallback",id:"onerrorcallback",level:3},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",level:3},{value:"OnMessageCallback",id:"onmessagecallback",level:3},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",level:3},{value:"OnOpenCallback",id:"onopencallback",level:3},{value:"OnOpenCallbackResult",id:"onopencallbackresult",level:3},{value:"SendOption",id:"sendoption",level:3},{value:"API Support",id:"api-support-6",level:2}],p={toc:i};function d(t){var{components:e}=t,n=r(t,["components"]);return(0,l.kt)("wrapper",a({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The WebSocket task can be created and returned via the ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.connectSocket()")," API."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/websocket/SocketTask.html"}),"Reference"))),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"socketTaskId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"The current connection ID of the websocket.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"readyState"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"The current connection status of the websocket.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The result of the call to the websocket interface.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"CONNECTING"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"websocket status value: Connecting.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"OPEN"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"websocket status value: Connected.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"CLOSING"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"websocket status value: Closing.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"CLOSED"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"websocket status value: Closed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ws"),(0,l.kt)("td",null,(0,l.kt)("code",null,"WebSocket")),(0,l.kt)("td",null,"Browser websocket instances. (Only H5)")))),(0,l.kt)("h2",a({},{id:"methods"}),"Methods"),(0,l.kt)("h3",a({},{id:"close"}),"close"),(0,l.kt)("p",null,"Disables the WebSocket connection"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/websocket/SocketTask.close.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: CloseOption) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"option"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CloseOption"))))),(0,l.kt)("h4",a({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.close"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",a({},{id:"onclose"}),"onClose"),(0,l.kt)("p",null,"Listens on the event of disabling the WebSocket connection."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/websocket/SocketTask.onClose.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCloseCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnCloseCallback")),(0,l.kt)("td",null,"The callback function for the event of disabling the WebSocket connection.")))),(0,l.kt)("h4",a({},{id:"api-support-1"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.onClose"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",a({},{id:"onerror"}),"onError"),(0,l.kt)("p",null,"Listens on the WebSocket error event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/websocket/SocketTask.onError.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnErrorCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnErrorCallback")),(0,l.kt)("td",null,"The callback function for the WebSocket error event.")))),(0,l.kt)("h4",a({},{id:"api-support-2"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.onError"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",a({},{id:"onmessage"}),"onMessage"),(0,l.kt)("p",null,"Listens on the event of receiving server messages by WebSocket"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/websocket/SocketTask.onMessage.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"<T = any>(callback: OnMessageCallback<T>) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"T")),(0,l.kt)("td",null,"The callback function for the event of receiving server messages by WebSocket.")))),(0,l.kt)("h4",a({},{id:"api-support-3"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.onMessage"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",a({},{id:"onopen"}),"onOpen"),(0,l.kt)("p",null,"Listens on the event of enabling the WebSocket connection."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/websocket/SocketTask.onOpen.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnOpenCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnOpenCallback")),(0,l.kt)("td",null,"The callback function for the event of enabling the WebSocket connection.")))),(0,l.kt)("h4",a({},{id:"api-support-4"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.onOpen"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",a({},{id:"send"}),"send"),(0,l.kt)("p",null,"Sends data over a WebSocket connection"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/websocket/SocketTask.send.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: SendOption) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"option"),(0,l.kt)("td",null,(0,l.kt)("code",null,"SendOption"))))),(0,l.kt)("h4",a({},{id:"api-support-5"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.send"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",a({},{id:"closeoption"}),"CloseOption"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"code"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"A numeric value indicates the status code explaining why the connection has been disabled.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"reason"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"A readable string explaining why the connection has been disabled.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h3",a({},{id:"onclosecallback"}),"OnCloseCallback"),(0,l.kt)("p",null,"The callback function for the event of disabling the WebSocket connection."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnCloseCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnCloseCallbackResult"))))),(0,l.kt)("h3",a({},{id:"onclosecallbackresult"}),"OnCloseCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"code"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"A numeric value indicates the status code explaining why the connection has been disabled.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"reason"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"A readable string explaining why the connection has been disabled.")))),(0,l.kt)("h3",a({},{id:"onerrorcallback"}),"OnErrorCallback"),(0,l.kt)("p",null,"The callback function for the WebSocket error event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnErrorCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnErrorCallbackResult"))))),(0,l.kt)("h3",a({},{id:"onerrorcallbackresult"}),"OnErrorCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Error message")))),(0,l.kt)("h3",a({},{id:"onmessagecallback"}),"OnMessageCallback"),(0,l.kt)("p",null,"The callback function for the event of receiving server messages by WebSocket."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnMessageCallbackResult<T>) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnMessageCallbackResult<T>"))))),(0,l.kt)("h3",a({},{id:"onmessagecallbackresult"}),"OnMessageCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"data"),(0,l.kt)("td",null,(0,l.kt)("code",null,"T")),(0,l.kt)("td",null,"Messages returned by the server")))),(0,l.kt)("h3",a({},{id:"onopencallback"}),"OnOpenCallback"),(0,l.kt)("p",null,"The callback function for the event of enabling the WebSocket connection."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnOpenCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnOpenCallbackResult"))))),(0,l.kt)("h3",a({},{id:"onopencallbackresult"}),"OnOpenCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"header"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Record<string, any>")),(0,l.kt)("td",null,"Connected HTTP response header")))),(0,l.kt)("h3",a({},{id:"sendoption"}),"SendOption"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"data"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | ArrayBuffer")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The data to be sent")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h2",a({},{id:"api-support-6"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.close"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.onClose"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.onError"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.onMessage"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.onOpen"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"SocketTask.send"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);