const state = document.getElementById('state');
const dec = document.getElementById('dec');
const res = document.getElementById('res');
const inc = document.getElementById('inc');

let count = 0;

const decrement = () => {
    count--;
    document.getElementById('state').innerText = count;
}

const reset = () => {
    count = 0;
    document.getElementById('state').innerText = count;
}

const increment = () => {
    count++;
    document.getElementById('state').innerText = count;
}

dec.addEventListener('click', decrement);
res.addEventListener('click', reset);
inc.addEventListener('click', increment);