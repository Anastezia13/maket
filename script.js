console.log();

const allItems = document.querySelectorAll(".brand__item");

const showButton = document.querySelector(".shw");

const hideButton = document.querySelector(".cls");

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
