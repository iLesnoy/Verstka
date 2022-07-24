
const debounce = (fn, ms) => {
let timeout;
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }

        clearTimeout(timeout);
        timeout = setTimeout(fnCall,ms)
    };
}

function onChange(e) {
    console.log(e.target.value)
    alertOne();
}

onChange = debounce(onChange,200);

document.getElementById("search_text").addEventListener('keyup', onChange);

function alertOne() {
    searchItem();
};