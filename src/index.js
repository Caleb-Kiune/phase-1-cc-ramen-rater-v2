// index.js

// Callbacks
const handleClick = (ramen) => {
  document.querySelector('.detail-image').src = ramen.image;
  document.querySelector('.name').textContent = ramen.name;
  document.querySelector('.restaurant').textContent = ramen.restaurant;
  document.getElementById('rating-display').textContent = ramen.rating;
  document.getElementById('comment-display').textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newRamen = {
          name: e.target['new-name'].value,
          restaurant: e.target['new-restaurant'].value,
          image: e.target['new-image'].value,
          rating: e.target['new-rating'].value,
          comment: e.target['new-comment'].value
      };

      const img = document.createElement('img');
      img.src = newRamen.image;
      img.alt = newRamen.name;
      img.addEventListener('click', () => handleClick(newRamen));
      document.getElementById('ramen-menu').appendChild(img);

      form.reset();
  });
};

const displayRamens = async () => {
  const response = await fetch('http://localhost:3000/ramens');
  const ramens = await response.json();

  const ramenMenu = document.getElementById('ramen-menu');
  ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(img);
  });
};

const main = () => {
  displayRamens();
  addSubmitListener();
};

main();

// Export functions for testing
export { 
  displayRamens, 
  addSubmitListener, 
  handleClick, 
  main 
};




