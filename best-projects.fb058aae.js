var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){r[e]=o},e.parcelRequired7c6=t);var n=t("6JXw1"),a=t("2uOa8"),l=t("aEBcX");function c(e,o,r){document.querySelectorAll(e).forEach((e=>e.setAttribute(o,r)))}!function(e){for(let o=1;o<=e;o+=1)(0,l.makeCarousel)(document.querySelector(`#best-projects-page-carousel-${o}`))}(11),(0,n.navHandler)(),(0,a.goTopBtnHandler)(),function(e){for(let o=1;o<=e;o+=1)c(`#best-project-${o}-gallery a`,"data-fancybox",`best-project-${o}-gallery`),(0,l.bindFancybox)(`[data-fancybox="best-project-${o}-gallery"]`)}(11);
//# sourceMappingURL=best-projects.fb058aae.js.map
