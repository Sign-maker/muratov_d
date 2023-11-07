import { LANG_DATA } from './lang-data.js';
import { LanguageHandler } from './language-functions.js';
import { navHandler } from './nav-functions.js';
import { goTopBtnHandler } from './go-top-btn.js';
import { bindFancybox, makeCarousel } from './fancybox-functions.js';

window.addEventListener('load', event => {
  console.log('load\n');
});

document.addEventListener('readystatechange', event => {
  console.log(`readystate: ${document.readyState}\n`);
});

document.addEventListener('DOMContentLoaded', event => {
  console.log('DOMContentLoaded\n');
});

commonLangHandler();
getCarousels();
goTopBtnHandler();
bindFancyboxes();
navHandler();

function commonLangHandler() {
  const langElems = document.querySelectorAll('[data-lang]');
  const backdropEl = document.querySelector('.backdrop');
  const langSelectorEl = document.querySelector('#lang-select');

  langSelectorEl.addEventListener('change', onSelChange);

  const langHandler = new LanguageHandler(langElems, LANG_DATA);

  langHandler.init();
  markItemInSelector(langSelectorEl, langHandler.language);
  hideBackdrop(backdropEl);

  function onSelChange(evt) {
    langHandler.language = evt.target.value;
    langHandler.applyLangToDocument();
  }

  function markItemInSelector(langSelectorEl, lang) {
    langSelectorEl.value = lang;
  }

  function hideBackdrop(backdropEl) {
    backdropEl.classList.add('is-hidden');
  }
}

function getCarousels() {
  const container1 = document.getElementById('best-projects-carousel');
  const container2 = document.getElementById('portfolio-carousel');

  makeCarousel(container1);
  makeCarousel(container2);
}

function bindFancyboxes() {
  bindFancybox('[data-fancybox="hard-skills-projects-gallary"');
  bindFancybox('[data-fancybox="hard-skills-equipment-gallary"]');
  bindFancybox('[data-fancybox="hard-skills-electro-gallary"]');
  bindFancybox('[data-fancybox="hard-skills-color-gallary"]');
  bindFancybox('[data-fancybox="best-projects-gallery"]');
  bindFancybox('[data-fancybox="portfolio-gallery"]');
}
