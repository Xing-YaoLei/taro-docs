"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[74737],{79874:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return s}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),i=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):k(k({},e),t)),n},o=function(t){var e=i(t.components);return l.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),p=i(n),s=r,m=p["".concat(d,".").concat(s)]||p[s]||c[s]||a;return n?l.createElement(m,k(k({ref:e},o),{},{components:n})):l.createElement(m,k({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,k=new Array(a);k[0]=p;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u.mdxType="string"==typeof t?t:r,k[1]=u;for(var i=2;i<a;i++)k[i]=n[i];return l.createElement.apply(null,k)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95008:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return o}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const k={title:"LivePlayer",sidebar_label:"LivePlayer"},u=void 0,d={unversionedId:"components/media/live-player",id:"version-2.x/components/media/live-player",title:"LivePlayer",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e\u3002\u76f8\u5173api\uff1aTaro.createLivePlayerContext",source:"@site/versioned_docs/version-2.x/components/media/live-player.md",sourceDirName:"components/media",slug:"/components/media/live-player",permalink:"/taro-docs/en/docs/2.x/components/media/live-player",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/components/media/live-player.md",tags:[],version:"2.x",frontMatter:{title:"LivePlayer",sidebar_label:"LivePlayer"}},i={},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"LivePlayerProps",id:"liveplayerprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"mode",id:"mode",level:3},{value:"orientation",id:"orientation",level:3},{value:"objectFit",id:"objectfit",level:3},{value:"soundMode",id:"soundmode",level:3},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",level:3},{value:"onFullScreenChangeEventDetail",id:"onfullscreenchangeeventdetail",level:3},{value:"onNetStatusEventDetail",id:"onnetstatuseventdetail",level:3},{value:"status",id:"status",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:2}],c={toc:o};function p(t){var{components:e}=t,n=a(t,["components"]);return(0,l.kt)("wrapper",r({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e\u3002\u76f8\u5173api\uff1aTaro.createLivePlayerContext"),(0,l.kt)("p",null,"\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u201c\u8bbe\u7f6e\u201d-\u201c\u63a5\u53e3\u8bbe\u7f6e\u201d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"ComponentType<LivePlayerProps>\n")),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <LivePlayer src='url' mode='live' autoplay  />\n    )\n  }\n}\n")),(0,l.kt)("h2",r({},{id:"liveplayerprops"}),"LivePlayerProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u97f3\u89c6\u9891\u5730\u5740\u3002\u76ee\u524d\u4ec5\u652f\u6301 flv, rtmp \u683c\u5f0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"live" | "RTC"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"live"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6a21\u5f0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoplay"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u81ea\u52a8\u64ad\u653e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"muted"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u9759\u97f3")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"orientation"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"vertical" | "horizontal"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"vertical"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u753b\u9762\u65b9\u5411")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"objectFit"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"contain" | "fillCrop"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"contain"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u586b\u5145\u6a21\u5f0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"backgroundMute"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u662f\u5426\u9759\u97f3\uff08\u5df2\u5e9f\u5f03\uff0c\u9ed8\u8ba4\u9000\u53f0\u9759\u97f3\uff09",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"minCache"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"1")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8fdb\u6700\u5c0f\u7f13\u51b2\u533a\uff0c\u5355\u4f4ds")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"maxCache"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"3")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8fdb\u6700\u5c0f\u7f13\u51b2\u533a\uff0c\u5355\u4f4ds")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"soundMode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"speaker" | "ear"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"speaker"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u58f0\u97f3\u8f93\u51fa\u65b9\u5f0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoPauseIfNavigate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5f53\u8df3\u8f6c\u5230\u672c\u5c0f\u7a0b\u5e8f\u7684\u5176\u4ed6\u9875\u9762\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u6682\u505c\u672c\u9875\u9762\u7684\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoPauseIfOpenNavigate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5f53\u8df3\u8f6c\u5230\u5176\u5b83\u5fae\u4fe1\u539f\u751f\u9875\u9762\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u6682\u505c\u672c\u9875\u9762\u7684\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onStateChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u64ad\u653e\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = ","{code}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onFullScreenChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onFullScreenChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5168\u5c4f\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = ","{direction, fullScreen}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onNetstatus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onNetStatusEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f51\u7edc\u72b6\u6001\u901a\u77e5\uff0cdetail = ","{info}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onAudioVolumenotify"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<",">")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u64ad\u653e\u97f3\u91cf\u5927\u5c0f\u901a\u77e5\uff0cdetail = ","{}")))),(0,l.kt)("h3",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.src"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.mode"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoplay"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.muted"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.orientation"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.objectFit"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.backgroundMute"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.minCache"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.maxCache"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.soundMode"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoPauseIfNavigate"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoPauseIfOpenNavigate"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.onStateChange"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.onFullScreenChange"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.onNetstatus"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayerProps.onAudioVolumenotify"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"mode"}),"mode"),(0,l.kt)("p",null,"mode \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"live"),(0,l.kt)("td",null,"\u76f4\u64ad")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"RTC"),(0,l.kt)("td",null,"\u5b9e\u65f6\u901a\u8bdd\uff0c\u8be5\u6a21\u5f0f\u65f6\u5ef6\u66f4\u4f4e")))),(0,l.kt)("h3",r({},{id:"orientation"}),"orientation"),(0,l.kt)("p",null,"orientation \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"vertical"),(0,l.kt)("td",null,"\u7ad6\u76f4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"horizontal"),(0,l.kt)("td",null,"\u6c34\u5e73")))),(0,l.kt)("h3",r({},{id:"objectfit"}),"objectFit"),(0,l.kt)("p",null,"objectFit \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"contain"),(0,l.kt)("td",null,"\u56fe\u50cf\u957f\u8fb9\u586b\u6ee1\u5c4f\u5e55\uff0c\u77ed\u8fb9\u533a\u57df\u4f1a\u88ab\u586b\u5145\u2fca\u2f8a")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fillCrop"),(0,l.kt)("td",null,"\u56fe\u50cf\u94fa\u6ee1\u5c4f\u5e55\uff0c\u8d85\u51fa\u663e\u793a\u533a\u57df\u7684\u90e8\u5206\u5c06\u88ab\u622a\u6389")))),(0,l.kt)("h3",r({},{id:"soundmode"}),"soundMode"),(0,l.kt)("p",null,"soundMode \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"speaker"),(0,l.kt)("td",null,"\u626c\u58f0\u5668")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ear"),(0,l.kt)("td",null,"\u542c\u7b52")))),(0,l.kt)("h3",r({},{id:"onstatechangeeventdetail"}),"onStateChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"code"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u72b6\u6001\u7801")))),(0,l.kt)("h3",r({},{id:"onfullscreenchangeeventdetail"}),"onFullScreenChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"direction"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u65b9\u5411")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fullScreen"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number | boolean")),(0,l.kt)("td",null,"\u5168\u5c4f")))),(0,l.kt)("h3",r({},{id:"onnetstatuseventdetail"}),"onNetStatusEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"info"),(0,l.kt)("td",null,(0,l.kt)("code",null,"netStatus"))))),(0,l.kt)("h3",r({},{id:"status"}),"status"),(0,l.kt)("p",null,"\u72b6\u6001\u7801"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"2001"),(0,l.kt)("td",null,"\u5df2\u7ecf\u8fde\u63a5\u670d\u52a1\u5668")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2002"),(0,l.kt)("td",null,"\u5df2\u7ecf\u8fde\u63a5 RTMP \u670d\u52a1\u5668,\u5f00\u59cb\u62c9\u6d41")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2003"),(0,l.kt)("td",null,"\u7f51\u7edc\u63a5\u6536\u5230\u9996\u4e2a\u89c6\u9891\u6570\u636e\u5305(IDR)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2004"),(0,l.kt)("td",null,"\u89c6\u9891\u64ad\u653e\u5f00\u59cb")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2005"),(0,l.kt)("td",null,"\u89c6\u9891\u64ad\u653e\u8fdb\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2006"),(0,l.kt)("td",null,"\u89c6\u9891\u64ad\u653e\u7ed3\u675f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2007"),(0,l.kt)("td",null,"\u89c6\u9891\u64ad\u653eLoading")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2008"),(0,l.kt)("td",null,"\u89e3\u7801\u5668\u542f\u52a8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2009"),(0,l.kt)("td",null,"\u89c6\u9891\u5206\u8fa8\u7387\u6539\u53d8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"-2301"),(0,l.kt)("td",null,"\u7f51\u7edc\u65ad\u8fde\uff0c\u4e14\u7ecf\u591a\u6b21\u91cd\u8fde\u62a2\u6551\u65e0\u6548\uff0c\u66f4\u591a\u91cd\u8bd5\u8bf7\u81ea\u884c\u91cd\u542f\u64ad\u653e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"-2302"),(0,l.kt)("td",null,"\u83b7\u53d6\u52a0\u901f\u62c9\u6d41\u5730\u5740\u5931\u8d25")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2101"),(0,l.kt)("td",null,"\u5f53\u524d\u89c6\u9891\u5e27\u89e3\u7801\u5931\u8d25")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2102"),(0,l.kt)("td",null,"\u5f53\u524d\u97f3\u9891\u5e27\u89e3\u7801\u5931\u8d25")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2103"),(0,l.kt)("td",null,"\u7f51\u7edc\u65ad\u8fde, \u5df2\u542f\u52a8\u81ea\u52a8\u91cd\u8fde")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2104"),(0,l.kt)("td",null,"\u7f51\u7edc\u6765\u5305\u4e0d\u7a33\uff1a\u53ef\u80fd\u662f\u4e0b\u884c\u5e26\u5bbd\u4e0d\u8db3\uff0c\u6216\u7531\u4e8e\u4e3b\u64ad\u7aef\u51fa\u6d41\u4e0d\u5747\u5300")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2105"),(0,l.kt)("td",null,"\u5f53\u524d\u89c6\u9891\u64ad\u653e\u51fa\u73b0\u5361\u987f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2106"),(0,l.kt)("td",null,"\u786c\u89e3\u542f\u52a8\u5931\u8d25\uff0c\u91c7\u7528\u8f6f\u89e3")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2107"),(0,l.kt)("td",null,"\u5f53\u524d\u89c6\u9891\u5e27\u4e0d\u8fde\u7eed\uff0c\u53ef\u80fd\u4e22\u5e27")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2108"),(0,l.kt)("td",null,"\u5f53\u524d\u6d41\u786c\u89e3\u7b2c\u4e00\u4e2aI\u5e27\u5931\u8d25\uff0cSDK\u81ea\u52a8\u5207\u8f6f\u89e3")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3001"),(0,l.kt)("td",null,"RTMP -DNS\u89e3\u6790\u5931\u8d25")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3002"),(0,l.kt)("td",null,"RTMP\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3003"),(0,l.kt)("td",null,"RTMP\u670d\u52a1\u5668\u63e1\u624b\u5931\u8d25")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3005"),(0,l.kt)("td",null,"RTMP \u8bfb/\u5199\u5931\u8d25")))),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePlayer"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);