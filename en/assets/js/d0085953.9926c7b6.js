"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31209],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,v=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30752:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),a=n(4706),o="tabItem_DpXT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},20714:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(93106),a=n(4706),o=n(78949),l=n(46275),i=n(59099),u=n(14376),c="tabList_Q_yt",p="tabItem_hclQ";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:v,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var k;const g=null===m?m:null!==(k=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==k?k:f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,i.U)(),[O,x]=(0,r.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==O&&h.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=P.indexOf(t),r=h[n].value;r!==O&&(T(t),x(r),null!=v&&N(v,String(r)))},A=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const r=P.indexOf(e.currentTarget)+1;var n;t=null!==(n=P[r])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;var r;t=null!==(r=P[n])&&void 0!==r?r:P[P.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},b)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",s({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>P.push(e),onKeyDown:A,onClick:j},n,{className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,s({key:String(t)},e))}},72331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});n(93106);var r=n(79874),a=n(20714),o=n(30752);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={title:"MovableArea",sidebar_label:"MovableArea"},c=void 0,p={unversionedId:"components/viewContainer/movable-area",id:"components/viewContainer/movable-area",title:"MovableArea",description:"A movable area of the movable-view component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/viewContainer/movable-area.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/movable-area",permalink:"/taro-docs/en/docs/next/components/viewContainer/movable-area",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/viewContainer/movable-area.md",tags:[],version:"current",frontMatter:{title:"MovableArea",sidebar_label:"MovableArea"},sidebar:"components",previous:{title:"MatchMedia",permalink:"/taro-docs/en/docs/next/components/viewContainer/match-media"},next:{title:"MovableView",permalink:"/taro-docs/en/docs/next/components/viewContainer/movable-view"}},s={},m=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"MovableAreaProps",id:"movableareaprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"API Support",id:"api-support",level:2}],d={toc:m};function v(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A movable area of the movable-view component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/movable-area.html"}),"Reference"))),(0,r.kt)("h2",l({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MovableAreaProps>\n")),(0,r.kt)("h2",l({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>The meaning of travel</MovableView>\n      </MovableArea>\n    )\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-html"}),"  <movable-area style='height: 200px; width: 200px; background: red;'>\n    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>On the road</movable-view>\n  </movable-area>\n")))),(0,r.kt)("h2",l({},{id:"movableareaprops"}),"MovableAreaProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"scaleArea"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"When the movable-view inside is set to support two-finger zoom, setting this value modifies the area where the zoom gesture takes effect to the entire movable-area.")))),(0,r.kt)("h3",l({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"MovableAreaProps.scaleArea"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"MovableArea"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}v.isMDXComponent=!0}}]);