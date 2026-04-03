// Typing Effect
const text = "Sushma Tiwari";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150); // Speed of typing
  }
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let errorMsg = document.getElementById("error-msg");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(pattern)) {
    errorMsg.style.color = "red";
    errorMsg.innerText = "❌ Please enter a valid email address!";
  } else {
    errorMsg.style.color = "green";
    errorMsg.innerText = "✅ Message sent successfully!";
    this.reset();
  }
});

// Run effect when loaded
window.onload = typeEffect;
