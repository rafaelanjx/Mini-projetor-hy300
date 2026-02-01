// contador fake
const pessoas = Math.floor(Math.random() * 40) + 20;
document.getElementById("pessoas").innerText = pessoas;

// popup fake
setTimeout(() => {
  document.getElementById("popup").style.display = "block";
}, 5000);

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}
