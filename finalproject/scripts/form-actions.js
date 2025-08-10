export function form_actions(){
  const uri = new URLSearchParams(window.location.search);

document.getElementById("summary-name").textContent = uri.get("name") || "—";
document.getElementById("summary-email").textContent = uri.get("email") || "—";
document.getElementById("summary-challenge").textContent = uri.get("challenge") || "—";
document.getElementById("summary-advice").textContent = uri.get("advice") || "—";
  document.getElementById("summary-timestamp").textContent = uri.get("timestamp") || "—";


  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const opciones = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Costa_Rica' 
    };
    return fecha.toLocaleString('es-CR', opciones);
  }

  const rawTimestamp = uri.get("timestamp");
  document.getElementById("summary-timestamp").textContent = rawTimestamp
    ? formatearFecha(rawTimestamp)
    : "—";

}
