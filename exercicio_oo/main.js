//objeto, conhecido como objeto literal
const relogio1 = {
  tipo: "digital",
  modelo: "esportivo",
  marca: "casio",
  fabricado: "china",
  estrutura: "borracha",
  cor: "preto",
  hora: function () {
    console.log("O relógio é a prova d'água!");
  },
};

const relogio2 = {
  tipo: "analogico",
  modelo: "elite",
  marca: "montain",
  fabricado: "suica",
  estrutura: "metalica",
  cor: "prata",
  hora: function () {
    console.log("O relógio é a prova d'água!");
  },
};

//criando um atributo
function Acessorio(tipo, modelo, marca, fabricado, estrutura, cor) {
  this.tipo = tipo;
  this.modelo = modelo;
  this.marca = marca;
  this.fabricado = fabricado;
  this.estrutura = estrutura;
  this.cor = cor;
  //metodo
  this.hora = function () {
    console.log("vendido");
  };
}

const relogioDoMario = new Acessorio(
  "digital",
  "esportivo",
  "casio",
  "china",
  "borracha",
  "preto"
);
const relogioDoZe = new Acessorio(
  "analogico",
  "elite",
  "montain",
  "suica",
  "matalica",
  "prata"
);

console.log(relogioDoMario);
console.log(relogioDoZe);
