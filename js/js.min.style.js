var sad = document.querySelector(".button-search"),popup = document.querySelector(".search-form");


sad.addEventListener("click", function(evt){
evt.preventDefault();
popup.classList.toggle("modal-show");
});

    