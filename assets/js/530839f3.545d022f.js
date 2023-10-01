"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[222],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,i(i({ref:e},m),{},{components:r})):n.createElement(f,i({ref:e},m))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9495:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},i="Format with template",l={unversionedId:"template-format",id:"template-format",title:"Format with template",description:"- Trong th\u01b0 vi\u1ec7n dayjs, ph\u01b0\u01a1ng th\u1ee9c .format() \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng \u0111\u1ed1i t\u01b0\u1ee3ng th\u1eddi gian th\xe0nh m\u1ed9t chu\u1ed7i theo m\u1ed9t m\u1eabu c\u1ee5 th\u1ec3.",source:"@site/docs/template-format.md",sourceDirName:".",slug:"/template-format",permalink:"/dayjs/template-format",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Subtract",permalink:"/dayjs/add-subtract/subtract"},next:{title:"Format time from now",permalink:"/dayjs/format-time-from-now"}},c={},p=[],m={toc:p},s="wrapper";function u(t){let{components:e,...o}=t;return(0,a.kt)(s,(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"format-with-template"},"Format with template"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trong th\u01b0 vi\u1ec7n dayjs, ph\u01b0\u01a1ng th\u1ee9c ",(0,a.kt)("inlineCode",{parentName:"li"},".format()")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng \u0111\u1ed1i t\u01b0\u1ee3ng th\u1eddi gian th\xe0nh m\u1ed9t chu\u1ed7i theo m\u1ed9t m\u1eabu c\u1ee5 th\u1ec3."),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"dayjs(date?: string | Dayjs).format(template?: string): string\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe1c template format:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1696148463049",src:r(589).Z,width:"799",height:"1219"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0110\u1ec3 escape kh\u1ecfi c\xe1c template format tr\xean, ta s\u1eed d\u1ee5ng d\u1ea5u ngo\u1eb7c vu\xf4ng ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import dayjs from "dayjs";\n\nconst current = dayjs();\nconsole.log(current.format("DD/MM/YYYY HH:mm:ss [YYYYescape]")); // 02/08/2023 22:37:52 YYYYescape\n')))}u.isMDXComponent=!0},589:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/1696148463049-40c3a0cdb21a90177e310db046bba421.png"}}]);