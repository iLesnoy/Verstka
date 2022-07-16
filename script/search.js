var cata;
var listElm = document.querySelector('.main-body');
var jesonObject;
var elem;
var elemDescript;
var elemPrice;
var image;
var tagName;
var offset = 10;
var limit = 20;


var categories = {
    "nature": "fish",
    "tecnology": "cat",
    // "books": "dog",
    // "nature": "parrot"
}
const category_form = document.getElementById('category-form');
const category_btn = document.getElementById('category_btn');
const search_list = document.querySelector(".search-result ul");
const cards = document.querySelector("#cards");
const search_input = document.querySelector("#search_text");

// загрузка категорий
uploadCategories(categories);




// открытие/закрытие вкладки с категориями
document.querySelector('#category_btn').addEventListener('click', function () {
    category_form.classList.toggle("inactive");
})


// срабатывает при выборе категории
// item.getAttribute("category-value") - id категории
// search_input.value - значение из поиска
document.querySelectorAll('.result-button').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        category_btn.innerHTML = item.innerHTML;
        //
        cata = item.getAttribute("category-value");
        searchByParam(cata);
        //
        category_form.classList.add("inactive");
    })
})


// срабатывает при наборе текста в поиске категорий
// this.value - значение из поиска для категорий
document.querySelector("#category-search-input").addEventListener("input", function () {
    removeResults();
    if (this.value !== "") {
        console.log("changed");
        var filtered = Object.fromEntries(Object.entries(categories).filter(([k, v]) => v.indexOf(this.value) !== -1));
        uploadCategories(filtered);
    } else {
        uploadCategories(categories);
    }

})


// добавляет новый результат (строчку) поиск категорий
function appendNewResult(key, value) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('result-button');
    a.setAttribute('category-value', key)
    a.innerHTML = value;
    li.append(a);
    li.setAttribute('class', 'item');
    search_list.appendChild(li);
}

// удаляет все текущие строчки из поиска категорий
function removeResults() {
    while (search_list.firstChild) {
        search_list.removeChild(search_list.lastChild);
    }
}

function uploadCategories(dict) {
    for (const [key, value] of Object.entries(dict)) {
        appendNewResult(key, value);
    }
}

function searchByParam() {
    for (var i = offset; i < limit; i++) {
        console.log(i);
        elem = fileRead(i, cata);

        image = elem["image"];
        tagName = elem["name"];
        elemDescript = elem["description"];
        elemPrice = elem["price"];


        var tovar = document.createElement('div');
        tovar.setAttribute('class', 'tovar');
        var icon_image = document.createElement('div');
        icon_image.setAttribute('class', 'icon-image');
        icon_image.innerHTML = image;

        var icon_doby = document.createElement('div');
        var text = document.createElement('p');
        text.innerText = tagName;

        var href = document.createElement('a');
        href.setAttribute('href', '#');
        href.innerHTML = "<a href='register.html'><img src='/images/favorite_black_24dp.svg' /></a>";


        var description = document.createElement('p');
        description.setAttribute('class', 'descr-style');
        description.innerText = elemDescript;

        var expiration = document.createElement('p');
        expiration.setAttribute('class', 'small');
        expiration.innerText = "Expiration 3 days";

        var line = document.createElement('div');
        line.setAttribute('class', 'line');

        var price = document.createElement('p');
        price.setAttribute('class', 'price');
        price.innerText = elemPrice;

        var button = document.createElement('button');
        button.setAttribute('class', 'add-button');
        button.innerText = "add"

        icon_doby.setAttribute('class', 'icon-body');
        icon_doby.appendChild(text);
        icon_doby.appendChild(href);
        icon_doby.appendChild(description);
        icon_doby.appendChild(expiration)
        icon_doby.appendChild(line);
        icon_doby.appendChild(price);
        icon_doby.appendChild(button);


        tovar.appendChild(icon_image);
        tovar.appendChild(icon_doby);
        listElm.appendChild(tovar);

        offset += 1;
    }
    offset === 10;
}

function fileRead(i, cata) {

    fetch("../data/main.json")
        .then(response => response.json())
        .then(data => {
            jesonObject = data.icons.find(item => item.category === cata && item.id === i);
            console.log(jesonObject);
        });
    return jesonObject;
}