"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,y=p["".concat(m,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Convert to another timezone",s={unversionedId:"timezone/convert-to-another-timezone",id:"timezone/convert-to-another-timezone",title:"Convert to another timezone",description:"- Ph\u01b0\u01a1ng th\u1ee9c .tz() trong dayjs tr\u1ea3 v\u1ec1 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng Dayjs m\u1edbi sau khi \u0111\u01b0\u1ee3c chuy\u1ec3n timezone t\u1eeb m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng Dayjs ban \u0111\u1ea7u.",source:"@site/docs/timezone/convert-to-another-timezone.md",sourceDirName:"timezone",slug:"/timezone/convert-to-another-timezone",permalink:"/dayjs/timezone/convert-to-another-timezone",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Timezone",permalink:"/dayjs/category/timezone"},next:{title:"Get user timezone",permalink:"/dayjs/timezone/get-user-timezone"}},m={},c=[],l={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"convert-to-another-timezone"},"Convert to another timezone"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ph\u01b0\u01a1ng th\u1ee9c ",(0,o.kt)("inlineCode",{parentName:"li"},".tz()")," trong dayjs tr\u1ea3 v\u1ec1 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng Dayjs m\u1edbi sau khi \u0111\u01b0\u1ee3c chuy\u1ec3n timezone t\u1eeb m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng Dayjs ban \u0111\u1ea7u."),(0,o.kt)("li",{parentName:"ul"},"Ph\u01b0\u01a1ng th\u1ee9c n\xe0y c\u1ea7n plugin ",(0,o.kt)("strong",{parentName:"li"},"utc")," v\xe0 ",(0,o.kt)("strong",{parentName:"li"},"timezone")," \u0111\u1ec3 ho\u1ea1t \u0111\u1ed9ng."),(0,o.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"dayjs(date?: string | Dayjs).tz(timezone?: string): Dayjs\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Xem c\xe1c timezone kh\u1ea3 d\u1ee5ng: ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import dayjs from "dayjs";\nimport utc from "dayjs/plugin/utc";\nimport timezone from "dayjs/plugin/timezone";\n\ndayjs.extend(utc);\ndayjs.extend(timezone);\n\nconst shanghaiTime = dayjs(dayjs()).tz("Asia/Shanghai");\n\nconsole.log(\n  shanghaiTime.format("DD/MM/YYYY HH:mm:ss")\n); /* 05/08/2023 16:34:01 */\n// Do th\u1eddi gian \u1edf \u0111\u1ecba ph\u01b0\u01a1ng hi\u1ec7n t\u1ea1i l\xe0 05/08/2023 15:34:01 v\xe0 th\u1eddi gian \u1edf Shanghai (Th\u01b0\u1ee3ng H\u1ea3i, Trung Qu\u1ed1c) h\u01a1n ta 1 gi\u1edd \u0111\u1ed3ng h\u1ed3\n')))}u.isMDXComponent=!0}}]);