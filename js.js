const categories = document.querySelectorAll('.recom-category');
const descriptions = document.querySelectorAll('.recom-description');

categories.forEach((category) => {
  category.addEventListener('click', () => {
    categories.forEach((cat) => {
      cat.classList.remove('active');
    });

    category.classList.add('active');

    descriptions.forEach((desc) => {
      desc.classList.remove('show');
    });

    const categoryData = category.dataset.category;
    const description = document.querySelector(`.recom-description[data-category="${categoryData}"]`);
    description.classList.add('show');
  });
});
