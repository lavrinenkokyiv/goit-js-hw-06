const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const elementRef = ingredients.map(element => {
  const itemRef = document.createElement('li');
  itemRef.textContent = element;
  return itemRef;
}
  )
  ulEl.append(...elementRef)