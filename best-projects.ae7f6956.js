function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var l=a("3CMhY"),c=(l=a("3CMhY"),a("1zGJr")),r=a("6JXw1"),s=a("2uOa8"),d=a("aEBcX");const u=new(e(a("lewhg")))({select:"#lang-select",settings:{disabled:!1,alwaysOpen:!1,showSearch:!1,searchPlaceholder:"Search",searchText:"No Results",searchingText:"Searching...",searchHighlight:!1,closeOnSelect:!0,contentLocation:document.body,contentPosition:"absolute",openPosition:"auto",placeholderText:"Select Value",allowDeselect:!1,hideSelected:!1,showOptionTooltips:!1,minSelected:0,maxSelected:1e3,timeoutDelay:200,maxValuesShown:20,maxValuesMessage:"{number} selected"}});function i(e,t,n){document.querySelectorAll(e).forEach((e=>e.setAttribute(t,n)))}!function(){const e=document.querySelectorAll("[data-lang]"),t=document.querySelector(".backdrop"),n=document.querySelector("#lang-select");n.addEventListener("change",(function(e){a.language=e.target.value,a.applyLangToDocument()}));const o=document.body.dataset.pageId;l.LANG_DATA[o]={...l.LANG_DATA[o],...l.LANG_MENU};const a=new(0,c.LanguageHandler)(e,l.LANG_DATA);a.init(),s=n,d=a.language,s.value=d,u.setSelected(d),r=t,r.classList.add("is-hidden");var r;var s,d}(),function(e){for(let t=1;t<=e;t+=1)(0,d.makeCarousel)(document.querySelector(`#best-projects-page-carousel-${t}`))}(11),(0,r.navHandler)(),(0,s.goTopBtnHandler)(),function(e){for(let t=1;t<=e;t+=1)i(`#best-project-${t}-gallery a`,"data-fancybox",`best-project-${t}-gallery`),(0,d.bindFancybox)(`[data-fancybox="best-project-${t}-gallery"]`)}(11);
//# sourceMappingURL=best-projects.ae7f6956.js.map
