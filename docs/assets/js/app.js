$(document).ready(() => {
  var input = document.querySelector("#tel");
  window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry:"ua",
  });
  
  let modalToggle = (id) => {
    $(id).toggleClass("show");
  }
  
  $("#play-video").on("click", () => {
    modalToggle("#video-modal");
  });
  
  $(".modal").on("click", (event) => {
    modalToggle(event.target);
  });

  $(".modal-dialog").on("click", (event) => {
    event.stopPropagation();
  });

  $(".modal-close").on("click", (event) => {
    modalToggle(event.target.closest(".modal"));
  });

  $("#problem-arrow").on("click", () => {
    $('body, html').animate({scrollTop: $(".soluzione").offset().top});
  });
});