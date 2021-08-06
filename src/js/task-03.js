const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
console.log(galleryEl);

const makeElGalleryMarkup = images => {
  return `
  
    <li class="gallery__item">
      <img
        
        src = ${images.url} 
        alt = '${images.alt}'
        >
    </li>
      
`;
};
//console.log(makeElGalleryMarkup(images[0]));

const makeGallery = images.map(makeElGalleryMarkup).join('');
console.log(makeGallery);

galleryEl.insertAdjacentHTML('beforeend', makeGallery);
console.log(galleryEl);

galleryEl.classList.add('gallery__list', 'list', 'gallery-background');
