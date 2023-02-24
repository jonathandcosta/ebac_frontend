document.addEventListener("DOMContentLoaded", function () {
  //variaveis referenciando os ID's no HTML para os campos serem alimentados pelos dados da API vinda do github

  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const repositoriesElement = document.querySelector("#repos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");

  //introdução ao github
  const endpoint = `https://api.github.com/users/jonathandcosta`;

  //solicitação as informações na API do github
  fetch(endpoint)
    .then(function (res) {
      return res.json();
    })

    //resposta em em dados via json para preenchimento dos campos
    .then(function (json) {
      nameElement.innerText = json.name;
      usernameElement.innerText = json.login;
      avatarElement.src = json.avatar_url;
      repositoriesElement.innerText = json.public_repos;
      followersElement.innerText = json.followers;
      followingElement.innerText = json.following;
      linkElement.href = json.html_url;
    })

    //em caso de erro no funcionamento envia uma mensagem ao usuário
    .catch(function (erro) {
      alert("ocorreu um erro");
    });
});
