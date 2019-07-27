const bodybg = document.querySelector('body');
const btnChange = document.querySelector('.changeColor');
const hex = document.querySelector('.hex');

const HexCol = '0123456789ABCDEF'.split('');

btnChange.addEventListener('click', getHex);

function getHex() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random()*HexCol.length);
        color += HexCol[random];
    }
    btnChange.style.color = color;
    bodybg.style.backgroundColor = color;
    hex.innerHTML = color;
}