document.addEventListener("DOMContentLoaded", function () {

    let timeSelect = document.getElementById("client-time");
    let continueButton = document.getElementById("next-client-data");

    if (continueButton && timeSelect) {
        continueButton.addEventListener("click", function (event) {
            let selectedValue = timeSelect.value;

            if (selectedValue === "Choose Your Time") {
                event.preventDefault();
                alert("Please select a valid time before continuing.");
            } else {
                localStorage.setItem("selectedTime", selectedValue);
            }
        });
    }

    let submitButton = document.getElementById("next-final-page");
    let termsCheckbox = document.getElementById("terms-checkbox");
    if (submitButton && termsCheckbox) {
        submitButton.addEventListener("click", function () {
            let firstName = document.getElementById("first-name").value;
            let lastName = document.getElementById("last-name").value;
            let email = document.getElementById("email").value;
            let phoneNumber = document.getElementById("phone-number").value;

            if (!firstName || !lastName || !email || !phoneNumber) {
                event.preventDefault();
                alert("Please complete all fields before continuing.");
                return
            }

            if (!termsCheckbox.checked) {
                event.preventDefault();
                alert("You accept the Terms and Conditions before continuing.");
                return;
            }

            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("phoneNumber", phoneNumber);
        });
    }

    let finalPage = document.getElementById("data-time");
    if (finalPage) {
        document.getElementById("data-time").value = localStorage.getItem("selectedTime") || "";
        document.getElementById("data-first-name").value = localStorage.getItem("firstName") || "";
        document.getElementById("data-last-name").value = localStorage.getItem("lastName") || "";
        document.getElementById("data-email").value = localStorage.getItem("email") || "";
        document.getElementById("data-phone-number").value = localStorage.getItem("phoneNumber") || "";
    }
});
