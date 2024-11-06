function calculateFare() {
    const start = document.getElementById("start").value;
    const destination = document.getElementById("destination").value;
    const fareResult = document.getElementById("fare-result");
    const proceedButton = document.getElementById("proceed-button");

    if (!start || !destination) {
        fareResult.textContent = "Please select both starting and destination points.";
        return;
    }

    const distance = Math.abs(destination - start);
    const fare = distance * 10;

    fareResult.textContent = `Fare: ₹${fare}`;
    proceedButton.style.display = 'inline-block';
}
