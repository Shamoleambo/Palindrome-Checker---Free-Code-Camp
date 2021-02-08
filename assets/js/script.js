const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('keyup', e => {
    p.innerHTML = e.target.value;
});