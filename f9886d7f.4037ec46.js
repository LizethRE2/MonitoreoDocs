(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),i=(r(0),r(121)),c={id:"servidor",title:"Introducci\xf3n",sidebar_label:"Introducci\xf3n",hide_title:!1,hide_table_of_contents:!1,keywords:["Sistema de Monitoreo de Red","NMS","Universidad Francisco de Paula Santander","UFPS","Centro de Servicios de Informaci\xf3n","CSI","Servidor","CentOS  7"]},o={id:"servidor",title:"Introducci\xf3n",description:"Esta secci\xf3n cubre la instalaci\xf3n y configuraci\xf3n del servidor requerido para desplegar el Sistema de Monitoreo. Estas p\xe1ginas se dise\xf1aron para ayudar al administrador de red a implantar el Sistema de Monitoreo de Red.",source:"@site/docs/centos.md",permalink:"/MonitoreoDocs/docs/servidor",editUrl:"https://github.com/LizethRE2/MonitoreoDocs/edit/master/docs/centos.md",sidebar_label:"Introducci\xf3n",sidebar:"docs",previous:{title:"Sistema de Monitoreo de Red",permalink:"/MonitoreoDocs/docs/inicio"},next:{title:"Instalaci\xf3n del Servidor",permalink:"/MonitoreoDocs/docs/instalacionS"}},s=[{value:"Requisitos Previos",id:"requisitos-previos",children:[{value:"Especificaciones m\xednimas del sistema",id:"especificaciones-m\xednimas-del-sistema",children:[]},{value:"Especificaciones recomendadas del sistema",id:"especificaciones-recomendadas-del-sistema",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Esta secci\xf3n cubre la instalaci\xf3n y configuraci\xf3n del servidor requerido para desplegar el Sistema de Monitoreo. Estas p\xe1ginas se dise\xf1aron para ayudar al administrador de red a implantar el Sistema de Monitoreo de Red."),Object(i.b)("center",null,Object(i.b)("img",{src:"../img/centosLogo.jpg",width:"80%"})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"CentOS")," es una distribuci\xf3n Linux Red Hat Enterprise (RHEL) que fue lanzada en marzo de 2004. El proyecto de c\xf3digo abierto, desarrollado y apoyado por una gran comunidad, se basa en los paquetes fuente de RHEL, una distribuci\xf3n comercial de pago que solo se puede utilizar en combinaci\xf3n con contratos de soporte."),Object(i.b)("h2",{id:"requisitos-previos"},"Requisitos Previos"),Object(i.b)("h3",{id:"especificaciones-m\xednimas-del-sistema"},"Especificaciones m\xednimas del sistema"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Procesador"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"RAM"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Disco Duro"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1 GHz"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1 GB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"20 GB")))),Object(i.b)("h3",{id:"especificaciones-recomendadas-del-sistema"},"Especificaciones recomendadas del sistema"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Procesador"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"RAM"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Disco Duro"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4 GHz"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8 GB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"100 GB")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Es recomendable disponer de conexi\xf3n a Internet para las actualizaciones de los paquetes que se descargan durante el proceso de instalaci\xf3n.")),Object(i.b)("p",null,"Use la barra lateral para navegar por el contenido de la secci\xf3n Servidor."))}l.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},b=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,m=b["".concat(c,".").concat(u)]||b[u]||p[u]||i;return r?a.a.createElement(m,o({ref:t},d,{components:r})):a.a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var d=2;d<i;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);