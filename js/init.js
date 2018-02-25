(function($){
  $(function(){
    Materialize.updateTextFields();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.carousel').carousel();
    $('.modal').modal();
      $('#message').val('New Text');
  $('#message').trigger('autoresize');
        

  }); // end of document ready
})(jQuery); // end of jQuery name space