export function modal() {
  
    const modal = document.getElementById("confirmationModal");
    const closeBtn = document.getElementById("closeModalBtn");
    

    if (modal && closeBtn) {
      modal.setAttribute("aria-hidden", "false");
      closeBtn.focus();

      closeBtn.addEventListener("click", () => {
        modal.setAttribute("aria-hidden", "true");
         if (form) form.reset();
      });
    }
  
}