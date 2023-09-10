import axios from 'axios';

import{ fetchBreeds,fetchCatByBreed } from "./partials/cat.api.js";

axios.defaults.headers.common['x-api-key'] =
  'live_UoZkO9lLn5KL3Q08dfC36N7KEsxgDZs70d3w65oNsbf4uVSIQKOigih0ldPo7yek';




const elements = {
    select:document.querySelector( '.js-breed-select'),
   catInfo: document.querySelector('.js-cat-info'),
   loading :document.querySelector('.js-loader'),
   errorText:document.querySelector('.js-error'),
}



elements.loading.style.display = 'none';

window.addEventListener('DOMContentLoaded', () => {
    elements.select.insertAdjacentHTML("afterbegin", `<option>Select_breed</option>`);
    // elements.select.style.display = 'none';
   
    fetchBreeds()    
    .then(data => {
        
        elements.select.style.display = 'block';
        elements.loading.style.display = 'none';
        let option = data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');
        elements.select.insertAdjacentHTML("beforeend", option);
    
    })
    .catch(error =>            
        elements.loading.style.display = 'none'            
    );   
    
   
});
