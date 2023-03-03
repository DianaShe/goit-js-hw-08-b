import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryMarkup = makeGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryMarkup;

function makeGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
      </a>`
      }).join("");
}

new SimpleLightbox('.gallery a', {captionDelay : 250});