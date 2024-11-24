let card = document.getElementById('cover');
let back = document.getElementById('back');
card.addEventListener('click', function () {
   card.classList.add('move');
   back.classList.add('move');
   setTimeout(() => {
      card.classList.add('open');
   }, 1000);
});