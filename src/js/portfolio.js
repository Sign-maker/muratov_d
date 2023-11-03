import { portfolioGalleryItems, paths } from './portfolio-items.js';
import { categories } from './porfolio-categories.js';
import { destroyFancybox, bindFancybox } from './fancybox-functions.js';
import { navHandler } from './nav-functions.js';
import { goTopBtnHandler } from './go-top-btn.js';

const {
  jpegBigPath,
  webpThumbPath,
  jpegThumbPath,
  webpThumbPath2x,
  jpegThumbPath2x,
  namePrefix,
  jpegBigSufix,
  jpegThumbSufix,
  webpThumbSufix,
  jpegThumbSufix2x,
  webpThumbSufix2x,
} = paths;

const buttonsListRef = document.querySelector('#filterBtnContainer');
const galeryListRef = document.querySelector('.portfolio-list');

const CURRENT_PORTFOLIO_CATEGORY_ID = 'currentPortfolioCategotyId';
const ACTIVE_STATE = 'active';
const NON_ACTIVE_STATE = 'non-active';
const ALL_CATEGORY_ID = categories[0].categoryId;

let currentCategoryId =
  localStorage.getItem(CURRENT_PORTFOLIO_CATEGORY_ID) ?? ALL_CATEGORY_ID;

filterButtonsMarkup(categories);
changeBtnState(currentCategoryId, ACTIVE_STATE);
galleryMarkup(portfolioGalleryItems);
const galleryItemsRef = document.querySelectorAll(
  '.portfolio-list .portfolio-item '
);
showGalleryForCategory(currentCategoryId);
buttonsListRef.addEventListener('click', onBtnClick);
navHandler();
goTopBtnHandler();

function filterButtonsMarkup(categories) {
  const markup = categories
    .map(
      category => `<li class="portfolio-filter-item">
              <button
                type="button"
                class="btn filter-btn"
                data-category-id="${category.categoryId}"
              >
                ${category.categoryName}
              </button>
            </li>`
    )
    .join('');

  buttonsListRef.innerHTML = markup;
}

function galleryMarkup(galleryItems) {
  const markup = galleryItems
    .map(
      item =>
        `<li class="portfolio-item" data-category-id="${item.categoryId}">
              <div class="portfolio-image proportion-type2">
                <a class="porfolio-page-img-link" href="${
                  jpegBigPath + namePrefix + item.nameNumber + jpegBigSufix
                }">
                  <picture>
                    <source
                          srcset="${
                            webpThumbPath +
                            namePrefix +
                            item.nameNumber +
                            webpThumbSufix
                          } 1x,
                          ${
                            webpThumbPath2x +
                            namePrefix +
                            item.nameNumber +
                            webpThumbSufix2x
                          } 2x"
                          type="image/webp"
                    />
                    <source
                          srcset="${
                            jpegThumbPath +
                            namePrefix +
                            item.nameNumber +
                            jpegThumbSufix
                          } 1x,
                          ${
                            jpegThumbPath2x +
                            namePrefix +
                            item.nameNumber +
                            jpegThumbSufix2x
                          } 2x"
                          type="image/jpeg"
                    />
                      
                    <img
                      loading="lazy"
                      src="${
                        jpegThumbPath +
                        namePrefix +
                        item.nameNumber +
                        jpegThumbSufix
                      }"
                      alt="${
                        categories.find(
                          ({ categoryId }) => categoryId === item.categoryId
                        ).categoryName
                      }"
                    />
                  </picture>
                </a>
              </div>
          </li>`
    )
    .join('');
  galeryListRef.innerHTML = markup;
}

function changeBtnState(categoryId, state) {
  const btn = document.querySelector(
    `button[data-category-id="${categoryId}"]`
  );
  if (!btn) {
    return;
  }

  if (state === ACTIVE_STATE) {
    btn.classList.add('active');
  }

  if (state === NON_ACTIVE_STATE) {
    btn.classList.remove('active');
  }
}

function showGalleryForCategory(categoryId) {
  galleryItemsRef.forEach(galleryItem => {
    const galleryLinkRef = galleryItem.querySelector('a');
    const { dataset, classList } = galleryItem;
    if (categoryId === ALL_CATEGORY_ID) {
      classList.add('show');
      galleryLinkRef.setAttribute('data-fancybox', 'gallery');
    } else {
      if (dataset.categoryId === categoryId) {
        classList.add('show');
        galleryLinkRef.setAttribute('data-fancybox', 'gallery');
      } else {
        classList.remove('show');
        galleryLinkRef.removeAttribute('data-fancybox');
      }
    }
  });
  destroyFancybox();
  bindFancybox(`[data-fancybox="gallery"]`);
}

function onBtnClick({ target }) {
  if (target.nodeName !== 'BUTTON') {
    if (target.closest('button')) {
      target = target.closest('button'); //if translator
    } else return;
  }
  const nextCategoryId = target.dataset.categoryId;

  if (nextCategoryId === currentCategoryId) {
    return;
  }

  changeBtnState(currentCategoryId, NON_ACTIVE_STATE);
  changeBtnState(nextCategoryId, ACTIVE_STATE);
  currentCategoryId = nextCategoryId;
  localStorage.setItem(CURRENT_PORTFOLIO_CATEGORY_ID, currentCategoryId);

  showGalleryForCategory(currentCategoryId);
}

// admin function=====================================

// const galleryArr = [];
// const beginNum = 1000;
// const endNum = 1258;
// console.log(createGalleryArr(galleryArr));
// function createGalleryArr(galleryArr) {
//   for (let i = beginNum; i <= endNum; i += 1) {
//     let obj = {};
//     obj.nameNumber = `${i}`;
//     obj.categoryId = "1";
//     galleryArr.push(obj);
//   }
//   return galleryArr;
// }
