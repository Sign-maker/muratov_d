!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),r.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),r.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),r.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var o={main:{"hero-name":{en:"Dmytro",pl:"Dymitr",uk:"Дмитро",ru:"Дмитрий"},"hero-surname":{en:"Muratov",pl:"Muratov",uk:"Муратов",ru:"Муратов"},"hero-profession":{en:"The head of an advertising agency in Ukraine before the war",pl:"Kierownik agencji reklamowej w Ukrainie przed wojną",uk:"Керівник рекламного агентства в Україні до війни.",ru:"Руководитель рекламного агентства в Украине до войны"},"hero-ocupation":{en:"Production of outdoor advertising and ventilated facades",pl:"Produkcja reklamy zewnętrznej i elewacji wentylowanych",uk:"Виробництво зовнішньої реклами і вентильованих фасадів",ru:"Производство наружной рекламы и вентилируемых фасадов"},"hero-question":{en:"Who am I?",pl:"Kim jestem?",uk:"Хто я?",ru:"Кто я?"},"hero-futures1-top":{en:"years of",pl:"lat",uk:"років",ru:"лет"},"hero-futures1-bottom":{en:"experience",pl:"doświadczenia",uk:"досвіду",ru:"опыта"},"hero-futures2-top":{en:"completed",pl:"zrealizowanych",uk:"реалізованих",ru:"реализованных"},"hero-futures2-bottom":{en:"projects",pl:"projektów",uk:"проєктів",ru:"проектов"},"hero-futures3-top":{en:"super done",pl:"zrobione super",uk:"зроблено супер",ru:"сделано супер"},"hero-skill-item1":{en:"Managed the team",pl:"Zarządzałem zespołem",uk:"Керував колективом",ru:"Руководил коллективом"},"hero-skill-item2":{en:"Communicated with clients",pl:"Komunikowałem się z klientami",uk:"Комунікував з клієнтами",ru:"Коммуницировал с клиентами"},"hero-skill-item3":{en:"Sticked to deadlines",pl:"Dotrzymałem ustalonych terminów",uk:"Дотримувався дедлайнів",ru:"Придерживался дедлайнов"},"hero-skill-item4":{en:"Implemented projects",pl:"Realizowałem projekty",uk:"Реалізовував проекти",ru:"Реализовывал проекты"},"hero-skill-item5":{en:"Organized production processes",pl:"Organizowałem procesy pracy",uk:"Організовував виробничі процеси",ru:"Организовывал производственные процессы"},menu0:{en:"About me",pl:"Kim jestem",uk:"Про мене",ru:"Обо мне"},menu1:{en:"Solutions",pl:"Rozwiązania",uk:"Рішення",ru:"Решения"},menu2:{en:"Best projects",pl:"Najlepsze projekty",uk:"Найкращі проекти",ru:"Лучшие проекты"},"menu2-sub":{en:"Project gallery",pl:"Galeria projektów",uk:"Галерея проектів",ru:"Галерея проектов"},menu3:{en:"Hard skills",pl:"Umiejętności",uk:"Навички",ru:"Навыки"},menu4:{en:"Portfolio",pl:"Realizacje",uk:"Портфоліо",ru:"Портфолио"},"menu4-sub":{en:"Portfolio gallery",pl:"Galeria realizacji",uk:"Галерея робіт",ru:"Галерея работ"}},page2:{m1:{en:"Main-page",ru:"Главная",pl:"główna"}}},u=r("8MBJY"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){var n=i.default(e,t,"get");return s.default(e,n)};var i=d(r("1UHsN")),s=d(r("ffZzF"));function d(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,n){f.default(e,t),t.set(e,n)};var p,f=(p=r("5k7tO"))&&p.__esModule?p:{default:p};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,n){var a=m.default(e,t,"set");return y.default(e,a,n),n};var m=h(r("1UHsN")),y=h(r("jdVyQ"));function h(e){return e&&e.__esModule?e:{default:e}}var k=r("a2hTj"),v=r("hKHmD"),w=new WeakMap,b=new WeakMap,L=new WeakMap,j=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(u)(this,t),e(c)(this,w,{writable:!0,value:"en"}),e(c)(this,b,{writable:!0,value:""}),e(c)(this,L,{writable:!0,value:["en","uk","ru","pl"]}),this.langElems=n,this.LANG_DATA=a}return e(k)(t,[{key:"getLangOnLoad",value:function(){return e(g)(this,b,this.readLangFromLocalStorage()||this.getBrowserLang()||e(l)(this,w))}},{key:"getBrowserLang",value:function(){var e=window.navigator.language.split("-")[0];return!!this.isLangInList(e)&&e}},{key:"isLangInList",value:function(t){return e(l)(this,L).some((function(e){return e===t}))}},{key:"language",get:function(){return e(l)(this,b)},set:function(t){e(g)(this,b,t)}},{key:"readLangFromLocalStorage",value:function(){try{var e=JSON.parse(localStorage.getItem(t.USER_LANG));return!!this.isLangInList(e)&&e}catch(e){return!1}}},{key:"writeLangToLocalStorage",value:function(){localStorage.setItem(t.USER_LANG,JSON.stringify(e(l)(this,b)))}},{key:"applyLangToMarkup",value:function(){var t,n=this.langElems,a=this.LANG_DATA,r=e(l)(this,b),o=document.body.dataset.pageId;function u(e){e.classList.remove("placeholder")}t=r,document.querySelector("html").setAttribute("lang",t),n.forEach((function(e){try{var t=a[o][e.dataset.lang][r];t&&(e.textContent=t,u(e))}catch(t){u(e)}}))}},{key:"init",value:function(){this.getLangOnLoad(),this.applyLangToDocument()}},{key:"applyLangToDocument",value:function(){this.writeLangToLocalStorage(),this.applyLangToMarkup()}}]),t}();e(v)(j,"USER_LANG","userLang");var _,x,z=r("kIc1i"),M=r("bBqzh"),O=r("88rUX");window.addEventListener("load",(function(e){console.log("load\n")})),document.addEventListener("readystatechange",(function(e){console.log("readystate: ".concat(document.readyState,"\n"))})),document.addEventListener("DOMContentLoaded",(function(e){console.log("DOMContentLoaded\n")})),function(){var e=document.querySelectorAll("[data-lang]"),t=document.querySelector(".backdrop"),n=document.querySelector("#lang-select");n.addEventListener("change",(function(e){a.language=e.target.value,a.applyLangToDocument()}));var a=new j(e,o);a.init(),u=n,l=a.language,u.value=l,r=t,r.classList.add("is-hidden");var r;var u,l}(),_=document.getElementById("best-projects-carousel"),x=document.getElementById("portfolio-carousel"),(0,O.makeCarousel)(_),(0,O.makeCarousel)(x),(0,M.goTopBtnHandler)(),(0,O.bindFancybox)('[data-fancybox="hard-skills-projects-gallary"'),(0,O.bindFancybox)('[data-fancybox="hard-skills-equipment-gallary"]'),(0,O.bindFancybox)('[data-fancybox="hard-skills-electro-gallary"]'),(0,O.bindFancybox)('[data-fancybox="hard-skills-color-gallary"]'),(0,O.bindFancybox)('[data-fancybox="best-projects-gallery"]'),(0,O.bindFancybox)('[data-fancybox="portfolio-gallery"]'),(0,z.navHandler)()}();
//# sourceMappingURL=index.9672e40f.js.map