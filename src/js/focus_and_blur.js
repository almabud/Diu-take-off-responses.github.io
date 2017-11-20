var placeholder,input,s;

$(document).ready(function(){
focus_and_blur(".name-placeholder",".name-input");
focus_and_blur(".id-placeholder",".id-input");
focus_and_blur(".email-placeholder",".email-input");
focus_and_blur(".contact-placeholder",".contact-input");
focus_and_blur(".department-placeholder",".department-dropdown");
focus_and_blur(".semister-placeholder",".semister-dropdown");
focus_and_blur(".tsirt-placeholder",".tsirt-dropdown");
dropdown_menu(".department-dorpdown-menu",".department-dropdown",".department-placeholder");
dropdown_menu(".semister-dorpdown-menu",".semister-dropdown",".semister-placeholder");
dropdown_menu(".tsirt-dorpdown-menu",".tsirt-dropdown",".tsirt-placeholder");
$(".department-placeholder").css("cursor","pointer");
$(".semister-placeholder").css("cursor","pointer");
$(".tsirt-placeholder").css("cursor","pointer");
$(".d").click(function(){
  //console.log($(this).text());
  $(".semister-dropdown").text($(this).text());
  $(".semister-dropdown").val($(this).text());
  //console.log($(".semister-dropdown").val().length);
});

});

function focus_and_blur(placeholder, input){
$(placeholder).click(function(){
  placeholder_up(placeholder);
  $(input).focus();
});

$(input).blur(function(){
  if($(this).val()== ""){
    $(this).val("");
    placeholder_down(placeholder);
    console.log("2345");
  }
});

$(input).focus(function(){

  placeholder_up(placeholder);
});
}

function dropdown_focus(placeholder,input){
  $(placeholder).click(function(){
    placeholder_up(placeholder);
    $(input).focus();
  });
  $(input).focus(function(){
    placeholder_up(placeholder);
  });

  function dropdown_blur(placeholder,input){
    $(input).blur(function(){
      if($(this).val().length == 0 || $(this).val()[0] == '0'){
        $(this).val("");
        placeholder_down(placeholder);
      }
    });
  }


}
function placeholder_up(placeholder){
  $(placeholder).css("cursor","context-menu");
  $(placeholder).animate({
    top:"-22px",
    fontSize:"15px"
  },300);
}

function placeholder_down(placeholder){
  $(placeholder).css("cursor","text");
  $(placeholder).animate({
    top:"0px",
    fontSize:"21px"
  },300);
}

function dropdown_menu(menu_dropdown,focus,placeholder){
  $(focus).focus(function(){
    $(menu_dropdown).slideDown(300);
  });
  $(focus).blur(function(){
    if($(focus).val()!=""){
     $(".semister-placeholder").css("cursor","pointer");
   }
    $(menu_dropdown).slideUp(300);
  });
}
