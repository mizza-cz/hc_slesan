let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 12;
let galleryBox = document.querySelector('.c-gallery-section__inner');
if(loadMoreBtn){
   loadMoreBtn.onclick = () =>{
      let boxes = [...document.querySelectorAll('.c-gallery-section .grid-container .grid-item')];
      for (var i = currentItem; i < currentItem + 12; i++){
         boxes[i].style.display = 'inline-block';
      }
      currentItem += 12;
      if(currentItem <= boxes.length){
         loadMoreBtn.style.display = 'none';
         galleryBox.classList.toggle('off-bg');
      }
      if(currentItem < boxes.length){
       loadMoreBtn.style.display = 'none';
      }
   }
}

