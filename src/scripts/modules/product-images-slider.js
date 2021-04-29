import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

// eslint-disable-next-line no-unused-vars
var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    noSwiping: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

