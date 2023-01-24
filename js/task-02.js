const ingredient = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulRef = document.querySelector('#ingredients')

const task = ingredients => {
  return ingredients.map(ingredient =>{
  const allIngredients = document.createElement('li');
  allIngredients.textContent = ingredient;
  allIngredients.classList.add('item');
  return allIngredients;
  })
}
const result = task(ingredient)
ulRef.append(...result);