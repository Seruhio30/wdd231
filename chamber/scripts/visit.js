document.addEventListener("DOMContentLoaded", () => {

  const card = document.getElementById("visit-card");
  const message = document.getElementById("visit-message");
  const closeBtn = document.querySelector(".close-btn");

  // Mensaje de visita
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  let output;

  if (!lastVisit) {
    output = "Welcome! Let us know if you have any questions.";
  } else {
    const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysBetween < 1) {
      output = "Back so soon! Awesome!";
    } else {
      const unit = daysBetween === 1 ? "día" : "días";
      output = `You last visited n days ago. ${daysBetween} ${unit}.`;
    }
  }

  message.textContent = output;
  card.classList.remove("hidden");
  localStorage.setItem("lastVisit", now);


  closeBtn.addEventListener("click", () => {
    card.classList.add("hidden");
  });
});
