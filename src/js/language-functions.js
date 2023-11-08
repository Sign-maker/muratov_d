export class LanguageHandler {
  static USER_LANG = 'userLang';
  #defaultLang = 'en';
  #currentLang = '';
  #languagesList = ['en', 'uk', 'ru', 'pl'];
  constructor(langElems = [], langData = {}) {
    (this.langElems = langElems), (this.LANG_DATA = langData);
  }

  getLangOnLoad() {
    return (this.#currentLang =
      this.readLangFromLocalStorage() ||
      this.getBrowserLang() ||
      this.#defaultLang);
  }
  getBrowserLang() {
    const lang = window.navigator.language.split('-')[0];
    return this.isLangInList(lang) ? lang : false;
  }

  isLangInList(lang) {
    return this.#languagesList.some(alLang => alLang === lang);
  }

  set language(lang) {
    this.#currentLang = lang;
  }

  get language() {
    return this.#currentLang;
  }

  readLangFromLocalStorage() {
    try {
      const lang = JSON.parse(localStorage.getItem(LanguageHandler.USER_LANG));
      return this.isLangInList(lang) ? lang : false;
    } catch {
      return false;
    }
  }

  writeLangToLocalStorage() {
    localStorage.setItem(
      LanguageHandler.USER_LANG,
      JSON.stringify(this.#currentLang)
    );
  }

  applyLangToMarkup() {
    const { langElems, LANG_DATA } = this;
    const lang = this.#currentLang;
    const pageId = document.body.dataset.pageId;
    htmlLangSet(lang);

    langElems.forEach(langEl => {
      if (
        !LANG_DATA.hasOwnProperty(pageId) ||
        !LANG_DATA[pageId].hasOwnProperty(langEl.dataset.lang) ||
        !LANG_DATA[pageId][langEl.dataset.lang].hasOwnProperty(lang) ||
        !LANG_DATA[pageId][langEl.dataset.lang][lang]
      ) {
        if (langEl.classList.contains('placeholder')) {
          showLangEl(langEl);
        }
        return;
      }
      const content = LANG_DATA[pageId][langEl.dataset.lang][lang];
      langEl.textContent = content;
      showLangEl(langEl);
    });

    function showLangEl(langEl) {
      // langEl.style.visibility = 'visible';
      langEl.classList.remove('placeholder');
    }

    function htmlLangSet(lang) {
      document.querySelector('html').setAttribute('lang', lang);
    }
  }

  init() {
    this.getLangOnLoad();
    this.applyLangToDocument();
  }

  applyLangToDocument() {
    this.writeLangToLocalStorage();
    this.applyLangToMarkup();
  }
}
