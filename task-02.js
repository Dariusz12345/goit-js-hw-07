const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Znajdujemy element <ul> o ID 'ingredients'
const ingredientsList = document.querySelector('#ingredients');

// Tworzymy elementy <li> dla każdego składnika
const ingredientItems = ingredients.map(ingredient => {
  const li = document.createElement('li');  // Tworzymy element <li>
  li.textContent = ingredient;  // Dodajemy tekst składnika
  li.classList.add('item');  // Dodajemy klasę 'item'
  return li;
});

// Wstawiamy wszystkie elementy <li> do <ul> w jednej operacji
ingredientsList.append(...ingredientItems);