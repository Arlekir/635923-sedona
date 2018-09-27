var sad = document.querySelector(".button-search");
var popup = document.querySelector(".search-form");

popup.classList.remove("modal-show");
sad.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");

});

var form = document.querySelector(".appointment-form");
var arrivalOn = document.querySelector("[name=arrival]");
var departureOn = document.querySelector("[name=departure]");
var adultsOn = document.querySelector("[name=adults]");
var childrenOn = document.querySelector("[name=children]");

form.addEventListener("submit", function(evt) {

  if (!arrivalOn.value || !departureOn.value || !adultsOn.value) {

    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
