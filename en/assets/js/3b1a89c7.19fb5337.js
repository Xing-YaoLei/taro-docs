"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85071],{79874:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(93106);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(h,r(r({ref:n},c),{},{components:t})):o.createElement(h,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92745:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});t(93106);var o=t(79874);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const r={title:"Children with combination"},l=void 0,p={unversionedId:"children",id:"children",title:"Children with combination",description:"For test, as a result of WeChat applet `` can't be used in a loop, so Children and combination in WeChat mini-app, you cannot use this in a loop. Baidu mini-apps, pay treasure to mini-apps, H5, React Native can use this feature in the loop.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/children.md",sourceDirName:".",slug:"/children",permalink:"/taro-docs/en/docs/next/children",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/children.md",tags:[],version:"current",frontMatter:{title:"Children with combination"}},s={},c=[{value:"Children",id:"children",level:2},{value:"announcements",id:"announcements",level:3},{value:"combination",id:"combination",level:2},{value:"announcements",id:"announcements-1",level:3}],d={toc:c};function m(e){var{components:n}=e,t=a(e,["components"]);return(0,o.kt)("wrapper",i({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For test, as a result of WeChat applet ",(0,o.kt)("inlineCode",{parentName:"p"},"<slot />")," can't be used in a loop, so Children and combination in WeChat mini-app, you cannot use this in a loop. Baidu mini-apps, pay treasure to mini-apps, H5, React Native can use this feature in the loop.")),(0,o.kt)("h2",i({},{id:"children"}),"Children"),(0,o.kt)("p",null,"When we design components, some components are usually don't know what will your child components content, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Sidebar")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," such container components."),(0,o.kt)("p",null,"We suggest that in such a situation using ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," child elements to convey:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"class Dialog extends Component {\n  render () {\n    return (\n      <View className='dialog'>\n        <View className='header'>Welcome!</View>\n        <View className='body'>\n          {this.props.children}\n        </View>\n        <View className='footer'>-- divider --</View>\n      </View>\n    )\n  }\n}\n")),(0,o.kt)("p",null,"So you can allow other components in the JSX passed to anyon nested components ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"class App extends Component {\n  render () {\n    return (\n      <View className='container'>\n        <Dialog>\n          <View className=\"dialog-message\">\n            Thank you for using Taro.\n          </View>\n        </Dialog>\n      </View>\n    )\n  }\n}\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"<Dialog /> ")," JSX any content within the tag as its child elements (Children) will be passed to its components."),(0,o.kt)("h3",i({},{id:"announcements"}),"announcements"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please don't take ",(0,o.kt)("inlineCode",{parentName:"strong"},"this.props.children")," for any operation"),". Taro in a mini-app to realize the function using a mini-app ",(0,o.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"slot"))," function, that is to say, you can put the ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," understood as ",(0,o.kt)("inlineCode",{parentName:"p"},"slot")," syntactic sugar, ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," not React in the Taro ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactElement")," object, So like ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children && this.props.children"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children[0]")," is illegal in Taro."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"this.props.children")," can't use ",(0,o.kt)("inlineCode",{parentName:"strong"},"defaultProps")," set the default content"),". Due to the limitation of mini-apps, Taro cannot know whether consumers of the component content of the incoming, so can't apply the default content."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cannot put ",(0,o.kt)("inlineCode",{parentName:"strong"},"this.props.children")," decomposition as a variable to use again"),". Because ordinary ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," has a definite value, so when you put them into the variable runtime can handle, ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," can not do this operation, you must explicitly ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," all write full to achieve its function."),(0,o.kt)("h2",i({},{id:"combination"}),"combination"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"1.1.9")," began to support")),(0,o.kt)("p",null,'In some cases you just need to deliver a child only component, may need a lot of a "placeholder". For example in the ',(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," component, you not only need to custom it ",(0,o.kt)("inlineCode",{parentName:"p"},"body"),", you hope it ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"footer")," are to ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," component user customization. This kind of situation can do it:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"class Dialog extends Component {\n  render () {\n    return (\n      <View className='dialog'>\n        <View className='header'>\n          {this.props.renderHeader}\n        </View>\n        <View className='body'>\n          {this.props.children}\n        </View>\n        <View className='footer'>\n          {this.props.renderFooter}\n        </View>\n      </View>\n    )\n  }\n}\n\nclass App extends Component {\n  render () {\n    return (\n      <View className='container'>\n        <Dialog\n          renderHeader={\n            <View className='welcome-message'>Welcome!</View>\n          }\n          renderFooter={\n            <Button className='close'>Close</Button>\n          }\n        >\n          <View className=\"dialog-message\">\n            Thank you for using Taro.\n          </View>\n        </Dialog>\n      </View>\n    )\n  }\n}\n")),(0,o.kt)("p",null,"In our statement ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," component, ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"footer")," part increased our ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.renderHeader")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.renderFooter")," as a placeholder. Accordingly, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," component, can give ",(0,o.kt)("inlineCode",{parentName:"p"},"renderHeader")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"renderFooter")," incoming JSX elements, respectively the two incoming JSX elements will populate them in ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," components in place - just like in ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," JSX written content in the label, will fill to ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," position."),(0,o.kt)("h3",i({},{id:"announcements-1"}),"announcements"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The combination of components to follow ",(0,o.kt)("inlineCode",{parentName:"strong"},"this.props.children")," all rules"),". Combine this function and ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"slot"),", i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," limit are also apply for a component combinations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All the combination must use ",(0,o.kt)("inlineCode",{parentName:"strong"},"render")," beginning, and follow the camel nomenclature"),". And our event specification to ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," beginning, component combination ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," beginning."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Portfolios are introduced into a single JSX elements, can't spread to any other type"),". When you need to do some condition judgment or complex logic operation, can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," wrapped in elements, and then in ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," filling other complex logic elements."))}m.isMDXComponent=!0}}]);