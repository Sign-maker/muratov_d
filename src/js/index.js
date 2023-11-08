import { LANG_DATA, LANG_MENU } from './lang-data.js';
import { LanguageHandler } from './language-functions.js';
import { navHandler } from './nav-functions.js';
import { goTopBtnHandler } from './go-top-btn.js';
import { bindFancybox, makeCarousel } from './fancybox-functions.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

// window.addEventListener('load', event => {
//   console.log('load\n');
// });

// document.addEventListener('readystatechange', event => {
//   console.log(`readystate: ${document.readyState}\n`);
// });

// document.addEventListener('DOMContentLoaded', event => {
//   console.log('DOMContentLoaded\n');
// });
new SlimSelect({
  select: '#lang-select',
  settings: {
    // Below are a list of optional fields
    // their values are the defaults
    disabled: false,
    alwaysOpen: false,
    showSearch: false,
    searchPlaceholder: 'Search',
    searchText: 'No Results',
    searchingText: 'Searching...',
    searchHighlight: false,
    closeOnSelect: true,
    contentLocation: document.body,
    contentPosition: 'absolute',
    openPosition: 'auto', // options: auto, up, down
    placeholderText: 'Select Value',
    allowDeselect: false,
    hideSelected: false,
    showOptionTooltips: false,
    minSelected: 0,
    maxSelected: 1000,
    timeoutDelay: 200,
    maxValuesShown: 20,
    maxValuesMessage: '{number} selected',
  },
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

  const pageId = document.body.dataset.pageId;
  LANG_DATA[pageId] = { ...LANG_DATA[pageId], ...LANG_MENU };

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
