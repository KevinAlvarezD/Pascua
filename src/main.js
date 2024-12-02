// Importamos la animación y las funciones necesarias de Vite
import './style.css';

// Elementos del DOM
const eggButton = document.getElementById('egg-hunt-btn');
const messageContainer = document.querySelector('.message');
const eggs = document.querySelectorAll('.egg');

// Función para mostrar un mensaje de sorpresa
const showMessage = () => {
  messageContainer.textContent = "¡Felicidades! Encontraste un huevo de Pascua escondido!";
  messageContainer.style.visibility = 'visible';
  setTimeout(() => {
    messageContainer.style.visibility = 'hidden';
  }, 3000);
};

// Función para hacer que los huevos se muevan un poco
const animateEggs = () => {
  eggs.forEach((egg, index) => {
    egg.style.transform = `translateY(${Math.random() * 20 - 10}px) rotate(${Math.random() * 10 - 5}deg)`;
    egg.style.transition = `transform 0.3s ease-in-out`;
  });
};

// Evento al hacer clic en el botón
eggButton.addEventListener('click', () => {
  showMessage();
  animateEggs();
});

