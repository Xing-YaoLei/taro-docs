"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64013],{9541:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(93106),r=a(4706),l=a(66015),c=a(74535),s=a(11288),i=a(1149),o="sidebar_Bvus",m="sidebarItemTitle_SUbN",u="sidebarItemList_NBtY",b="sidebarItem_xIuo",p="sidebarItemLink_ilfb",g="sidebarItemLinkActive_LHGM";function f({sidebar:e}){return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},e.title),n.createElement("ul",{className:(0,r.Z)(u,"clean-list")},e.items.map((e=>n.createElement("li",{key:e.permalink,className:b},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:g},e.title)))))))}var d=a(67969);function E({sidebar:e}){return n.createElement("ul",{className:"menu__list"},e.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return n.createElement(d.Zo,{component:E,props:e})}function h({sidebar:e}){const t=(0,c.i)();return(null==e?void 0:e.items.length)?"mobile"===t?n.createElement(v,{sidebar:e}):n.createElement(f,{sidebar:e}):null}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},k.apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function y(e){const{sidebar:t,toc:a,children:c}=e,s=N(e,["sidebar","toc","children"]),i=t&&t.items.length>0;return n.createElement(l.Z,k({},s),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(h,{sidebar:t}),n.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&n.createElement("div",{className:"col col--2"},a))))}},83329:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n,r=a(93106),l=a(4706),c=a(1149);var s=a(44482),i=a(89996),o=a(9541),m=a(27476),u="tag_kSJE";function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}function p({letterEntry:e}){return r.createElement("article",null,r.createElement("h2",null,e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:u},r.createElement(m.Z,b({},e)))))),r.createElement("hr",null))}function g({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);var r;null!==(r=(n=t)[a])&&void 0!==r||(n[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(p,{key:e.letter,letterEntry:e}))))}var f=a(2695);function d({tags:e,sidebar:t}){const a=(0,c.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return r.createElement(s.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},r.createElement(s.d,{title:a}),r.createElement(f.Z,{tag:"blog_tags_list"}),r.createElement(o.Z,{sidebar:t},r.createElement("h1",null,a),r.createElement(g,{tags:e})))}},27476:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(93106),r=a(4706),l=a(11288),c="tag_iIW8",s="tagRegular_PytM",i="tagWithCount_yPmb";function o({permalink:e,label:t,count:a}){return n.createElement(l.Z,{href:e,className:(0,r.Z)(c,a?i:s)},t,a&&n.createElement("span",null,a))}}}]);