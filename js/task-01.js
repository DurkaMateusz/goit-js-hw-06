const categoriesList = document.querySelectorAll('li.item');
const numberOfCategories = categoriesList.length;
console.log(`Number of categorie: ${numberOfCategories}`)
categoriesList.forEach(category => {
    const header = category.querySelector('h2');
    const categoryItems = category.querySelectorAll('li');
    console.log(`Category: ${header.textContent}`);
    console.log(`Elements: ${categoryItems.length}`);
});


