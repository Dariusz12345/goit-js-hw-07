// Znalezienie wszystkich elementów <li> o klasie 'item' w liście #categories
const categories = document.querySelectorAll('#categories .item');

// Wyświetlenie liczby kategorii
console.log(`Number of categories: ${categories.length}`);

// Iteracja po każdej kategorii
categories.forEach(category => {
  const title = category.querySelector('h2').textContent; // Znajduje tytuł (tekst <h2>)
  const elementsCount = category.querySelectorAll('ul li').length; // Liczy zagnieżdżone <li>
  
  // Wyświetlenie informacji w konsoli
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
