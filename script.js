// Busca el elemento con ID "rojo" y cambia su texto a "Adiós"
document.getElementById("rojo").innerText = "Adiós";

// Selecciona todos los elementos <h1> y cambia el color del segundo a naranja
const h1s = document.getElementsByTagName("h1"); // Devuelve una colección de todos los h1
if (h1s.length > 1) {
  h1s[1].style.color = "orange"; // Cambia el color del segundo h1
}
const dupli = document.getElementById("button");
dupli.addEventListener("click",()=> {dupli.style.color = "brown"});