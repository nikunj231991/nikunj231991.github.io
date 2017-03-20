(function () {
    
    emailjs.init("user_qpQpWuy67MnmnNtTmoPdN");
    var myform=$("#contactForm");
    myform.submit(function (event) {
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "gmail";
        var template_id = "template_Yn3gXQeZ";
        var fromname=myform.find("#name").val();
        var fromemail=myform.find("#email").val();
        var subject=myform.find("#subject").val();
        var message=myform.find("#message").val();
        myform.find("button").html("<i class='fa fa-paper-plane'></i> Sending");
        var fullbody = "Email : " + fromemail + " Subject : " + subject + " Body : " + message;
        emailjs.send(service_id,template_id,{reply_to: fromemail, from_name: fromname,to_name:"Nikunj Prajapati",message_html:fullbody})
          .then(function(){ 
              alert("Sent!");
              myform.find("button").text("Send");
          }, function(err) {
              alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
              myform.find("button").text("<i class='fa fa-paper-plane'></i> Send");
          });
    });
})();