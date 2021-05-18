function adicionarVideo(){
  var myVideo=document.getElementById("video") 
  var videoEmbed = myVideo.value
  if (videoEmbed.endsWith('embed' , 29)){
    listarFilmesNaTela(videoEmbed)
      }else{
        alert("Video inválido")
      }
  myVideo.value = ""
  function listarFilmesNaTela(video){
    var listaVideos = document.querySelector('#listaVideos')
    var elementoVideos = "<iframe src=" + video + ">"
    listaVideos.innerHTML = listaVideos.innerHTML + elementoVideos
  }
  }



function adicionarFilme() {
  var campoFilmeFavorito  = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  
  if (filmeFavorito.endsWith('.jpg')) {         
   listarFilmesNaTela(filmeFavorito)
        }else{
  alert("Imagem inválida")
 }
   campoFilmeFavorito.value = ""

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
}


/*Substituir o pôster de cada filme pelo trailer. Dica: pesquisem pela opção embed no menu de compartilhamento do YouTube;
Estudar o innerHTML e a função que está criando a lista de pôsters. Como o código funciona para adicionar filmes sem utilizar array?
Criar a função validaFilme() que faça somente a verificação que está sendo feita no if.*/