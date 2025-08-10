export async function loadErrors() {
  try {
    const response = await fetch('./data/errores.json');
    const data = await response.json();

    // Detecta si hay un hash en la URL
    const hash = window.location.hash.replace("#", "").toLowerCase();

    // Si hay hash, filtra los errores por categoría
    const filteredErrors = hash
      ? data.filter(error => error.category.toLowerCase() === hash)
      : data;

    filteredErrors.forEach(error => {
      const section = document.querySelector(`#${error.category.toLowerCase()} .error-list`);
      if (!section) return;

      section.classList.add('has-errors');

      const card = document.createElement('div');
      card.classList.add('error-card');

      card.innerHTML = `
        <h4>${error.title}</h4>
        <p><strong>Symptom:</strong> ${error.description}</p>
        <p><strong>Solution:</strong> ${error.solution}</p>
      `;

      section.appendChild(card);
    });

    // Scroll hacia el encabezado si hay hash
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }

  } catch (err) {
    console.error('Failed to load errors:', err);
  }
}