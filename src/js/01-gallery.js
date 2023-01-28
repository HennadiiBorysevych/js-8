// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from '../js/gallery-items';

const photosList = document.querySelector('.gallery');

function photoMurkupItems(data) {
  return data
    .map(item => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                class="gallery__image"
                />
            </a>
        </div>`;
    })
    .join('');
}

const handleMurkupItems = photoMurkupItems(galleryItems);
photosList.innerHTML = handleMurkupItems;

photosList.addEventListener('click', handlePhotoOriginal);

function handlePhotoOriginal(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const gallery = new SimpleLightbox(
    `
  .gallery a
`,
    { captionsData: 'alt', captionDelay: '250' }
  );
  gallery.on('show.simplelightbox');
  e.preventDefault();
  document.addEventListener('keydown', closeModalOnEscape);

  function closeModalOnEscape(e) {
    if (e.key === 'Escape') {
      document.removeEventListener('keydown', closeModalOnEscape);
      gallery.on('close.simplelightbox');
    }
  }
}
// Change code below this line

console.log(galleryItems);
