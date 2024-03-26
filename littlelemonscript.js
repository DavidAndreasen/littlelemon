document.addEventListener('DOMContentLoaded', function() {
    const reserveBtn = document.querySelector('.reserve-btn');
    if (reserveBtn) {
        reserveBtn.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'booking.html'; // Redirect to the booking page
        });
    }

    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form data
            const formData = new FormData(bookingForm);
            const bookingDetails = {};
            formData.forEach(function(value, key) {
                bookingDetails[key] = value;
            });

            // Save booking details to localStorage (or send to backend)
            localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

            // Redirect to confirmation page
            window.location.href = 'confirmation.html';
        });
    }
});
