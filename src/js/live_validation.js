var placeholder,input,st="",flag1=[];

$(document).ready(function(){
submit_button();
$('.bar').addClass('bar-blue');
Name_validation('.name-input','.name-placeholder','.name-bar',0);
student_id_validation('.id-input','.id-placeholder','.id-bar',1);
email_validation('.email-input','.email-placeholder','.email-bar',2);
contact_validation('.contact-input','.contact-placeholder','.contact-bar',3);
dropdown_menu('.department-dorpdown-menu','.department-dropdown','.department-placeholder','.department-bar',4);
dropdown_menu('.semister-dorpdown-menu','.semister-dropdown','.semister-placeholder','.semister-bar',5);
dropdown_menu('.tsirt-dorpdown-menu','.tsirt-dropdown','.tsirt-placeholder','.tsirt-bar',6);
$('.spreadsheet-link').click(function(){
  $('.modal').modal('hide');
});
$('.terms-and-condition').click(function(){
  $('#termsModal').modal('show');
});
$('#check-box').on('change',function(){
  button_active_disble();
});
});
function dropdown_menu(menu_dropdown,input,placeholder,bar,i){
  $(menu_dropdown + ' option').click(function(){
    flag1[i]=1;
    button_active_disble();
    $(input).val($(this).val());
    $(placeholder).css({
      "color":"green",
      "top":"-22px",
      "font-size":"15px"
    });
    $(bar).removeClass('bar-red').addClass('bar-blue');
    $(input).css("border-bottom","1px solid green");
  });
  $(input).focus(function(){
    $(menu_dropdown).slideDown(300);
  });
  $(input).blur(function(){
    if($(input).val().length==0){
      $(bar).removeClass('bar-blue').addClass('bar-red');
      $(input).css("border-bottom","1px solid red");
      $(placeholder).css("color","red");
    }
     $(menu_dropdown).slideUp(300);
   });
}
//---------------------------------------------------

///Extra------------
function sum(){
  var total=0;
  for(i=0;i<flag1.length;i++){
    total+=flag1[i];
  }
  return total;
}

function button_active_disble(){
  var total_validation= sum();
  if ($('#check-box').is(':checked') && total_validation==7) {
       $('.submit').prop('disabled', false);
      }
  else{
    $('.submit').prop('disabled', true);
  }
}

//Name validataion

function Name_validation(input,placeholder,bar,i){
  $(input).on('input',function(){
    var st=$(input).val();
    var name=/(?:^|\\s)[a-zA-Z .]+(?:\\s|$)/;
   if(st[0] == " " || st[0]=="."){
     flag1[i]=0;
     button_active_disble();
     $(input).css("border-bottom","1px solid red");
     $(placeholder).css("color","red");
     $(bar).removeClass('bar-blue').addClass('bar-red');
     //$('#name-list3 span').addClass('fa-check');
     $('#name-list3 span').addClass('fa-times');
     $('#name-list3').css("color","red");
   }
   else if(st.length==0){
     flag1[i]=0;
     button_active_disble();
     $(input).css("border-bottom","1px solid red");
     $(placeholder).css("color","red");
     $(bar).removeClass('bar-blue').addClass('bar-red');
     $('#name-list1 span').removeClass('fa-check').addClass('fa-times');
     $('#name-list1').css("color","red");
     $('#name-list2 span').removeClass('fa-check').addClass('fa-times');
     $('#name-list2').css("color","red");
     $('#name-list3 span').removeClass('fa-check').addClass('fa-times');
     $('#name-list3').css("color","red");
   }
   else if(st.length<3){
     flag1[i]=0;
     button_active_disble();
     $(input).css("border-bottom","1px solid red");
     $(placeholder).css("color","red");
     $(bar).removeClass('bar-blue').addClass('bar-red');
     $('#name-list1 span').addClass('fa-times');
     $('#name-list1').css("color","red");
     $('#name-list2 span').removeClass('fa-times').addClass('fa-check');
     $('#name-list2').css("color","green");
     $('#name-list3 span').addClass('fa-times');
     $('#name-list3').css("color","red");
   }
   else if(st.length>=3 && st.length<=30){
     flag1[i]=0;
     button_active_disble();
     $(placeholder).css("color","blue");
     $(bar).removeClass('bar-red').addClass('bar-blue');
     $('#name-list1 span').removeClass('fa-times').addClass('fa-check');
     $('#name-list1').css("color","green");
     $('#name-list2 span').removeClass('fa-times').addClass('fa-check');
     $('#name-list2').css("color","green");

     if(name.test(st)){
       flag1[i]=1;
       button_active_disble();
       $(bar).removeClass('bar-red').addClass('bar-blue');
       $(input).css("border-bottom","1px solid green");
       $(placeholder).css("color","green");
       $('#name-list3 span').removeClass('fa-times').addClass('fa-check');
       $('#name-list3').css("color","green");
     }
     else{
       flag1[i]=0;
       button_active_disble();
       $(bar).removeClass('bar-blue').addClass('bar-red');
       $('#name-list3 span').removeClass('fa-check').addClass('fa-times');
       $('#name-list3').css("color","red");
       $(input).css("border-bottom","1px solid red");
       $(placeholder).css("color","red");
     }
   }
   else{
     flag1[i]=0;
     button_active_disble();
     $('#name-list3 span').removeClass('fa-check').addClass('fa-times');
     $('#name-list3').css("color","red");
     $(bar).removeClass('bar-blue').addClass('bar-red');
     $(input).css("border-bottom","1px solid red");
   }
  });
  $(input).blur(function(){
    if(flag1[i]==0){
      $(input).css("border-bottom","1px solid red");
      $(placeholder).css("color","red");
    }
  });
}

