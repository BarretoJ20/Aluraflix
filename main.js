var listaFilmes = [
  'https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/d/d6/Intouchables_cartaz.jpg',
  'https://br.web.img3.acsta.net/pictures/18/03/01/20/26/0577579.jpg'
]
//Dificuldade econtrada nessa parte do projeto: Passei 1hora procurando a solução do erro que as imagens nao estavam aparecendo. No final, eu tinha escrito <img scr, ao inves de <img src//
for (var i = 0; i < listaFilmes.length; i++) {
  document.write('<img src=' + listaFilmes[i] + '>')
}
