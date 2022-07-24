var listElm = document.querySelector('.main-body');
var jesonObject;
var elem;
var elemDescript;
var elemPrice;
var image;
var tagName;
var offset = 11;
var limit;
var data;
var elemCategory;

function loadMore() {
  for (var i = offset; i < offset + 1; i++) {
    elem = fileRead(i);

    elemCategory = elem["category"];
    tagName = elem["name"];
    image = elem["image"];
    elemDescript = elem["description"];
    elemPrice = elem["price"];

    var tovar = document.createElement('div');
    tovar.setAttribute('class', 'tovar');
    var icon_image = document.createElement('div');
    icon_image.setAttribute('class', 'icon-image');
    icon_image.innerHTML = image;

    var icon_doby = document.createElement('div');
    var text = document.createElement('p');
    text.setAttribute('class', 'tovar-name');
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

    var category = document.createElement('div');
    category.setAttribute('class', 'tovar-category');
    category.innerText = elemCategory;

    icon_doby.setAttribute('class', 'icon-body');
    icon_doby.appendChild(text);
    icon_doby.appendChild(href);
    icon_doby.appendChild(description);
    icon_doby.appendChild(expiration)
    icon_doby.appendChild(line);
    icon_doby.appendChild(price);
    icon_doby.appendChild(button);
    icon_doby.appendChild(category);



    tovar.appendChild(icon_image);
    tovar.appendChild(icon_doby);
    listElm.appendChild(tovar);

  }
  offset += 1;
}


function fileRead(i) {
  fetch("../data/main.json")
    .then(response => response.json())
    .then(data => {
      jesonObject = data.icons.find(item => item.id === i);
    });
  return jesonObject;
}




function getDocHeight() {	// $(document).height() value depends on browser
  var D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}


document.addEventListener('DOMContentLoaded', function (e) {
  document.addEventListener('scroll', function (e) {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 200;
    if (currentScroll + modifier > documentHeight) {
      console.log('You are at the bottom!')
      loadMore();
      scrollDebaunce();
    }
  })
})


function scrollDebaunce(){ 
  const debounce = (fn, ms) => {
    let timeout;
        return function () {
            const fnCall = () => { fn.apply(this, arguments) }
    
            clearTimeout(timeout);
            timeout = setTimeout(fnCall,ms)
        };
    }
    loadMore = debounce(loadMore,300);
  }
