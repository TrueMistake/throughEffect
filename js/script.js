const text = document.getElementById('text');
const appText = document.getElementById('append');
const textArr = text.innerText.split('');

const newEl = document.createElement('h1');
newEl.innerHTML = `
	    ${textArr.map(letter => `<span class="letter" style="${randomVisibility()}">${letter}</span>`).join('')}`;
newEl.classList.add('overlay');
newEl.classList.add('head-title');

appText.appendChild(newEl);


function randomVisibility() {
    return Math.random() < 0.5 ? 'visibility: hidden' : 'visibility: visible';
}
