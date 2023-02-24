document.addEventListener("DOMContentLoaded", function () {
  //variaveis referenciando os ID's dos campos a serem alimentado pelos dados da API do github

  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const repositoriesElement = document.querySelector("#repos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");
  const endpoint = `https://api.github.com/users/jonathandcosta`;

  fetch(endpoint)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      nameElement.innerText = json.name;
      usernameElement.innerText = json.login;
      avatarElement.src = json.avatar_url;
      repositoriesElement.innerText = json.public_repos;
      followersElement.innerText = json.followers;
      followingElement.innerText = json.following;
      linkElement.href = json.html_url;
    })
    .catch(function (erro) {
      alert("ocorreu um erro");
    });
});
