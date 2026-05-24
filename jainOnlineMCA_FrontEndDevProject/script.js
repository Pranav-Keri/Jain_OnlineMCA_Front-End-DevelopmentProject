document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let start = document.getElementById('startDate').value;
    let end = document.getElementById('endDate').value;
    let description = document.querySelector('textarea').value;

    if (!start || !end || !description) {
        alert("Please fill all fields");
        return;
    }

    if (end <= start) {
        alert("End date must be after start date");
        return;
    }

    if (description.length < 50 || description.length > 500) {
        alert("Description must be between 50 and 500 characters");
        return;
    }

    alert("Booking Successful!");
});