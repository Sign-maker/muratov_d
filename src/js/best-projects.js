import { LANG_DATA } from './lang-data.js';
import { LANG_DATA, LANG_MENU } from './lang-data.js';
import { LanguageHandler } from './language-functions.js';
import { navHandler } from './nav-functions.js';
import { goTopBtnHandler } from './go-top-btn.js';
import { bindFancybox, makeCarousel } from './fancybox-functions.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const select = new SlimSelect({
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
makeCarousels(11);
navHandler();
goTopBtnHandler();
bindFancyboxes(11);

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
    select.setSelected(lang);
  }

  function hideBackdrop(backdropEl) {
    backdropEl.classList.add('is-hidden');
  }
}
function makeCarousels(num) {
  for (let i = 1; i <= num; i += 1) {
    makeCarousel(document.querySelector(`#best-projects-page-carousel-${i}`));
  }
}

function bindFancyboxes(num) {
  for (let i = 1; i <= num; i += 1) {
    addAttributeToGroup(
      `#best-project-${i}-gallery a`,
      'data-fancybox',
      `best-project-${i}-gallery`
    );
    bindFancybox(`[data-fancybox="best-project-${i}-gallery"]`);
  }
}

function addAttributeToGroup(groupSelector, attributeName, attributeValue) {
  const galleryItemsRef = document.querySelectorAll(groupSelector);
  galleryItemsRef.forEach(item =>
    item.setAttribute(attributeName, attributeValue)
  );
}
