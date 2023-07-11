import Notiflix from 'notiflix';
import bookCard from '../../temlpates/bookCard.hbs';
import { backDrop, bookCards, popUp, ulAll } from '../querrySelectors';
import getBookById from '../service/getBookById';
import getBooksByCategory from '../service/getBooksByCategory';

const categoryList = document.querySelector('.selected-category-books-list');

bookCards.forEach(item => {
  item.addEventListener('click', onBookCardClick);
});

if (window.location.pathname === '/main') {
  categoryList.addEventListener('click', onBookCardClick);
}
export async function onBookCardClick(ev) {
  ev.preventDefault();

  if (ev.target.nodeName === 'UL') {
    return;
  }

  const liEl = ev.target.closest('.pop-up-item');

  const bookInfo = await getBookById(liEl.id);

  const popUpItemMarkup = `<div class='book-modal-container'>
  <img src="${bookInfo.book_image}" alt="${bookInfo.title}" class="book-modal-img"/>
  
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${bookInfo.title}</h2>
        <h3 class="book-modal-author">${bookInfo.author}</h3>
        <p class='book-modal-desc'>${bookInfo.description}</p>
        <ul class='icon-book-modal-list'>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/vvPnCJ6/1-amazon.png" alt="amazon">
            </a>
        </li>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/nj6G7gJ/2-ibook.png" alt="ibook">
            </a>
        </li>
        <li>
            <a href="" target="_blank">
            <img src="https://i.ibb.co/fFPnVJN/3-bookshop.png" alt="bookshop">
            </a>
        </li>
        </ul>
    </div>
    </div>

    <button type="button" class='book-modal-btn js-add' id='js-book-modal-btn'>Add to shopping list</button>

    <button class='book-modal-close' id='js-book-modal-btn-close'>
    <svg class='icon-book-modal-close'><use href='./img/symbol-defs.svg#icon-close'></use></svg>
    </button>`;

  popUp.innerHTML = popUpItemMarkup;

  const addToShopListButton = document.querySelector('.book-modal-btn');
  const closeModalButton = document.querySelector('.book-modal-close');

  addToShopListButton.addEventListener('click', () => addToCart());

  const closeModal = () => {
    backDrop.classList.add('hidden');
    popUp.classList.add('hidden');
    document.body.style.overflow = 'scroll';
  };
  const addToCart = () => {
    let cartList = JSON.parse(localStorage.getItem('bookList'));

    if (!Array.isArray(cartList)) {
      cartList = [];
    }
    const bookId = bookInfo._id;
    if (cartList.includes(bookId)) {
      Notiflix.Notify.warning('This book is already in the list');
    } else {
      cartList.push(bookId);
      localStorage.setItem('bookList', JSON.stringify(cartList));
      Notiflix.Notify.success('Book has been added successfully');
    }
  };

  closeModalButton.addEventListener('click', () => closeModal());

  backDrop.addEventListener('click', ev => {
    if (!ev.target.classList.value.includes('backdrop')) {
      return;
    }

    closeModal();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !backDrop.classList.contains('hidden')) {
      closeModal();
    }
  });

  backDrop.classList.remove('hidden');
  popUp.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}