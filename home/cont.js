function sendEmail(){
          var checkedmsz = document.getElementById('inpt4').checked ? 'Yes' : 'No';
          Email.send({
              SecureToken : "bb142d07-ac48-4895-96d1-8254103c98ab",
              To : "project.1.0@outlook.com",
              From : "host.popz@proton.me",
              Subject : "New Contact Form from " +
                document.getElementById("inpt1").value,
              Body : "Name : " + document.getElementById("inpt1").value
                    +"<br> Email : " + document.getElementById("inpt2").value
                    +"<br> Message : " + document.getElementById("inpt3").value
                    +"<br> Liked : " + checkedmsz
          }).then(
              message => alert("Message send succesfully")
          );
        }
