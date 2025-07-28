const timestampInput = document.getElementById("timestamp");
const now = new Date().toISOString();
timestampInput.value = now;

document.querySelectorAll("[data-modal-target]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const modalId = link.getAttribute("data-modal-target");
    document.getElementById(modalId).showModal();
  });
});

document.querySelectorAll(".close-modal").forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});
