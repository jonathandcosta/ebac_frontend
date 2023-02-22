document.addEventListener("DOMContentLoaded", function () {
  // ajax começa aqui
  const xhttp = new XMLHttpRequest();
  const repositorio = document.getElementById("repositorio").value;
  const seguidores = document.getElementById("seguidores").value;
  const seguindo = document.getElementById("seguindo").value;

  const endpoint = `https://github.com/jonathandcosta`;

  xhttp.open("GET", endpoint);
  xhttp.send();
});
