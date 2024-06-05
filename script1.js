const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const content = document.getElementById("content");
const message = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `fullName: $(fullName.value)<br> email: $(email.value)<br> phone: $(phone.value)<br> content: $(content.value)<br> message: $(message.value)<br>`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "akjarvis6.0@gmail.com",
        Password: "F9733C7FECFCB888A46BC265980AF397A548",
        To: 'akjarvis6.0@gmail.com',
        From: "akjarvis6.0@gmail.com",
        Subject: content.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            }
        }
    );

}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});