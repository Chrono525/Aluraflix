function adicionarFilme() {
  let seila =document.getElementById("filme").value;
  listaFilmes.innerHTML += `<img src = ${seila}>`
}
