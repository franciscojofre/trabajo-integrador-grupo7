let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("search");

console.log(queryString);
console.log(queryStringObj);
console.log(busqueda);

let titulo = document.querySelector(".titulo-resultados")


if (busqueda =="") { 
    titulo.innerHTML += "¡Ups! No escribiste nada en el buscador"

}
else{
    titulo.innerHTML += "Resultados para la busqueda " + busqueda
}


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q="+busqueda)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.data);
    
    let searchCanciones = data.data
    if(searchCanciones.length == 0){
        alert("¡Ups! ¡No pudimos encontrar ningún album, artista ni canción que coincida con lo que buscaste!");
    }
    let cajasCancion = document.querySelector(".cajas-index")
    for (let index = 0; index < 7; index++) {
        cajasCancion.innerHTML += '<li class="cajitas-index"><img src="'+ searchCanciones[index].album.cover_xl +'" alt=""><p><a href="./detail-track.html?id='+ searchCanciones[index].id +'">'+ searchCanciones[index].title +'</a></p></li>'
        
        
    }
    

})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q="+busqueda)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.data);

    let searchArtist = data.data
    let cajasArtist = document.querySelector(".cajas-artistas")
    for (let index = 0; index < 3; index++) {
        cajasArtist.innerHTML += '<li class="cajitas-index"><img src="'+ searchArtist[index].picture_xl +'" alt=""><p><a href="./detail-artist.html?id='+ searchArtist[index].id +'">'+ searchArtist[index].name +'</a></p></li>'
        
        
    }
    

})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+busqueda)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.data);

    let searchAlbum = data.data
    let cajasAlbum = document.querySelector(".cajas-albumes")
    for (let index = 0; index < 5; index++) {
        cajasAlbum.innerHTML += '<li class="cajitas-index"><img src="'+ searchAlbum[index].cover_xl +'" alt=""><p><a href="./detail-album.html?id='+ searchAlbum[index].id +'">'+ searchAlbum[index].title +'</a></p></li>'
        
        
    }
    

})
