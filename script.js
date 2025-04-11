
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1500);
});
document.addEventListener("DOMContentLoaded", () => {
  const kmInput = document.getElementById("km");
  const result = document.getElementById("revenu_estime");
  if (kmInput) {
    kmInput.addEventListener("input", () => {
      const km = parseInt(kmInput.value);
      let revenu = 0;
      if (km >= 500 && km < 1000) revenu = 60;
      else if (km >= 1000 && km < 2000) revenu = 100;
      else if (km >= 2000) revenu = 150;
      result.textContent = `Revenu estimé : ${revenu} € / mois`;
    });
  }
});
