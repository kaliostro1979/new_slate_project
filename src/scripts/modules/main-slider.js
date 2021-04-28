// import Swiper JS
// eslint-disable-next-line import/no-duplicates
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
// eslint-disable-next-line import/no-duplicates
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
