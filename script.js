const allItems = document.querySelectorAll(".brand__item");

const showButton = document.querySelector("#show");

const hideButton = document.querySelector("#hide");

function hideLast() {
    allItems.forEach(function (item, index) {
        if (index >= 8) {
            item.classList.add("close");
        } else {
            item.classList.remove("close");
        }
    });

    hideButton.style.display = "none";
    showButton.style.display = "block";
}

function showAll() {
    allItems.forEach(function (item) {
        item.classList.remove("close");
    });

    showButton.style.display = "none";
    hideButton.style.display = "block";
}

window.addEventListener("load", function () {
    hideLast();
    showButton.addEventListener("click", showAll);
    hideButton.addEventListener("click", hideLast);
});

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


const brandList = document.querySelector(".brand__list");


// brandList.innerHTML = `
//     <div class="swiper">
//         ${Array.from(brandList.querySelectorAll('.brand__item')).map(item => `
//             <div class="brand__item">
//                 ${item.innerHTML}
//             </div>
//         `).join('')}
//     </div>
//     <div class="swiper-pagination"></div>
// `;











// const swiperHTML = `
//     <div class="swiper">
//         <div class="swiper__wrap"></div>

//         <div class="swiper__btn next"></div>
//         <div class="swiper__btn prev"></div>

//         <div class="swiper__pagination"></div>
//         <div class="swiper__schrollbar"></div>
    
//     </div>
// `;

// brandList.insertAdjacentHTML('afterend', swiperHTML);

// const swiperWrapper = document.querySelector('.swiper__wrap');
// const listItems = brandList.querySelectorAll('.brand__item');

// listItems.forEach(item => {
//   const slide = document.createElement('div');
//   slide.className = 'swiper-slide';
//   slide.innerHTML = item.innerHTML;
//   swiperWrapper.appendChild(slide);
// });


// // brandList.style.display = 'none';



const swiper = new Swiper('.swiper', {

    slidesPerView: 1.2, 
    spaceBetween: 20, 

    // breakpoints: {
    //     320: {enabled: true},
    //     768: {enabled: false},
    //     1024: {enabled: false},
    // },

    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },

    pagination: {
        el: ".swiper__pagination",
        clickable: true,
    },

    scrollbar: {
        el: ".swiper__schrollbar",
        draggable: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    // autoplay loop

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // virtual: {
    //     slides: (function () {
    //         let slide = [];
    //         for (let i = 0; i < 15; i++) {
    //             slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
    //         }
    //         return slide;
    //     })(),
    // },
});
