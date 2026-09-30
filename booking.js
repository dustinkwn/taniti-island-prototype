const form = document.getElementById('booking-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Booking submitted successfully!');
    form.reset();

});

// This script adds a prompt when the form is submitted
// and resets the form fields after submission.