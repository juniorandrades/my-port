function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 100 * i);
    });
  }
  const titulo = document.querySelector(".typewriter");
  typeWrite(titulo);
  
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });
  
  sr.reveal(".delaySmallReveal", { delay: 200 });
  sr.reveal(".delayMediumReveal", { delay: 300 });
  sr.reveal(".delayLargeReveal", { delay: 400 });
  sr.reveal(".delayExtraBigReveal", { delay: 600 });
  
  sr.reveal(".intervalCardReveal", { interval: 400 });