$(document).ready(function(){
  // input placeholder 이벤트 
  var placeholderTarget = $("input[type=text], input[type=password], textarea");
  placeholderTarget.focus(function(){
    $(this).siblings("label").fadeOut("fast");
  });
  placeholderTarget.focusout(function(){
    if($(this).val() === ""){
        $(this).siblings("label").fadeIn("fast");
    }
  });
  placeholderTarget.each(function(){
      if($(this).val()!=''){
          $(this).siblings("label").fadeOut("fast");
      }
  });

  // modal 팝업
  var modalLayer = $('#modal_cont_wrap');
  var viewModal = $('#modal_btn');
  var closeModal = $('button.close_pop');
  modalLayer.hide();
  viewModal.on('click', function(e){
    e.preventDefault();
    modalLayer.show(500);
  });
  closeModal.on('click', function(){
    modalLayer.hide(500);
  });
  $('.mask').on('click', function(){
    modalLayer.hide(500);
  });

});