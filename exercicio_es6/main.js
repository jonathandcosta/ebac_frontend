const pessoas = ["Paulo", "Levi", "Marcos", "Chico", "Mariana", "Vania"];

const alunos = pessoas.map(function (nomes) {
  return {
    nome: nomes,
    nota: "",
  };
});

alunos[0].nota = 8.7;
alunos[1].nota = 9;
alunos[2].nota = 8.9;
alunos[3].nota = 5.6;
alunos[4].nota = 0.3;
alunos[5].nota = 6;

const somenteAprovados = (i) => {
  return i.nota >= 6;
};

const quantosAprovados = alunos.filter(somenteAprovados);

console.log(quantosAprovados);
