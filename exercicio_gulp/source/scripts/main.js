function calculaIdade(anoNascimento) {
  let idade = 2023 - anoNascimento;
  return idade;
}

let anoNascimento = prompt("Em que ano você nasceu?");
anoNascimento = parseInt(anoNascimento);

alert("Você tem: " + calculaIdade(anoNascimento));
