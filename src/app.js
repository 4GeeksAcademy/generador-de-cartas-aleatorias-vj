import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  //almacenar números y letras de las cartas.
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  //almacenar las palos de las cartas.
  const palos = [
    {palo: "♦" , nombre: "diamante" , color: "rojo"},
    {palo: "♥" , nombre: "corazón" , color: "rojo"},
    {palo: "♠" , nombre: "pica" , color: "negro"},
    {palo: "♣" , nombre: "trébol" , color: "negro"}
  ];

  //randomizar de los números y letras.
  let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  //randomizar de las pintas.
  let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  //carta en el DOM.
  const cartaNaipe = document.getElementById('card');
  const primerDiv = document.getElementById('parteSuperior');
  const segundoDiv = document.getElementById('parteCentro');
  const tercerDiv = document.getElementById('parteInferior');

  //.textContent = --> establece el texto contenido dentro de un elemento del DOM.
  primerDiv.textContent = paloAleatorio.palo;
  segundoDiv.textContent = valorAleatorio;
  tercerDiv.textContent = paloAleatorio.palo;

  //.classList.add --> añade una clase (CSS) al div.
  cartaNaipe.classList.add(paloAleatorio.color);
  primerDiv.classList.add(paloAleatorio.color);
  segundoDiv.classList.add(paloAleatorio.color);
  tercerDiv.classList.add(paloAleatorio.color);
  
};
