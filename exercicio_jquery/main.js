/*ESTA FUNÇÃO CRIA O EFEITO DE ABRIR E ESCONDER O MENU INTERATIVO*/
$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });
  $("#cancel").click(function () {
    $("form").slideUp();
  });

  /*ESTA FUNÇÃO MANTEM O MENU NO ESTADO PADRÃO APÓS A AÇÃO*/
  $("form").on("submit", function (e) {
    e.preventDefault();

    /*mantem o valor recebido no input, tarefa e data*/
    const novaTarefa = $("#adiciona-tarefa").val();
    const data = $("#data-conclusao").val();

    /*cria a nova linha adicionando o conteudo*/
    const novaLinha = $(
      `<tr><td>${novaTarefa}</td> <td>${dataFormatada(data)}</td></tr>`
    );
    $(novaLinha).appendTo("tbody");

    /*limpa os campos, deixando vazio*/
    $("#adiciona-tarefa").val("");
    $("#data-conclusao").val("");
  });

  /*ESTA FUNÇÃO FORMATA A DATA PARA O PADRÃO BRASILEIRO*/

  function dataFormatada() {
    const date = $("#data-conclusao").val();

    const meuArrayStrings = date.split("-");

    let ano = meuArrayStrings[0];
    let mes = meuArrayStrings[1];
    let dia = meuArrayStrings[2];

    return dia + "-" + mes + "-" + ano;
  }
});
