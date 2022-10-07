$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });
  $("#cancel").click(function () {
    $("form").slideUp();
  });

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

  function dataFormatada(date) {
    date = new Date();
    let ano = date.getFullYear();
    let mes = (1 + date.getMonth()).toString().padStart(2, "0");
    let dia = date.getDate().toString().padStart(2, "0");

    return dia + "-" + mes + "-" + ano;
  }
});
