const b = document.getElementById('hambar');
console.log(b);
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (b) {
    b.addEventListener('click', () => {
        nav.classList.add('actives');
    })
};
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('actives');
    })
};
const mail = document.getElementById('mail');
const btn = document.getElementById('button');
console.log(btn);
btn.addEventListener("click", () => {
    if (mail.value == "") {
        alert('Enter your mail id')
    }
    else {
        alert("submitted successfully")
        mail.value = "";
    }
});
function sendEmail(event) {
    event.preventDefault();
    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    emailjs.send("service_jjie8ww", "template_8rrlcra", params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert('Your Form submitted successfully');
        })
        .catch(err => console.log(err));

}
