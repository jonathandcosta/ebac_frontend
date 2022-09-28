$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });
  $("#cancel").click(function () {
    $("form").slideUp();
  });
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#adicionar-tarefa").val();
    const novoLinha = $('<li style="display: none"></li>');
    $(`<li>${novaTarefa}</li>`).appendTo(novoLinha);
    $(novaLinha).appendTo("ul");
    $(`#adicionar-tarefa`).val("");
  });
});
