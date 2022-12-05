"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[43073],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(93106);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),c=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(a.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,u=t.originalType,a=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(a,".").concat(m)]||s[m]||d[m]||u;return n?r.createElement(f,l(l({ref:e},p),{},{components:n})):r.createElement(f,l({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var u=n.length,l=new Array(u);l[0]=s;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<u;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},73681:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return p}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const l={title:"Taro.getMenuButtonBoundingClientRect()",sidebar_label:"getMenuButtonBoundingClientRect"},i=void 0,a={unversionedId:"apis/ui/menu/getMenuButtonBoundingClientRect",id:"apis/ui/menu/getMenuButtonBoundingClientRect",title:"Taro.getMenuButtonBoundingClientRect()",description:"Gets the location of the menu button (the Mini Program control button in the upper right corner). The top left corner of the screen is the origin.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/ui/menu/getMenuButtonBoundingClientRect.md",sourceDirName:"apis/ui/menu",slug:"/apis/ui/menu/getMenuButtonBoundingClientRect",permalink:"/taro-docs/en/docs/next/apis/ui/menu/getMenuButtonBoundingClientRect",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/ui/menu/getMenuButtonBoundingClientRect.md",tags:[],version:"current",frontMatter:{title:"Taro.getMenuButtonBoundingClientRect()",sidebar_label:"getMenuButtonBoundingClientRect"},sidebar:"API",previous:{title:"nextTick",permalink:"/taro-docs/en/docs/next/apis/ui/custom-component/nextTick"},next:{title:"setWindowSize",permalink:"/taro-docs/en/docs/next/apis/ui/window/setWindowSize"}},c={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Rect",id:"rect",level:3},{value:"API Support",id:"api-support",level:2}],d={toc:p};function s(t){var{components:e}=t,n=u(t,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gets the location of the menu button (the Mini Program control button in the upper right corner). The top left corner of the screen is the origin."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"() => Rect\n")),(0,r.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",o({},{id:"rect"}),"Rect"),(0,r.kt)("p",null,"The location of the menu button"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"width"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Width (in px)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Height (in px)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"top"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The coordinate of the upper boundary (in px)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"right"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The coordinate of the right boundary (in px)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"left"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The coordinate of the left boundary (in px)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bottom"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The coordinate of the bottom boundary (in px)")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.getMenuButtonBoundingClientRect"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);