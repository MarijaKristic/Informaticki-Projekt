// Kada se stranica učita
$(document).ready(function() {
    // Inicijalizacija modala
    $('.modal').modal({
      backdrop: 'static',
      keyboard: false
    });
    
    // Zatvaranje moda kada se klikne na gumb "Zatvori"
    $('.modal-footer button').click(function() {
      $('.modal').modal('hide');
    });
  });

  // Kontakt forma
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Ovdje možete dodati logiku za slanje poruke ili bilo koju drugu akciju
  
    logToConsole("Poruka poslana od: " + name);
    logToConsole("Email adresa: " + email);
    logToConsole("Poruka: " + message);
  
    // Resetiranje forme
    document.getElementById("contact-form").reset();
  });
