"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72382],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30752:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(93106),o=n(4706),r="tabItem_DpXT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:t}),e)}},20714:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(93106),o=n(4706),r=n(78949),l=n(46275),i=n(59099),p=n(14376),s="tabList_Q_yt",u="tabItem_hclQ";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:m,groupId:h,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const y=null===d?d:null!==(v=null!=d?d:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[C,j]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==C&&f.some((t=>t.value===e))&&j(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==C&&(x(t),j(a),null!=h&&w(h,String(a)))},S=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:S,onClick:O},n,{className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,r.Z)();return a.createElement(d,c({key:String(t)},e))}},89685:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});n(93106);var a=n(79874),o=n(20714),r=n(30752);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={title:"Page Components"},s=void 0,u={unversionedId:"react-page",id:"version-3.x/react-page",title:"Page Components",description:"Every Taro application includes at least one page component, which can jump through Taro routes and also access the lifecycle of the mini program page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/react-page.mdx",sourceDirName:".",slug:"/react-page",permalink:"/taro-docs/en/docs/react-page",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/react-page.mdx",tags:[],version:"3.x",frontMatter:{title:"Page Components"},sidebar:"docs",previous:{title:"Entry Component",permalink:"/taro-docs/en/docs/react-entry"},next:{title:"Hooks",permalink:"/taro-docs/en/docs/hooks"}},c={},d=[{value:"Example Code",id:"example-code",level:2},{value:"Page component configuration",id:"page-component-configuration",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"onLoad (options)",id:"onload-options",level:3},{value:"onReady ()",id:"onready-",level:3},{value:"The onReady of the child component",id:"the-onready-of-the-child-component",level:4},{value:"componentDidShow ()",id:"componentdidshow-",level:3},{value:"The onShow of the Subcomponents",id:"the-onshow-of-the-subcomponents",level:4},{value:"componentDidHide ()",id:"componentdidhide-",level:3},{value:"The onHide of a subcomponent",id:"the-onhide-of-a-subcomponent",level:4},{value:"onPullDownRefresh ()",id:"onpulldownrefresh-",level:3},{value:"onReachBottom ()",id:"onreachbottom-",level:3},{value:"onPageScroll (Object)",id:"onpagescroll-object",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Object",id:"object",level:5},{value:"onAddToFavorites (Object)",id:"onaddtofavorites-object",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Object",id:"object-1",level:5},{value:"Example Code",id:"example-code-1",level:4},{value:"onShareAppMessage (Object)",id:"onshareappmessage-object",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Object",id:"object-2",level:5},{value:"Example Code",id:"example-code-2",level:4},{value:"onShareTimeline ()",id:"onsharetimeline-",level:3},{value:"Return Values",id:"return-values",level:4},{value:"Example Code",id:"example-code-3",level:4},{value:"onResize (Object)",id:"onresize-object",level:3},{value:"onTabItemTap (Object)",id:"ontabitemtap-object",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Object",id:"object-3",level:5},{value:"onTitleClick ()",id:"ontitleclick-",level:3},{value:"onOptionMenuClick ()",id:"onoptionmenuclick-",level:3},{value:"onPopMenuClick ()",id:"onpopmenuclick-",level:3},{value:"onPullIntercept ()",id:"onpullintercept-",level:3}],m={toc:d};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every Taro application includes at least one page component, which can jump through Taro routes and also access the lifecycle of the mini program page."),(0,a.kt)("h2",l({},{id:"example-code"}),"Example Code"),(0,a.kt)(o.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"class",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="page.js"',title:'"page.js"'}),"import React, { Component } from 'react'\nimport { View } from '@tarojs/components'\n\nclass Index extends Component {\n  // All React component methods can be used\n  componentDidMount () {}\n\n  // onLoad\n  onLoad () {}\n\n  // onReady\n  onReady () {}\n\n  // onShow\n  componentDidShow () {}\n\n  // onHide\n  componentDidHide () {}\n\n  // onPullDownRefresh\uff0cexcept for componentDidShow/componentDidHide\n  // All page lifecycle function names correspond to mini program\n  onPullDownRefresh () {}\n\n  render () {\n    return (\n      <View className='index' />\n    )\n  }\n}\n\nexport default Index\n"))),(0,a.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="page.js"',title:'"page.js"'}),"import React, { useEffect } from 'react'\nimport { View } from '@tarojs/components'\nimport {\n  useReady,\n  useDidShow,\n  useDidHide,\n  usePullDownRefresh\n} from '@tarojs/taro'\n\nfunction Index () {\n  // All React Hooks can be used\n  useEffect(() => {})\n\n  // onReady\n  useReady(() => {})\n\n  // onShow\n  useDidShow(() => {})\n\n  // onHide\n  useDidHide(() => {})\n\n  // Taro implements custom React Hooks for all mini program page lifecycles to support\n  usePullDownRefresh(() => {})\n\n  return (\n    <View className='index' />\n  )\n}\n\nexport default Index\n")))),(0,a.kt)("h2",l({},{id:"page-component-configuration"}),"Page component configuration"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",l({parentName:"p"},{href:"./page-config"}),"page configuration")),(0,a.kt)("h2",l({},{id:"lifecycle"}),"Lifecycle"),(0,a.kt)("p",null,"In addition to supporting React's lifecycle methods, page components additionally support the following lifecycles, in accordance with mini program standards."),(0,a.kt)("h3",l({},{id:"onload-options"}),"onLoad (options)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"onLoad")," of the corresponding page in the mini program.")),(0,a.kt)("p",null,"Page routing parameters can be accessed during this lifecycle by accessing the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," parameter or by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"."),(0,a.kt)("h3",l({},{id:"onready-"}),"onReady ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"onReady")," of the corresponding page in the mini program.")),(0,a.kt)("p",null,"This lifecycle begins with access to the DOM nodes of the mini program rendering layer using APIs such as ",(0,a.kt)("inlineCode",{parentName:"p"},"createCanvasContext")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"createSelectorQuery"),"."),(0,a.kt)("h4",l({},{id:"the-onready-of-the-child-component"}),"The onReady of the child component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady")," lifecycle is only triggered for page components.\nChild components can use Taro's built-in ",(0,a.kt)("a",l({parentName:"p"},{href:"./apis/about/events"}),"Message System")," to listen to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady()")," lifecycle of the page component."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="A child component in a page"',title:'"A',child:!0,component:!0,in:!0,a:!0,'page"':!0}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'\n\nclass Test extends React.Component {\n  $instance = getCurrentInstance()\n\n  componentWillMount () {\n    const onReadyEventId = this.$instance.router.onReady\n    eventCenter.once(onReadyEventId, () => {\n      console.log('onReady')\n\n      // onReady is triggered to get the node of the rendering layer of the mini program\n      Taro.createSelectorQuery().select('#only')\n        .boundingClientRect()\n        .exec(res => console.log(res, 'res'))\n    })\n  }\n\n  render () {\n    return (\n      <View id=\"only\">\n      </View>\n    )\n  }\n}\n")),(0,a.kt)("p",null,"But when the child component is ",(0,a.kt)("strong",{parentName:"p"},"load-on-demand"),", the page ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady")," has already been triggered. If this on-demand subcomponent needs to get the DOM node of the rendering layer of the mini program because it missed the page ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady"),", it can only try to simulate it using ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.nextTick"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="Load-on-demand subcomponents"',title:'"Load-on-demand','subcomponents"':!0}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport Taro from '@tarojs/taro'\n\nclass Test extends React.Component {\n  componentDidMount () {\n    Taro.nextTick(() => {\n        // Use Taro.nextTick to simulate that setData has ended and the node has finished rendering      Taro.createSelectorQuery().select('#only')\n        .boundingClientRect()\n        .exec(res => console.log(res, 'res'))\n    })\n  }\n\n  render () {\n    return (\n      <View id=\"only\" />\n    )\n  }\n}\n")),(0,a.kt)("h3",l({},{id:"componentdidshow-"}),"componentDidShow ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"onShow")," of the corresponding page in the mini program.")),(0,a.kt)("p",null,"Triggered when the page is displayed/entered in the foreground."),(0,a.kt)("h4",l({},{id:"the-onshow-of-the-subcomponents"}),"The onShow of the Subcomponents"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onShow")," lifecycle is only triggered for page components.\nSubcomponents can use Taro's built-in ",(0,a.kt)("a",l({parentName:"p"},{href:"./apis/about/events"}),"message system")," to listen to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onShow()")," lifecycle of the page component."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="A sub-component of the page"',title:'"A',"sub-component":!0,of:!0,the:!0,'page"':!0}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { eventCenter, getCurrentInstance } from '@tarojs/taro'\n\nclass Test extends React.Component {\n  $instance = getCurrentInstance()\n\n  componentWillMount () {\n    const onShowEventId = this.$instance.router.onShow\n    eventCenter.on(onShowEventId, this.onShow)\n  }\n\n  componentWillUnmount () {\n    const onShowEventId = this.$instance.router.onShow\n    eventCenter.off(onShowEventId, this.onShow)\n  }\n\n  onShow = () => {\n    console.log('onShow')\n  }\n\n  render () {\n    return (\n      <View id=\"only\" />\n    )\n  }\n}\n")),(0,a.kt)("h3",l({},{id:"componentdidhide-"}),"componentDidHide ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"onHide")," of the corresponding page in the mini program.")),(0,a.kt)("p",null,"Triggered when the page is hidden/entered in the background."),(0,a.kt)("h4",l({},{id:"the-onhide-of-a-subcomponent"}),"The onHide of a subcomponent"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onHide")," lifecycle is only triggered for page components.\nSubcomponents can use Taro's built-in ",(0,a.kt)("a",l({parentName:"p"},{href:"./apis/about/events"}),"message system")," to listen to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onHide()")," lifecycle of the page component."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="A sub-component of the page"',title:'"A',"sub-component":!0,of:!0,the:!0,'page"':!0}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { eventCenter, getCurrentInstance } from '@tarojs/taro'\n\nclass Test extends React.Component {\n  $instance = getCurrentInstance()\n\n  componentWillMount () {\n    const onHideEventId = this.$instance.router.onHide\n    eventCenter.on(onHideEventId, this.onHide)\n  }\n\n  componentWillUnmount () {\n    const onHideEventId = this.$instance.router.onHide\n    eventCenter.off(onHideEventId, this.onHide)\n  }\n\n  onHide = () => {\n    console.log('onHide')\n  }\n\n  render () {\n    return (\n      <View id=\"only\" />\n    )\n  }\n}\n")),(0,a.kt)("h3",l({},{id:"onpulldownrefresh-"}),"onPullDownRefresh ()"),(0,a.kt)("p",null,"Listen to the user drop-down action."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to set it in the window option of the global configuration or in the page configuration\n",(0,a.kt)("inlineCode",{parentName:"li"},"enablePullDownRefresh: true"),"."),(0,a.kt)("li",{parentName:"ul"},"The pull-down refresh can be triggered by ",(0,a.kt)("a",l({parentName:"li"},{href:"/taro-docs/en/docs/apis/ui/pull-down-refresh/startPullDownRefresh"}),"Taro.startPullDownRefresh"),", which triggers the pull-down refresh animation after the call, and the effect is the same as the user's manual pull-down refresh."),(0,a.kt)("li",{parentName:"ul"},"When the data has been processed and refreshed, ",(0,a.kt)("a",l({parentName:"li"},{href:"/taro-docs/en/docs/apis/ui/pull-down-refresh/stopPullDownRefresh"}),"Taro.stopPullDownRefresh")," You can stop the drop-down refresh of the current page.")),(0,a.kt)("h3",l({},{id:"onreachbottom-"}),"onReachBottom ()"),(0,a.kt)("p",null,"Listen to the user pull-up bottoming event."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The trigger distance can be set in the window option of the global configuration or in the page configuration  ",(0,a.kt)("inlineCode",{parentName:"li"},"onReachBottomDistance"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"This event will only be triggered once during the slide within the trigger distance")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"H5 does not have synchronization for now, you can simulate it by binding scroll events to window")),(0,a.kt)("h3",l({},{id:"onpagescroll-object"}),"onPageScroll (Object)"),(0,a.kt)("p",null,"Listening to user swipe page events"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"H5 does not have synchronization for now, you can simulate it by binding scroll events to window")),(0,a.kt)("h4",l({},{id:"parameters"}),"Parameters"),(0,a.kt)("h5",l({},{id:"object"}),"Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Parameters"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"scrollTop"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The distance the page has scrolled in the vertical direction (unit: px)")))),(0,a.kt)("h3",l({},{id:"onaddtofavorites-object"}),"onAddToFavorites (Object)"),(0,a.kt)("p",null,'Listen to the user\'s click on the "Favorites" button in the upper-right corner of the menu and customize the contents of the favorites.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Supported by Taro 3.0.3 and above.\nOnly supported by WeChat mini program , this interface is Beta version, supported from Android version 7.0.15, only supported in Android platform for now.")),(0,a.kt)("h4",l({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("h5",l({},{id:"object-1"}),"Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Parameters"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"webviewUrl"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"If the page contains a web-view component, the url of the current web-view is returned")))),(0,a.kt)("p",null,"This event handler requires the return of an Object, which is used to customize the contents of the collection."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Fields"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Customized Title"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Page title or account name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"imageUrl"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Customize the image, displaying it with an aspect ratio of 1:1"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Page Screenshot")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Custom query fields"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Current page query")))),(0,a.kt)("h4",l({},{id:"example-code-1"}),"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="page.js"',title:'"page.js"'}),"onAddToFavorites (res) {\n  // webview  page return webviewUrl\n  console.log('WebviewUrl: ', res?.webviewUrl)\n  return {\n    title: 'custom title',\n    imageUrl: 'https://demo.png',\n    query: 'name=xxx&age=xxx',\n  }\n}\n")),(0,a.kt)("h3",l({},{id:"onshareappmessage-object"}),"onShareAppMessage (Object)"),(0,a.kt)("p",null,"Listen to the user's behavior when they click on the forward button (Button component openType='share') or the \"Forward\" button in the top-right menu, and customize the forwarding content."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attention:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"onShareAppMessage")," is not triggered, please set ",(0,a.kt)("inlineCode",{parentName:"li"},"enableShareAppMessage: true")," in the page config"),(0,a.kt)("li",{parentName:"ol"},'Only if this event handler is defined, the "Forward" button will be displayed in the upper right menu')),(0,a.kt)("h4",l({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("h5",l({},{id:"object-2"}),"Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Parameters"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"from"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Forwarding event sources ",(0,a.kt)("br",null),"button: In-page forwarding buttons. ",(0,a.kt)("br",null),"menu: Top right corner forwarding menu")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"target"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"If the ",(0,a.kt)("inlineCode",{parentName:"td"},"from")," value is ",(0,a.kt)("inlineCode",{parentName:"td"},"button"),", then ",(0,a.kt)("inlineCode",{parentName:"td"},"target")," is the ",(0,a.kt)("inlineCode",{parentName:"td"},"button")," that triggered the forwarding event, otherwise it is ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"webViewUrl"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Returns the url of the current ",(0,a.kt)("inlineCode",{parentName:"td"},"WebView")," if the page contains a ",(0,a.kt)("inlineCode",{parentName:"td"},"WebView")," component")))),(0,a.kt)("p",null,"This event requires the return of an Object, which is used to customize the forwarding content, and returns the following:"),(0,a.kt)("p",null,"Custom forwarding content"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Fields"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Forwarding Title"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Current mini program name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Forwarding Title"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Current page path, must be a full path starting with /")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"imageUrl"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Custom image path, either local file path, package file path or network image path. Support PNG and JPG. Display image aspect ratio is 5:4"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Use default screenshot")))),(0,a.kt)("h4",l({},{id:"example-code-2"}),"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="page.js"',title:'"page.js"'}),"export default class Index extends Component {\n  onShareAppMessage (res) {\n    if (res.from === 'button') {\n      // From the on-page forward button\n      console.log(res.target)\n    }\n    return {\n      title: 'Custom forwarding title',\n      path: '/page/user?id=123'\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="page.config.js"',title:'"page.config.js"'}),"export default {\n  // When `onShareAppMessage` is not triggered, you can try to configure this option\n  enableShareAppMessage: true\n}\n")),(0,a.kt)("h3",l({},{id:"onsharetimeline-"}),"onShareTimeline ()"),(0,a.kt)("p",null,'Listen to the behavior of the "Share to moments" button in the top-right menu and customize the sharing content.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Taro version 3.0.3 and above support\nOnly WeChat mini program are supported, the base library 2.11.3 starts to support, this interface is a Beta version, only supported in Android platform for now")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attention:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"onShareAppMessage")," is not triggered, please set ",(0,a.kt)("inlineCode",{parentName:"li"},"enableShareAppMessage: true")," in the page config"),(0,a.kt)("li",{parentName:"ol"},'Only if this event handler is defined, the "Forward" button will be displayed in the upper right menu')),(0,a.kt)("h4",l({},{id:"return-values"}),"Return Values"),(0,a.kt)("p",null,"The event handler function can return an Object for customizing the shared content, does not support custom page paths, and returns the following content."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Fields"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Defalut"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Custom title"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Current mini program name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The parameters carried in the custom page path"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The parameters carried in the current page path")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"imageUrl"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Custom image path, can be local file or network image. Support PNG and JPG, display image aspect ratio is 1:1."),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"default use mini program Logo")))),(0,a.kt)("h4",l({},{id:"example-code-3"}),"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="page.js"',title:'"page.js"'}),"class Index extends Component {\n  onShareAppMessage () {}\n  onShareTimeline () {\n    console.log('onShareTimeline')\n    return {}\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="page.config.js"',title:'"page.config.js"'}),"export default {\n  // When `onShareAppMessage` is not triggered, you can try to configure this option\n  enableShareAppMessage: true,\n  // When `onShareTimeline` is not triggered, you can try to configure this option\n  enableShareTimeline: true\n}\n")),(0,a.kt)("h3",l({},{id:"onresize-object"}),"onResize (Object)"),(0,a.kt)("p",null,"Triggered when the mini program screen is rotated. For details, see ",(0,a.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%90%AF%E7%94%A8%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E6%94%AF%E6%8C%81"}),"Response to display area changes"),"\u3002"),(0,a.kt)("h3",l({},{id:"ontabitemtap-object"}),"onTabItemTap (Object)"),(0,a.kt)("p",null,"Triggered when the tab is clicked."),(0,a.kt)("h4",l({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("h5",l({},{id:"object-3"}),"Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Parameters"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The serial number of the clicked tabItem, starting from 0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"pagePath"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The path to the page where the tabItem was clicked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The text of the clicked tabItem's button")))),(0,a.kt)("h3",l({},{id:"ontitleclick-"}),"onTitleClick ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only Alipay mini program support")),(0,a.kt)("p",null,"Click on the title to trigger"),(0,a.kt)("h3",l({},{id:"onoptionmenuclick-"}),"onOptionMenuClick ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only Alipay mini program support")),(0,a.kt)("p",null,"Triggered by clicking on additional icons in the navigation bar"),(0,a.kt)("h3",l({},{id:"onpopmenuclick-"}),"onPopMenuClick ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only Alipay mini program support")),(0,a.kt)("p",null,"No description yet"),(0,a.kt)("h3",l({},{id:"onpullintercept-"}),"onPullIntercept ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only Alipay mini program support")),(0,a.kt)("p",null,"Triggered on dropdown truncation"))}h.isMDXComponent=!0}}]);