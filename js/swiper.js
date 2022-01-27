/* header swiper-video */
var swiper = new Swiper(".mySwiper1", {
   //Основные
   direction: "horizontal",
   spaceBetween: 20,
   slidesPerView: 1.3,
   /*   slidesPerGroup: 1, */

   //беск. прокрутка
   loop: true,
   /* loopFillGroupWithBlank: true, */

   grabCursor: true,

   //центрировать слайд
   /*  centeredSlides: true, */
   /* freeMode: true, */

   /* pagination */
   pagination: {
      /*  el: ".swiper-pagination",
    clickable: true, */
      //dots
      dynamicBullets: false,
   },

   //Кнопки
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   mousewheel: false,
   keyboard: true,

   //АвтоПлей
   /* autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  }, */

   //Фракции
   /* type: "fraction", */

   //scrollBar
   /*    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
   }, */

   //progressBar
   type: "progressbar",

   //Кастом точки с цифрами
   /*  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }, */

   /*   grid: {
    rows: 2,
  }, */

   //Брейкпоинты
   /*   breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  }, */
});

var swiper = new Swiper(".mySwiper2", {
   //Основные
   direction: "horizontal",
   spaceBetween: 20,
   slidesPerView: 3,
   /*   slidesPerGroup: 1, */

   //беск. прокрутка
   loop: false,
   /* loopFillGroupWithBlank: true, */

   grabCursor: true,

   //центрировать слайд
   /*  centeredSlides: true, */
   /* freeMode: true, */

   /* pagination */
   pagination: {
      /*  el: ".swiper-pagination",
    clickable: true, */
      //dots
      dynamicBullets: false,
   },

   //Кнопки
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   mousewheel: false,
   keyboard: true,

   //АвтоПлей
   /* autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  }, */

   //Фракции
   /* type: "fraction", */

   //scrollBar
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
   },

   //progressBar
   type: "progressbar",

   //Кастом точки с цифрами
   /*  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }, */

   /*   grid: {
    rows: 2,
  }, */

   //Брейкпоинты
   breakpoints: {
      280: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      320: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      380: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 35,
      },
   },
});

/* reviews swiper */
var swiper = new Swiper(".mySwiper3", {
   //Основные
   direction: "horizontal",
   spaceBetween: 20,
   slidesPerView: 1.1,
   /*   slidesPerGroup: 1, */

   //беск. прокрутка
   loop: false,
   /* loopFillGroupWithBlank: true, */

   grabCursor: true,

   //центрировать слайд
   /*    centeredSlides: true,   */
   freeMode: true,

   /* pagination */
   pagination: {
      /*  el: ".swiper-pagination",
    clickable: true, */
      //dots
      dynamicBullets: false,
   },

   //Кнопки
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   mousewheel: false,
   keyboard: true,

   //АвтоПлей
   /* autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  }, */

   //Фракции
   /* type: "fraction", */

   //scrollBar
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
   },

   //progressBar
   type: "progressbar",

   //Кастом точки с цифрами
   /*  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }, */

   /*   grid: {
    rows: 2,
  }, */

   //Брейкпоинты
   breakpoints: {
      280: {
         slidesPerView: 1,
      },
      320: {
         slidesPerView: 1,
      },
      360: {
         slidesPerView: 1,
      },
      380: {
         slidesPerView: 1.4,
      },
      640: {
         slidesPerView: 1.2,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 1.2,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
   },
});

/* descriptionOfWay swiper */
var swiper = new Swiper(".mySwiper4", {
   //Основные
   direction: "horizontal",
   spaceBetween: 20,
   slidesPerView: 1.2,
   /*      slidesPerGroup: 2, */

   //беск. прокрутка
   loop: false,
   /* loopFillGroupWithBlank: true, */

   grabCursor: true,

   //центрировать слайд
   /*    centeredSlides: true,   */
   freeMode: false,

   /* pagination */
   pagination: {
      /*  el: ".swiper-pagination",
    clickable: true, */
      //dots
      dynamicBullets: false,
   },

   //Кнопки
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   mousewheel: false,
   keyboard: true,

   //АвтоПлей
   /* autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  }, */

   //Фракции
   /* type: "fraction", */

   //scrollBar
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
   },

   //progressBar
   type: "progressbar",

   //Кастом точки с цифрами
   /*  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }, */

   /*   grid: {
    rows: 2,
  }, */

   /*  //Брейкпоинты
   breakpoints: {
      280: {
         slidesPerView: 1,
      },
      320: {
         slidesPerView: 1,
      },
      360: {
         slidesPerView: 1,
      },
      380: {
         slidesPerView: 1,
      },
      640: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 1.4,
         spaceBetween: 20,
      },
   }, */
});

/* reviews -reviewExcursion swiper */
var swiper = new Swiper(".mySwiper5", {
   //Основные
   direction: "horizontal",
   spaceBetween: 20,
   slidesPerView: 1.2,
   /*      slidesPerGroup: 2, */

   //беск. прокрутка
   loop: false,
   /* loopFillGroupWithBlank: true, */

   grabCursor: true,

   //центрировать слайд
   /*    centeredSlides: true,   */
   freeMode: false,

   /* pagination */
   pagination: {
      /*  el: ".swiper-pagination",
    clickable: true, */
      //dots
      dynamicBullets: false,
   },

   //Кнопки
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   mousewheel: false,
   keyboard: true,

   //АвтоПлей
   /* autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  }, */

   //Фракции
   /* type: "fraction", */

   //scrollBar
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
   },

   //progressBar
   type: "progressbar",

   //Кастом точки с цифрами
   /*  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }, */

   /*   grid: {
    rows: 2,
  }, */

   //Брейкпоинты
   breakpoints: {
      280: {
         slidesPerView: 1.2,
      },
      320: {
         slidesPerView: 1.4,
      },
      360: {
         slidesPerView: 1,
      },
      380: {
         slidesPerView: 1.2,
      },
      640: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      860: {
         slidesPerView: 1.5,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 1.5,
         spaceBetween: 20,
      },
   },
});
