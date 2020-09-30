var messages = [];
var usernames = [];
var now = new Date();
 
  


$('#submitMessage').click(function(){

    var username = $("#username").val();
    var message = $("#message").val();

    messages.push('<p>' + username + ' ' + '<span style="color:grey; font-size: 12px;">'+ now + '</span>'  + '</p>'  + '<br/>' + '<p>' + message + '</p>' + '<hr/>' );
    for (var i = 0; i < messages.length; i++) {

        $('.messageBox').html(
            messages.join('<br/>') 
            
        );
     }

});


    




