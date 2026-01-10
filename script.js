const allItems = document.querySelectorAll(".brand__item");

const showButtonBrand = document.querySelector("#showBrand");

const hideButtonBrand = document.querySelector("#hideBrand");

function hideLast() {
    allItems.forEach(function (item, index) {
        if (index >= 8) {
            item.classList.add("close");
        } else {
            item.classList.remove("close");
        }
    });

    hideButtonBrand.style.display = "none";
    showButtonBrand.style.display = "block";
}

function showAll() {
    allItems.forEach(function (item) {
        item.classList.remove("close");
    });

    showButtonBrand.style.display = "none";
    hideButtonBrand.style.display = "block";
}

window.addEventListener("load", function () {
    hideLast();
    showButtonBrand.addEventListener("click", showAll);
    hideButtonBrand.addEventListener("click", hideLast);
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

// const showButtonAbout = document.querySelector("#showAbout");

// const hideButtonAbout = document.querySelector("#hideAbout");

// function hideAbout() {

// }

// function showAbout() {

// }

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

const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },


    slidesPerView: 'auto',
    spaceBetween: 16,

    
});



const listItems = document.querySelectorAll('.brand__item');

const swiperWrapper = document.querySelector('.swiper-wrapper');



listItems.forEach(item => {
    swiperWrapper.innerHTML += `
        <div class="swiper-slide">
            ${item.innerHTML}
        </div>
    `;
});




