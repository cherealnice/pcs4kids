import { Component } from '@angular/core';

import { BOOKS } from '../../constants/index';

@Component({
    selector: 'page-audiobooks',
    templateUrl: './audioBooks.component.html',
    styleUrls: ['./audioBooks.component.css'],
})

class AudioBooks {
    title = 'AudioBooks';
    books = BOOKS;
    config = CONFIG;
};

const CONFIG = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 16,
};

export const onBookClick = book => history.pushState({}, '', book.url);

export default AudioBooks;