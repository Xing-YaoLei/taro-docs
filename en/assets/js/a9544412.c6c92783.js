"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[26100],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Overview"},l=void 0,p={unversionedId:"platform-plugin",id:"platform-plugin",title:"Overview",description:"Platform Plugin",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/platform-plugin.md",sourceDirName:".",slug:"/platform-plugin",permalink:"/taro-docs/en/docs/next/platform-plugin",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/platform-plugin.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/taro-docs/en/docs/next/taroize-troubleshooting"},next:{title:"Write Platform plugins",permalink:"/taro-docs/en/docs/next/platform-plugin-how"}},m={},u=[{value:"Platform Plugin",id:"platform-plugin",level:2},{value:"Taro Includes Platform Plugins",id:"taro-includes-platform-plugins",level:3},{value:"Other Platform Plugin",id:"other-platform-plugin",level:3},{value:"Platform Plugin Usage",id:"platform-plugin-usage",level:3},{value:"Background",id:"background",level:2},{value:"Open Framework",id:"open-framework",level:3},{value:"Open compilation platform architecture diagram",id:"open-compilation-platform-architecture-diagram",level:4},{value:"What else is interesting to do",id:"what-else-is-interesting-to-do",level:3},{value:"Quick fixes for problems",id:"quick-fixes-for-problems",level:4},{value:"Property Simplification",id:"property-simplification",level:4},{value:"Welcome to build together",id:"welcome-to-build-together",level:4}],s={toc:u};function c(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"platform-plugin"}),"Platform Plugin"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.1.0"),", we have extracted the compatibility logic for each mini program platform and injected it into the Taro framework as a ",(0,r.kt)("a",a({parentName:"p"},{href:"./plugin"}),"Taro plugin")," into the Taro framework to support compilation for the corresponding platform."),(0,r.kt)("h3",a({},{id:"taro-includes-platform-plugins"}),"Taro Includes Platform Plugins"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Plugin"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Compile Platform"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"@tarojs/plugin-platform-weapp"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Wechat Mini Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"@tarojs/plugin-platform-alipay"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Alipay Mini Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"@tarojs/plugin-platform-swan"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Swan Smart Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"@tarojs/plugin-platform-tt"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"ByteDance Mini Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"@tarojs/plugin-platform-qq"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"QQ  Mini Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"@tarojs/plugin-platform-jd"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Jingdong Mini Program")))),(0,r.kt)("h3",a({},{id:"other-platform-plugin"}),"Other Platform Plugin"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Plugin"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Compile Platform"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/NervJS/taro-plugin-platform-weapp-qy"}),"@tarojs/plugin-platform-weapp-qy")),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Enterprise WeChat Mini Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/NervJS/taro-plugin-platform-alipay-dd"}),"@tarojs/plugin-platform-alipay-dd")),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"DingTalk Mini Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/NervJS/taro-plugin-platform-alipay-iot"}),"@tarojs/plugin-platform-alipay-iot")),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Alipay IOT Mini Program")))),(0,r.kt)("h3",a({},{id:"platform-plugin-usage"}),"Platform Plugin Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configuration Plugin")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"// Taro Project Configuration\nmodule.exports = {\n  // ...\n  plugins: [\n    '@tarojs/plugin-platform-alipay-iot'\n  ]\n}\n")),(0,r.kt)("ol",a({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Compile as Alipay IOT Mini Program")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"taro build --type iot\ntaro build --type iot --watch\n")),(0,r.kt)("h2",a({},{id:"background"}),"Background"),(0,r.kt)("h3",a({},{id:"open-framework"}),"Open Framework"),(0,r.kt)("p",null,"In recent years, there are more and more mini program platforms launched, but there are only 6 platforms maintained by Taro core (WeChat, Alipay, Baidu, ByteDance, QQ, Jingdong mini program), so some students often ask if they can support Feature Request of a certain platform."),(0,r.kt)("p",null,"Based on the current architecture, the compatibility code for a single platform is distributed in various corners of the Taro core library, involving compile-time and run-time parts. Supporting a new platform requires changes to all these places, which makes development complicated and makes it difficult for the community to participate in contributing."),(0,r.kt)("p",null,"For this reason we came up with the idea of building an ",(0,r.kt)("strong",{parentName:"p"},"open framework"),". The goal is to extend Taro's end-platform support capabilities in the form of plugins for."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plugin developers can write a platform plugin without modifying the Taro core library code and following certain rules."),(0,r.kt)("li",{parentName:"ul"},"Plugin users only need to install and configure the end-platform plugin to compile the code to the specified platform.")),(0,r.kt)("p",null,"Platform extensions can be further divided into horizontal and vertical extensions in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Horizontal extensions"),(0,r.kt)("p",{parentName:"li"},"Extend a brand new compiled platform, such as the Meituan mini program.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vertical extension"),(0,r.kt)("p",{parentName:"li"},"Inherit existing platform plugin and extend a new compilation platform, such as QQ mini program plugin inherit from WeChat mini program plugin."))),(0,r.kt)("h4",a({},{id:"open-compilation-platform-architecture-diagram"}),"Open compilation platform architecture diagram"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://storage.jd.com/cjj-pub-images/platform-plugin-all.png",alt:null}))),(0,r.kt)("h3",a({},{id:"what-else-is-interesting-to-do"}),"What else is interesting to do"),(0,r.kt)("p",null,"In addition to extending the new compilation platform, we can also write custom platform plugins that inject custom logic into the platform's compilation process by inheriting from existing platform plugins."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," Use the plugin ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-inject"}),"@tarojs/plugin-inject")," to quickly add APIs, components, adjust component properties, etc. for all mini program mini program")),(0,r.kt)("h4",a({},{id:"quick-fixes-for-problems"}),"Quick fixes for problems"),(0,r.kt)("p",null,"Due to the large number of mini program platforms and the fact that they are constantly iterating, there is often an issue where Taro does not have timely support for a newly introduced component or API of an mini program. Developers would first need to contact the Taro team and then wait for us to follow up with a fix and release a new version before they could use it properly, which would take an average of a week or two weeks to be resolved."),(0,r.kt)("p",null,"Based on the open compilation platform architecture, developers can quickly develop custom platform plugins by inheriting the target platform plugins to complete support for these new components or APIs without waiting for Taro to release a version."),(0,r.kt)("h4",a({},{id:"property-simplification"}),"Property Simplification"),(0,r.kt)("p",null,"Because the properties and events of the mini program components must be written statically and cannot be added dynamically, Taro binds all the properties and events of the components in the template in advance."),(0,r.kt)("p",null,"However, in many cases, the actual project does not use all the properties and events of the component, and the redundant property and event bindings will occupy a large part of the volume, and too many event bindings will also reduce the performance of the mini program to some extent."),(0,r.kt)("p",null,"The following is the pseudo code for the ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," component template."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<template name="tmpl_0_view">\n  <view\n    hover-class="..."\n    hover-stop-propagation="..."\n    hover-start-time="..."\n    hover-stay-time="..."\n    animation="..."\n    onTouchStart="..."\n    onTouchMove="..."\n    onTouchEnd="..."\n    onTouchCancel="..."\n    onLongTap="..."\n    onAnimationStart="..."\n    onAnimationIteration="..."\n    onAnimationEnd="..."\n    onTransitionEnd="..."\n    disable-scroll="..."\n    hidden="..."\n    onAppear="..."\n    onDisappear="..."\n    onFirstAppear="..."\n    style="..."\n    class="..."\n    onTap="..."\n    id="..."\n  >\n    ...\n  </view>\n</template>\n')),(0,r.kt)("p",null,"Taro needs to bind all properties and events of the ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," component in advance in order to meet the needs of different developers. However, for a developer who may not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"hover-stop-propagation")," property for the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," component of the project, consider streamlining it and not compiling it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," template."),(0,r.kt)("p",null,"Attribute refinement can also be achieved by implementing a custom platform plugin. However, it is important to note that refinement of properties can cause unnecessary problems and make maintenance of the project difficult, and should be designed and used with care, especially when the project is large and has many developers."),(0,r.kt)("h4",a({},{id:"welcome-to-build-together"}),"Welcome to build together"),(0,r.kt)("p",null,"We hope that after the launch of the open architecture, we can stimulate the creativity of developers in the community to create new platform support plugins or various excellent custom platform components for the Taro ecosystem, and we look forward to your participation and contribution!"))}c.isMDXComponent=!0}}]);