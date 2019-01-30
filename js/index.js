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

  // tab
  $('.tabbox').each(function(){
    var topDiv = $(this);
    var anchors = topDiv.find('ul.tabs a');
    var panelDivs = topDiv.find('div.panel');
    var lastAnchor;
    var lastPanel;
    anchors.show();
    lastAnchor = anchors.filter('.on');
    lastPanel = $(lastAnchor.attr('href'));
    panelDivs.hide();
    lastPanel.show();

    anchors.click(function(event){
        event.preventDefault();	
        var currentAnchor = $(this);
        var currentPanel = $(currentAnchor.attr('href'));
        lastAnchor.removeClass('on');
        currentAnchor.addClass('on');
        lastPanel.hide();
        currentPanel.show();
        lastAnchor = currentAnchor;
        lastPanel = currentPanel;
    });
  });

});