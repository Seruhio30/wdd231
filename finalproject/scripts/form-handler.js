export function form_handler() {
  window.addEventListener("load", () => {
    const form = document.getElementById("feedback-form");
    const submitBtn = document.getElementById("submitBtn");

    if (!form || !submitBtn) {
      
      return;
    }

    submitBtn.addEventListener("click", () => {
      const timestamp = new Date().toISOString();
      const timestampInput = form.querySelector("input[name='timestamp']");
      if (timestampInput) {
        timestampInput.value = timestamp;
      }

      form.submit();
    });
  });
}

