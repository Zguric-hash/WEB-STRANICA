document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;


    console.log(`Ime: ${name}, Email: ${email}, Broj mobitela: ${phone}, Usluga: ${service}, Poruka: ${message}`);

  
    alert('Hvala što ste nas kontaktirali! Vaša poruka je poslana.');

   
    document.getElementById('contactForm').reset();
});
