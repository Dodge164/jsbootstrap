const showListButton = document.getElementById('showList');
const showFormButton = document.getElementById('showForm');
const showHomeButton = document.getElementById('showHome');
const contentFrame = document.getElementById('contentFrame');

showListButton.addEventListener('click', () => {
  contentFrame.src = 'components/list.html';
});

showFormButton.addEventListener('click', () => {
  contentFrame.src = 'components/form.html';
});

showHomeButton.addEventListener('click', () => {
  contentFrame.src = 'components/home.html';
});
