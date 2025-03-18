// Funkcija koja se pokreće kad korisnik pošalje formu
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sprečava automatsko slanje forme

    // Dobijanje vrijednosti iz formi
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Ispisivanje podataka u konzolu (ovdje bi to obično slali na server)
    console.log(`Ime: ${name}, Email: ${email}, Broj mobitela: ${phone}, Usluga: ${service}, Poruka: ${message}`);

    // Prikazivanje obavijesti korisniku
    alert('Hvala što ste nas kontaktirali! Vaša poruka je poslana.');

    // Očistiti formu
    document.getElementById('contactForm').reset();
});


// Inicijalizacija EmailJS
(function() {
    emailjs.init("service_53frplg"); // Tvoj EmailJS korisnički ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sprečava automatsko slanje forme

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Podaci za e-mail koji će biti poslan
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message
    };

    // Slanje e-maila
    emailjs.send('service_53frplg', 'template_4k60ldr', templateParams)
        .then(function(response) {
            console.log('E-mail poslan!', response);
            alert('Hvala što ste nas kontaktirali! Vaša poruka je poslana.');
            document.getElementById('contactForm').reset(); // Resetira formu
        }, function(error) {
            console.log('Greška pri slanju e-maila...', error);
            alert('Došlo je do greške pri slanju poruke. Pokušajte ponovno.');
        });
		

});
});
