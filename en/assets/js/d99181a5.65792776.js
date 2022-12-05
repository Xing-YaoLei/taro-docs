"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[80956],{79874:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return s}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),f=c(n),s=a,d=f["".concat(p,".").concat(s)]||f[s]||u[s]||i;return n?r.createElement(d,o(o({ref:t},g),{},{components:n})):r.createElement(d,o({ref:t},g))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return g}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Directory Structure"},l=void 0,p={unversionedId:"folder",id:"folder",title:"Directory Structure",description:"Directory Structure",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/folder.md",sourceDirName:".",slug:"/folder",permalink:"/taro-docs/en/docs/next/folder",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/folder.md",tags:[],version:"current",frontMatter:{title:"Directory Structure"},sidebar:"docs",previous:{title:"More Resources",permalink:"/taro-docs/en/docs/next/composition"},next:{title:"CLI Command",permalink:"/taro-docs/en/docs/next/cli"}},c={},g=[{value:"Directory Structure",id:"directory-structure",level:2},{value:"Compile Configuration",id:"compile-configuration",level:2},{value:"Source Code",id:"source-code",level:2},{value:"app",id:"app",level:3},{value:"1. Mini Program Global Configuration",id:"1-mini-program-global-configuration",level:4},{value:"2. Mini Program Global Style",id:"2-mini-program-global-style",level:4},{value:"page",id:"page",level:3},{value:"1. Page Configuration",id:"1-page-configuration",level:4},{value:"2. Page Style",id:"2-page-style",level:4},{value:"3. Page Routing",id:"3-page-routing",level:4},{value:"Project Configuration",id:"project-configuration",level:2},{value:"Babel Configuration",id:"babel-configuration",level:2},{value:"ESLint Configuration",id:"eslint-configuration",level:2}],u={toc:g};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"directory-structure"}),"Directory Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"\u251c\u2500\u2500 dist                        Compilation results directory\n|\n\u251c\u2500\u2500 config                      Project compilation configuration directory\n|   \u251c\u2500\u2500 index.js                Default Configuration\n|   \u251c\u2500\u2500 dev.js                  Development environment configuration\n|   \u2514\u2500\u2500 prod.js                 Production environment configuration\n|\n\u251c\u2500\u2500 src                         Source directory\n|   \u251c\u2500\u2500 pages                   Page file directory\n|   |   \u2514\u2500\u2500 index               index Page directory\n|   |       \u251c\u2500\u2500 index.js        index page\n|   |       \u251c\u2500\u2500 index.css       index page style\n|   |       \u2514\u2500\u2500 index.config.js index page configuration\n|   |\n|   \u251c\u2500\u2500 app.js                  Project entry\n|   \u251c\u2500\u2500 app.css                 Project general style\n|   \u2514\u2500\u2500 app.config.js           Project entry configuration\n|\n\u251c\u2500\u2500 project.config.json         Wechat mini program configuration   \n\u251c\u2500\u2500 project.tt.json             ByteDance  Mini Program configuration \n\u251c\u2500\u2500 project.swan.json           Baidu smart program \n\u251c\u2500\u2500 project.qq.json             QQ Mini Program\n|\n\u251c\u2500\u2500 babel.config.js             Babel configuration\n\u251c\u2500\u2500 tsconfig.json               TypeScript configuration\n\u251c\u2500\u2500 .eslintrc                   ESLint configuration\n|\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("h2",a({},{id:"compile-configuration"}),"Compile Configuration"),(0,r.kt)("p",null,"For configuring the build configuration of Taro projects, modifying Webpack configuration, etc., please refer to",(0,r.kt)("a",a({parentName:"p"},{href:"./config"}),"compile configuration"),"\u548c",(0,r.kt)("a",a({parentName:"p"},{href:"./config-detail"}),"compile configuration details"),"\u3002"),(0,r.kt)("h2",a({},{id:"source-code"}),"Source Code"),(0,r.kt)("p",null,"Like the mini program specification, Taro contains an ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," that describes the overall application and multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"page"),"s that describe their respective pages."),(0,r.kt)("h3",a({},{id:"app"}),"app"),(0,r.kt)("p",null,"The mini program contains the following files:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"File"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Required"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Funtions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"app.js"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"yes"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"mini program entry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"app.css"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"no"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"mini program global style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"app.config.js"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"yes"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"mini program global configuration")))),(0,r.kt)("p",null,"Eamples are available for viewing according to the framework of your choice\uff1a",(0,r.kt)("a",a({parentName:"p"},{href:"./react-overall"}),"React"),", ",(0,r.kt)("a",a({parentName:"p"},{href:"./vue-overall"}),"Vue"),", ",(0,r.kt)("a",a({parentName:"p"},{href:"./vue3"}),"Vue3"),"\u3002"),(0,r.kt)("h4",a({},{id:"1-mini-program-global-configuration"}),"1. Mini Program Global Configuration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"app.config.js")," Global configuration file corresponding to the mini program specification ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json"),"\uff0cThe advantage is that it is JS files that can write logic. The configuration starts with ",(0,r.kt)("strong",{parentName:"p"}," global configuration of WeChat Mini Progam"),"\u3002Detail reference ",(0,r.kt)("a",a({parentName:"p"},{href:"./app-config"}),"Global Configuration"),"\u3002"),(0,r.kt)("h4",a({},{id:"2-mini-program-global-style"}),"2. Mini Program Global Style"),(0,r.kt)("p",null,"Mini Program global style files can be introduced via the ES6 specification's ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="app.js"',title:'"app.js"'}),"import './app.css';\n")),(0,r.kt)("h3",a({},{id:"page"}),"page"),(0,r.kt)("p",null,"A mini program page consists of three files:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"File"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Required"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Funtions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"page.js"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"yes"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"page entry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"page.css"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"no"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"page style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"page.config.js"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"no"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"page configuration")))),(0,r.kt)("h4",a({},{id:"1-page-configuration"}),"1. Page Configuration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"page.config.js")," The page configuration file corresponding to the mini program specification ",(0,r.kt)("inlineCode",{parentName:"p"},"page.json"),"The advantage is that it is js configuration to ",(0,r.kt)("strong",{parentName:"p"}," Wechat Mini Program page configuration")," as specification\u3002Detail reference ",(0,r.kt)("a",a({parentName:"p"},{href:"./page-config"}),"page configuration"),"\u3002"),(0,r.kt)("h4",a({},{id:"2-page-style"}),"2. Page Style"),(0,r.kt)("p",null,"Page style files can be introduced via the ES6 specification ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="pages/index/index.js"',title:'"pages/index/index.js"'}),"import './index.css';\n")),(0,r.kt)("h4",a({},{id:"3-page-routing"}),"3. Page Routing"),(0,r.kt)("p",null,"Page routing is consistent with the mini program  specification and needs to be configured in the mini program global configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config.js"),"."),(0,r.kt)("h2",a({},{id:"project-configuration"}),"Project Configuration"),(0,r.kt)("p",null,"Each mini program platform has its own project profile, and Taro supports adapting them. For details, please refer to",(0,r.kt)("a",a({parentName:"p"},{href:"./project-config"}),"project configuration"),"\u3002"),(0,r.kt)("h2",a({},{id:"babel-configuration"}),"Babel Configuration"),(0,r.kt)("p",null,"Babel configuration reference ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/index.js"}),"Github")),(0,r.kt)("h2",a({},{id:"eslint-configuration"}),"ESLint Configuration"),(0,r.kt)("p",null,"ESLint configuration reference ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/eslint-plugin-taro/index.js"}),"Github")))}f.isMDXComponent=!0}}]);