


import '../scss/style.scss'



let itemsPerRow = 4;


const allItems = document.querySelectorAll(".brand__item");

const showButtonBrand = document.querySelector("#showBrand");

const hideButtonBrand = document.querySelector("#hideBrand");

function calculateRow() {
    if (window.innerWidth >= 1440) {
        return 4;
    } else if (window.innerWidth >= 768) {
        return 3;
    }
}

// скрыть


function hideLast() {
    itemsPerRow = calculateRow();
    const visible = itemsPerRow * 2;

    allItems.forEach(function (item, index) {
        if (index >= visible) {
            item.classList.add("close");
        } else {
            item.classList.remove("close");
        }
    });

    hideButtonBrand.style.display = "none";
    showButtonBrand.style.display = "block";
}

// показать
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

// ресайз окна
function resize() {
    if (hideButtonBrand.style.display !== "block") {
        hideLast();
    }
}

window.addEventListener("resize", resize);

// свайпер

const listItems = document.querySelectorAll(".brand__item");

const swiperWrapper = document.querySelector(".swiper-wrapper");

listItems.forEach((item) => {
    swiperWrapper.innerHTML += `
        <div class="swiper-slide">
            ${item.innerHTML}
        </div>
    `;
});

const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    spaceBetween: 16,
    slidesPerView: 'auto',
 });













