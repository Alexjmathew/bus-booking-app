document.addEventListener("DOMContentLoaded", function() {
    const paymentOptions = document.querySelectorAll(".payment-options input");
    const paymentForms = document.querySelectorAll(".payment-form");

    paymentOptions.forEach(option => {
        option.addEventListener("change", function() {
            paymentForms.forEach(form => form.classList.remove("active"));
            document.getElementById(`${option.id}-form`).classList.add("active");
        });
    });
});
