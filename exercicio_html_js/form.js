const form = document.getElementById("form");

const par = document.getElementById("nA");
const impar = document.getElementById("nB");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validaNumero();
});
function validaNumero() {
  const nAValue = nA.value;
  const nBValue = nB.value;

  if (nAValue < nBValue) {
    alert("Parabéns, você acertou!!");

    nA.value = "";
    nB.value = "";
  } else {
    alert("Não podemos seguir, o primeiro numero é maior ou igual ao segundo");
  }
}
console.log(form);
