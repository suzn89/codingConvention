$(document).ready(function(){
  /* input placeholder 이벤트 */
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
});