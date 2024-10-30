window.addEventListener("scroll", () => {document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 0)})

/* document.querySelector("#form").addEventListener('sumbit', function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const number = document.querySelector("#number").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const nameError = document.querySelector("#nameError");
  const numberError = document.querySelector("#numberError");
  const emailError = document.querySelector("#emailError");
  const messageError = document.querySelector("#messageError");

  document.querySelectorAll(".error").forEach((text) => {text.textContent = "";})

  let hasError = false;

  if(!name){
    nameError.textContent = "Imie jest wymagane";
    hasError = true;
  }
  if (!number) {
    document.getElementById("numberError").textContent = "Numer telefonu jest wymagany.";
    hasError = true;
}
if (!email) {
    document.getElementById("emailError").textContent = "E-mail jest wymagany.";
    hasError = true;
} else if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = "Proszę podać poprawny adres e-mail.";
    hasError = true;
}
if (!message) {
    document.getElementById("messageError").textContent = "Wiadomość jest wymagana.";
    hasError = true;
}

if (!hasError) {
  // Tutaj można wysłać dane do serwera, np. za pomocą fetch
  const formData = {
      name,
      number,
      email,
      message,
      recaptchaResponse,
  };

  // Przykładowa wysyłka danych
  fetch("YOUR_SERVER_ENDPOINT", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
      alert("Formularz został wysłany!");
      // Opcjonalnie: zresetuj formularz
      document.getElementById("form").reset();
      grecaptcha.reset(); // Reset reCAPTCHA
  })
  .catch(error => {
      console.error("Wystąpił błąd:", error);
  });
}
});

// Funkcja do walidacji adresu e-mail
function validateEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(String(email).toLowerCase());
}
*/


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



