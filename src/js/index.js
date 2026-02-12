import '../scss/style.scss'

// бренды

let itemsPerRow = 4

const allItems = document.querySelectorAll('.brand__item')

const showButtonBrand = document.querySelector('#showBrand')

const hideButtonBrand = document.querySelector('#hideBrand')

function calculateRow() {
    if (window.innerWidth >= 1440) {
        return 4
    } else if (window.innerWidth >= 768) {
        return 3
    }
}

// скрыть

function hideLast() {
    itemsPerRow = calculateRow()
    const visible = itemsPerRow * 2

    allItems.forEach(function (item, index) {
        if (index >= visible) {
            item.classList.add('close')
        } else {
            item.classList.remove('close')
        }
    })

    hideButtonBrand.style.display = 'none'
    showButtonBrand.style.display = 'block'
}

// показать
function showAll() {
    allItems.forEach(function (item) {
        item.classList.remove('close')
    })

    showButtonBrand.style.display = 'none'
    hideButtonBrand.style.display = 'block'
}

window.addEventListener('load', function () {
    hideLast()
    showButtonBrand.addEventListener('click', showAll)
    hideButtonBrand.addEventListener('click', hideLast)
})

// ресайз окна
function resize() {
    if (hideButtonBrand.style.display !== 'block') {
        hideLast()
    }
}

window.addEventListener('resize', resize)

// бренды

document.addEventListener('DOMContentLoaded', function () {
    // свайпер бренд
    const brandItems = document.querySelectorAll('.brand__item')
    const brandWrapper = document.querySelector(
        '.swiper--brand .swiper-wrapper'
    )

    if (brandItems.length && brandWrapper) {
        brandWrapper.innerHTML = ''
        brandItems.forEach((item) => {
            brandWrapper.innerHTML += `<div class="swiper-slide">${item.innerHTML}</div>`
        })

        new Swiper('.swiper--brand', {
            spaceBetween: 16,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    }

    // свайпер типы
    const typeItems = document.querySelectorAll('.type__item')
    const typeWrapper = document.querySelector('.swiper--type .swiper-wrapper')

    if (typeItems.length && typeWrapper) {
        typeWrapper.innerHTML = ''
        typeItems.forEach((item) => {
            typeWrapper.innerHTML += `<div class="swiper-slide">${item.innerHTML}</div>`
        })

        new Swiper('.swiper--type', {
            spaceBetween: 16,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    }

    // свайпер цены
    const services = [
        ['Диагностика', 'Бесплатно', '30 мин'],
        ['Замена дисплея', '1 000 ₽', '30–120 мин'],
        ['Замена динамика', '1 000 ₽', '30–120 мин'],
        ['Тестирование', '1 000 ₽', '30–120 мин'],
        ['Замена ПО', '1 000 ₽', '30–120 мин']
    ]

    const priceWrapper = document.querySelector(
        '.swiper--price .swiper-wrapper'
    )

    if (priceWrapper) {
        priceWrapper.innerHTML = ''
        services.forEach((service) => {
            priceWrapper.innerHTML += `
                <div class="swiper-slide">
                    <div>${service[0]}</div>
                    <div>${service[1]}</div>
                    <div>${service[2]}</div>
                    <button class="order-btn">ЗАКАЗАТЬ ></button>
                </div>
            `
        })

        new Swiper('.swiper--price', {
            spaceBetween: 16,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    }
})

// типы

// цены

const services = [
    ['Диагностика', 'Бесплатно', '30 мин'],
    ['Замена дисплея', '1 000 ₽', '30–120 мин'],
    ['Замена полифонического динамика', '1 000 ₽', '30–120 мин'],
    ['Тестирование с выдачей технического заключения', '1 000 ₽', '30–120 мин'],
    ['Замена программного обеспечения', '1 000 ₽', '30–120 мин']
]

document.querySelector('.price__tab').innerHTML = `
    <table class="price-table">
        <tr><th>Услуга</th><th>Цена</th><th>Срок</th><th></th></tr>
        ${services
            .map(
                (s) => `
            <tr>
                <td>${s[0]}</td>
                <td>${s[1]}</td>
                <td>${s[2]}</td>
                <td><button class="order-btn">ЗАКАЗАТЬ ></button></td>
            </tr>
        `
            )
            .join('')}
    </table>
`

// боковое меню
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('sidebar--open')

    if (sidebar.classList.contains('sidebar--open')) {
        document.body.classList.add('sidebar--open')
    } else {
        document.body.classList.remove('sidebar--open')
    }
}

document.querySelector('.btn-burger').addEventListener('click', toggleSidebar)
document.querySelector('.btn-exit').addEventListener('click', toggleSidebar)

// заказать звонок
document.querySelector('.btn-call').addEventListener('click', () => {
    document.querySelector('.call').classList.add('active')
    document.body.classList.add('call-open')
})

document.getElementById('cls-call').addEventListener('click', () => {
    document.querySelector('.call').classList.remove('active')
    document.body.classList.remove('call-open')
})

// обратная связь
document.querySelector('.btn-chat').addEventListener('click', () => {
    document.querySelector('.feedback').classList.add('active')
    document.body.classList.add('feedback-open')
})

document.getElementById('cls-feedback').addEventListener('click', () => {
    document.querySelector('.feedback').classList.remove('active')
    document.body.classList.remove('feedback-open')
})

// общий оверлей
document.querySelector('.overlay').addEventListener('click', () => {
    // закрыть звонок
    document.querySelector('.call').classList.remove('active')
    document.body.classList.remove('call-open')

    // закрыть обратную связь
    document.querySelector('.feedback').classList.remove('active')
    document.body.classList.remove('feedback-open')

    // закрыть сайдбар
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.remove('sidebar--open')
    document.body.classList.remove('sidebar--open')
})
