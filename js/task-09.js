function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color')
const colorValue = document.querySelector('.color')
const bodyEl = document.querySelector('body')


colorValue.textContent = '#ffffff'
changeColorBtn.addEventListener('click', onChangeColorBtn)
function onChangeColorBtn(event) {
  event.preventDefault()
const newColor = getRandomHexColor()
  bodyEl.style.backgroundColor = newColor
  colorValue.innerHTML = `${newColor}`
  console.log(newColor);}