var listElm = document.querySelector('.main-body');
function fileRead(i) {
  fetch("../data/main.json")
    .then(response => response.json())
    .then(data => {
      const test = data.icons.find(item => item.id === i);
      Object.entries(test).forEach(key => {
        console.log(test["id"]);
        console.log(test["image"]);
        console.log(test["description"]);
        console.log(test["price"]);
      })
      console.log(test);
      return test;
    })
}

function loadMore() {

  for (var i = 0; i < 5; i++) {

    fileRead(i);
    
    var tovar = document.createElement('div');
    tovar.setAttribute('class', 'tovar');
    var icon_image = document.createElement('div');
    icon_image.setAttribute('class', 'icon-image');
    icon_image.innerHTML="<img src='/images/Kroxigor-Lizardmen-Warhammer-Fantasy-фэндомы-4073908.jpeg' class='icon-image'>";

    var icon_doby = document.createElement('div');
    var text = document.createElement('p');
    text.innerText = "Coupone Name"

    var href = document.createElement('a');
    href.setAttribute('href', '#');
    href.innerHTML = "<a href='register.html'><img src='/images/favorite_black_24dp.svg' /></a>";


    var description = document.createElement('p');
    description.setAttribute('class', 'descr-style');
    description.innerText = "Some Description";

    var line = document.createElement('div');
    line.setAttribute('class', 'line');

    var price = document.createElement('p');
    price.setAttribute('class', 'price');
    price.innerText = "500$";

    var button = document.createElement('button');
    button.setAttribute('class', 'add-button');
    button.innerText = "add"

    icon_doby.setAttribute('class', 'icon-body');
    icon_doby.appendChild(text);
    icon_doby.appendChild(href);
    icon_doby.appendChild(description);
    icon_doby.appendChild(line);
    icon_doby.appendChild(price);
    icon_doby.appendChild(button);


    tovar.appendChild(icon_image);
    tovar.appendChild(icon_doby);
    listElm.appendChild(tovar);

    console.log(tovar);
    return tovar;
  }
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
    }
  })
})
