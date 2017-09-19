
var value;
var myDiv = document.getElementById('myDiv');

$('#itemValue').keypress(function(){
  $('.warning-div').css('display', 'none');
});
$('#submit').click(function(event){
  value = document.getElementById('itemValue').value;
  $('.warning-div').css('display', 'none');

  if(value === ""){
    $('.alert-danger').css('display', 'block');
    return false;

  }else{

    var myArray = [];
    myArray.push(value);
    for(var i=0; i<myArray.length; i++){
      
      myDiv.innerHTML += "<h3 class='alert alert-primary list-item'>"+myArray+"<button class='btn btn-dark' id='close'>x</button></h3>";

    }

    $('#itemValue').val("");
    $('.list-item #close').click('button',function(){
      $(this).parent().remove();
    });
    $('#clearList').click(function(){
      $('#myDiv').children().remove();
    });



  }

  event.preventDefault();
});
