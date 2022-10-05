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
    const novaLinha = $(`<li>${novaTarefa} ${data}</li>`);

    $(novaLinha).appendTo("ul");

    /*limpa os campos, deixando vazio*/
    $("#adiciona-tarefa").val("");
    $("#data-conclusao").val("");
  });
});
