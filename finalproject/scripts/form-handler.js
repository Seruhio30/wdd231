export function form_handler(){
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const params = new URLSearchParams(formData);

    // se agrega timestamp dinámico
    const timestamp = new Date().toISOString();
    params.append("timestamp", timestamp);

    // Guardar en localStorage
    const dataObject = {
      name: formData.get("name"),
      email: formData.get("email"),
      challenge: formData.get("challenge"),
      advice: formData.get("advice"),
      timestamp: timestamp
    };

    localStorage.setItem("formData", JSON.stringify(dataObject));

    // Redirige con los datos en la URL
    window.location.href = `form-action.html?${params.toString()}`;
  });
});

}
