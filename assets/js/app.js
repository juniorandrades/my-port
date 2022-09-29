/* EFEITO DE DIGITAÇÃO MAIN  (TYPEIT)*/

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('.typewriter', {
    speed: 105,
  })
    .type(" Senior", { delay: 900 })
    .delete(6)
    .pause(1000)
    .type("Junior 😁", { delay: 500 })

    .go();
})

/* END EFEITO DE DIGITAÇÃO MAIN */












/* function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".typewriter");
typeWrite(titulo); */