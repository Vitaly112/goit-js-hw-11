import { serviceSearchPhoto } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import iziToast from "izitoast";   
import "izitoast/dist/css/iziToast.min.css"; 
import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css"; 

const searchForm = document.querySelector(".js-search-form");
const list = document.querySelector(".js-list");
const loader = document.querySelector(".loader");
loader.style.display = 'none';
searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { seachImage } = event.currentTarget.elements;
    loader.style.display = 'block';
    list.innerHTML = ''; 

    serviceSearchPhoto(seachImage.value)
        .then(data => {
            loader.style.display = 'none';

            if (data.hits.length === 0) {
                showErrorMessage("Sorry, there are no images matching your search query. Please try again!");
            } else {
                renderImages(data.hits);
                initializeLightbox();
                searchForm.reset();
            }
        })
        .catch(error => {
            loader.style.display = 'none';
            showErrorMessage("Oops! Something went wrong. Please try again later.");
        });
}

function showErrorMessage(message) {
    iziToast.error({
        title: 'Error',
        titleColor: 'white',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
        message: message,
        position: 'topRight',
    });
}

function renderImages(images) {
    list.insertAdjacentHTML("beforeend", createMarkup(images));
}

function initializeLightbox() {
    const lightBox = new SimpleLightbox('.js-list a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom', 
    });
    lightBox.refresh();
}