const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.getElementById(`ingredients`)
const markup = ingredients.map(ingredient=> { 
  const list = document.createElement(`li`);
  list.className = `item`;
  list.innerText = ingredient;

  return list

})
console.dir(ul)
ul.append(...markup)