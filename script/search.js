var offset = 10;
var limit = 20;
var filter;
var name;


// mainSerach(by name/description)
function searchItem(name) {
  var input = document.getElementById('search_text').value.toUpperCase();


  const container = document.getElementById('main-body');
  const cards = container.getElementsByClassName('tovar');

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".icon-body p.tovar-name");
    let descr = cards[i].querySelector(".icon-body p.descr-style");

    if (title.innerText.toUpperCase().indexOf(input) > -1 || descr.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
      mainSerachDebaunce();
    } else {
      cards[i].style.display = "none";
      mainSerachDebaunce();
    }
  }
}


// searchByCategory
function categorySearch(name) {

  input = document.getElementById("myInput").value.toUpperCase();

  const container = document.getElementById('main-body');
  const cards = container.getElementsByClassName('tovar');

  if (input != "") {
    for (let i = 0; i < cards.length; i++) {
      let category = cards[i].querySelector(".icon-body div.tovar-category");
      console.log(input.toUpperCase());
      categorySerachDebaunce();

      if (category.innerText.toUpperCase().indexOf(input) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < cards.length; i++) {
      let category = cards[i].querySelector(".icon-body div.tovar-category");
      console.log(name.toLowerCase());
      categorySerachDebaunce();

      if (category.innerText.toLowerCase().indexOf(name) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//category search
function filterFunction() {
  var input, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  name = filter;
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  categorySearch(filter);
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function mainSerachDebaunce() {
  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => { fn.apply(this, arguments) }

      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms)
    };
  }
  searchItem = debounce(searchItem, 200);
}

function categorySerachDebaunce() {
  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => { fn.apply(this, arguments) }

      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms)
    };
  }
  filterFunction = debounce(filterFunction, 200);
}
