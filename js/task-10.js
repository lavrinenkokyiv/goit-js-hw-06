function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const inputEl = document.querySelector('input')
  const createBtn = document.querySelector('[data-create]')
  const destroyBtn = document.querySelector('[data-destroy]')
  const boxesEl = document.querySelector('#boxes')

  createBtn.addEventListener('click', () => {
    if (!inputEl.value) {
      console.log('Введіть значення');
      return
    }
    const amount = Number(inputEl.value)
    for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div')
    boxEl.style.width = `${30 + i*10}px`
    boxEl.style.height = `${30 + i*10}px`
    boxEl.style.backgroundColor = getRandomHexColor()
    boxesEl.append(boxEl)
    }
    inputEl.value = ''
  })

  destroyBtn.addEventListener('click', () => {
    boxesEl.innerHTML = ''})