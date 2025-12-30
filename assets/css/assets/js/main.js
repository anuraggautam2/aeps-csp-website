const phone = "918303527998";

function openWhatsApp() {
  const msg = "Hello, I want to know about your services.";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
}

document.getElementById("bookingForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  const message = `Hello, my name is ${name}. I want ${service} on ${date}.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Auto attempt
  window.location.href = url;

  // Fallback
  setTimeout(() => {
    document.getElementById("fallback").style.display = "block";
    document.getElementById("manualLink").href = url;
  }, 1500);
});

