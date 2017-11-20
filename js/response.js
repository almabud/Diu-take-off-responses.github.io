var coun=0;
function submit_button(){
  $('.submit').click(function(){
    var total=0;
    progressbar=0;
    coun=0;
    for(i=0;i<flag1.length;i++)
         total+=flag1[i];
    if(total == 7){
      $('.progress-bar').css("display","block");
      var email,id,contact;
      email=$('.email-input').val();
      id=$('.id-input').val();
      contact='['+$('.contact-input').val()+']';
      var myQueryId = "select C where C = '" + id + "'";
      var myQueryEmail= "select D where D = '" + email + "'";
      var myQueryPhone= "select E where E = '" + contact + "'";
      LastVerifie(myQueryEmail,'.email-error',2,total);
      LastVerifie(myQueryId,'.id-error',1,total);
      LastVerifie(myQueryPhone,'.contact-error',3,total);
    }
  });
}

function LastVerifie(qury,error_message,i,total){
  var myCallback = function (error, options, response) {
  if (!error) {
   coun++;
  if(response.rows.length>1){
    total--;
    coun--;
    flag1[i]=0;
    $(error_message).slideDown(500);
    $('.progress-bar').css("display","none");
    button_active_disble();
    }
  else{
    if(total==7 && coun==3){
      SendData();
    }
    }
  }
  else{
    console.log(error);
     $('#errorModal').modal('show');
     $('.progress-bar').css("display","none");
      //alert("Please check your Internet connection");
  }
};
var spd='https://docs.google.com/spreadsheets/d/1nK4NCtZLEj6RYAmsBS-2p1dDuVp7AEkfYtmXf5XxkCg/edit#gid=874934561';
  sheetrock({
  url: spd,
  query:qury,
  reset:"true",
  callback: myCallback
});
}

function SendData(){
var name,id,email,contact,department,semister,tsirt;
name=$('.name-input').val();
id=$('.id-input').val();
email=$('.email-input').val();
contact='['+$('.contact-input').val()+']';
department=$('.department-dropdown').val();
semister=$('.semister-dropdown').val();
tsirt=$('.tsirt-dropdown').val();
  $.ajax({
    url:"https://docs.google.com/forms/d/e/1FAIpQLScQ5xo4O9IeZUwSSGVkAUXjo8SFLn6y6RGX3jjerf9dFCORbw/formResponse",
    data:{"entry.1667939970":name, "entry.657962012":id,"entry.663044138":email,"entry.530655147":contact,"entry.1696885521":department,"entry.661936582":semister,"entry.869182549":tsirt},
    type:"POST",
    dataType:"xml",
    statusCode:{0:function(){
      back_tostart();
      $('#successModal').modal('show');
      $('.progress-bar').css("display","none");
    },200:function(){
      back_tostart();
      $('.progress-bar').css("display","none");
      $('#successModal').modal('show');
    }
  }
  });
}
function back_tostart(){
  flag1=[];
  $('#check-box').prop('checked', false);
  $('.submit').prop('disabled', true);
  button_active_disble();
  $('input[type="text"]').val('');
  $('.input-placeholder').css({
    "top":"",
    "font-size":"",
    "color":""
  });
  $('input[type="text"]').css({
    "border-bottom":"#8F9398 1px solid",
  });
  $('.bar').removeClass('bar-red').addClass('bar-blue');
}