//----------------------Student ID varification----------------------

function student_id_validation(input,placeholder,bar,i){
  $(input).on('input',function(){
  $('.id-error').slideUp(500);
  var id = /\d{3}-\d{2}-\d{3}/;
  var studentid=$(input).val();
  if(id.test(studentid)){
    flag1[i]=1;
    button_active_disble();
    $(bar).removeClass('bar-red').addClass('bar-blue');
    $(input).css("border-bottom","1px solid green");
    $(placeholder).css("color","green");
    $(input).css("border-bottom","1px solid green");
    $('#id-list1 span').removeClass('fa-times').addClass('fa-check');
    $('#id-list1').css("color","green");
  }
  else{
    flag1[i]=0;
    button_active_disble();
    $(bar).removeClass('bar-blue').addClass('bar-red');
    $(input).css("border-bottom","1px solid red");
    $(placeholder).css("color","red");
    $('#id-list1 span').removeClass('fa-check').addClass('fa-times');
    $('#id-list1').css("color","red");
  }
});
$(input).blur(function(){
  if(flag1[i]==0){
    $(input).css("border-bottom","1px solid red");
    $(placeholder).css("color","red");
  }
});
}

//-----------------Email validation----------
function email_validation(input,placeholder,bar,i){
  $(input).on('input',function(){
    $('.email-error').slideUp(500);
    var email = /(?:^|\\s)[a-z0-9-_.]+.@[a-z0-9.-]+(?:\\s|$)/;
    var diumail= /(?:^|\\s)[a-z0-9-_.]+@diu.edu.bd+(?:\\s|$)/;
    var getemail=$(input).val();
    if(email.test(getemail)){
      flag1[i]=0;
      button_active_disble();
      $(bar).removeClass('bar-red').addClass('bar-blue');
      $(input).css("border-bottom","1px solid red");
      $(placeholder).css("color","red");
      $('#email-list2 span').removeClass('fa-times').addClass('fa-check');
      $('#email-list2').css("color","green");
      $('#email-list1 span').removeClass('fa-check').addClass('fa-times');
      $('#email-list1').css("color","red");
    }
    else{
      flag1[i]=0;
      button_active_disble();
      $(bar).removeClass('bar-blue').addClass('bar-red');
      $(input).css("border-bottom","1px solid red");
      $(placeholder).css("color","red");
      $('#email-list2 span').removeClass('fa-check').addClass('fa-times');
      $('#email-list2').css("color","red");
      $('#email-list1 span').removeClass('fa-check').addClass('fa-times');
      $('#email-list1').css("color","red");
    }
    if(diumail.test(getemail)){
      flag1[i]=1;
      button_active_disble();
      $(bar).removeClass('bar-red').addClass('bar-blue');
      $(input).css("border-bottom","1px solid green");
      $(placeholder).css("color","green");
      $('#email-list1 span').removeClass('fa-times').addClass('fa-check');
      $('#email-list1').css("color","green");
    }
});
$(input).blur(function(){
  if(flag1[i]==0){
    $(input).css("border-bottom","1px solid red");
    $(placeholder).css("color","red");
  }
});
}

//---------------------Contact No validation--------
function contact_validation(input,placeholder,bar,i){
  $(input).on('input',function(){
    $('.contact-error').slideUp(500);
    var contact= /(?:^|\\s)+01+[0-9]+(?:\\s|$)/;
    var getcontact=$(input).val();
    if(contact.test(getcontact) && getcontact.length==11){
      flag1[i]=1;
      button_active_disble();
      $(bar).removeClass('bar-red').addClass('bar-blue');
      $(input).css("border-bottom","1px solid green");
      $(placeholder).css("color","green");
      $('#contact-list1 span').removeClass('fa-times').addClass('fa-check');
      $('#contact-list1').css("color","green");
    }
    else{
      flag1[i]=0;
      button_active_disble();
      $(bar).removeClass('bar-blue').addClass('bar-red');
      $(input).css("border-bottom","1px solid red");
      $(placeholder).css("color","red");
      $('#contact-list1 span').removeClass('fa-check').addClass('fa-times');
      $('#contact-list1').css("color","red");
    }
});
$(input).blur(function(){
  if(flag1[i]==0){
    $(input).css("border-bottom","1px solid red");
    $(placeholder).css("color","red");
  }
});
}
