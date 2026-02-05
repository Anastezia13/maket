


import '../scss/style.scss'

// бренды

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








// типы













// цены


const services = [
    ["Диагностика", "Бесплатно", "30 мин"],
    ["Замена дисплея", "1 000 ₽", "30–120 мин"],
    ["Замена полифонического динамика", "1 000 ₽", "30–120 мин"],
    ["Тестирование с выдачей технического заключения", "1 000 ₽", "30–120 мин"],
    ["Замена программного обеспечения", "1 000 ₽", "30–120 мин"]
];



document.querySelector('.price__tab').innerHTML = `
    <table class="price-table">
        <tr><th>Услуга</th><th>Цена</th><th>Срок</th><th></th></tr>
        ${services.map(s => `
            <tr>
                <td>${s[0]}</td>
                <td>${s[1]}</td>
                <td>${s[2]}</td>
                <td><button class="order-btn">ЗАКАЗАТЬ ></button></td>
            </tr>
        `).join('')}
    </table>
`;






// боковое меню






// Открыть меню
document.getElementById('openMenuBtn').onclick = () => {
    document.getElementById('sidebar').style.display = 'flex';
};

// Закрыть меню
document.getElementById('closeMenuBtn').onclick = () => {
    document.getElementById('sidebar').style.display = 'none';
};











































// заказать звонок 




document.querySelector('.btn-call').addEventListener('click', () => {
    document.querySelector('.call').classList.toggle('active');
});

document.getElementById('cls-call').addEventListener('click', () => {
    document.querySelector('.call').classList.remove('active');
});