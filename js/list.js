const searchInput = document.getElementById('searchInput');
const fishList = document.getElementById('fishList').getElementsByTagName('li');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < fishList.length; i++) {
    const fishName = fishList[i].textContent.toLowerCase();
    if (fishName.includes(searchTerm)) {
      fishList[i].style.display = 'block';
    } else {
      fishList[i].style.display = 'none';
    }
  }
});
