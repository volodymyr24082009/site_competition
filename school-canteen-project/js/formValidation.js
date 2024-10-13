document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Запобігаємо відправці форми

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Дякуємо за ваше повідомлення!");
        document.getElementById("contact-form").reset(); // Очистити форму
    } else {
        alert("Будь ласка, заповніть всі поля.");
    }
});
