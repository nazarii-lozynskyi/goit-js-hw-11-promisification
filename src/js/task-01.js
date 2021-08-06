// /* Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. */

const categoriesAllEl = document.querySelectorAll('.item').length;
console.log(`В списке ${categoriesAllEl} категории.`);

// /* Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
// и количество элементов в категории (всех вложенных в него элементов li). */

// const categoriesEl = document.querySelectorAll('.item');
// console.log(
//   `Категория: ${
//     categoriesEl[0].querySelector('h2').textContent
//   }, Количество элементов: ${categoriesEl[0].querySelectorAll('li').length}.`
// );
// console.log(
//   `Категория: ${
//     categoriesEl[1].querySelector('h2').textContent
//   }, Количество элементов: ${categoriesEl[1].querySelectorAll('li').length}.`
// );
// console.log(
//   `Категория: ${
//     categoriesEl[2].querySelector('h2').textContent
//   }, Количество элементов: ${categoriesEl[2].querySelectorAll('li').length}.`
// );

const categoriesEl = document.querySelectorAll('.item');
categoriesEl.forEach(category => {
  console.log('Категория:', category.querySelector('h2').textContent);
  console.log('Количество элементов:', category.querySelectorAll('li').length);
});
