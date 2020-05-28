$(document).ready(function(){

  // Translates the img-gallery text
  lightbox.option({
    'albumLabel': 'Imagem %1 de %2'
  });

  $.isEditor = function(){
    return $('[ng-app="rockett.editor"]').length !== 0;
  };

  // Disables scroll on maps with .maps-disable-scroll
  $('.maps-disable-scroll').click(function () {
      $('.maps-disable-scroll iframe').css('pointer-events', 'auto');
  });
  $('.maps-disable-scroll').mouseleave(function() {
    $('.maps-disable-scroll iframe').css('pointer-events', 'none');
  });

});
