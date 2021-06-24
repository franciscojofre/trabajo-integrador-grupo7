fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(function(response){
    return response.json();
})
.then(function(data){
    
    let topCanciones = data.tracks.data
    let topAlbumes = data.albums.data
    let topArtists = data.artists.data
    console.log(topAlbumes); 

    let canciones = document.querySelector(".cajas-index")
    let artists = document.querySelector(".cajas-artistas")
    let albumes = document.querySelector(".cajas-albumes")
    for (let i = 0; i < 8; i++) {
        canciones.innerHTML += '<li class="cajitas-index"><img src="'+ topCanciones[i].album.cover_xl +'" alt=""><p><a href="./detail-track.html?id='+ topCanciones[i].id +'">'+ topCanciones[i].title +'</a></p><p><a href="./detail-artist.html?id='+ topCanciones[i].artist.id +'">'+ topCanciones[i].artist.name +'</a></p></li>';
        artists.innerHTML += '<li class="cajitas-artists"><img src="'+ topArtists[i].picture_xl +'" alt=""><p><a href="./detail-artist.html?id='+ topArtists[i].id +'">'+ topArtists[i].name +'</a></p></li>';
        albumes.innerHTML += '<li class="cajitas-albumes"><img src="'+ topAlbumes[i].cover_xl +'" alt=""><p><a href="./detail-album.html?id='+ topAlbumes[i].id +'">'+ topAlbumes[i].title +'</a></p><p><a href="./detail-artist.html?id='+ topAlbumes[i].artist.id +'">'+ topAlbumes[i].artist.name +'</a></p></li>';


    }

})

function validarBusqueda(){
    let valor=document.forms["formBusqueda"]["search"].value;
    let span=document.body.querySelector("form span[name='mensajeError']");
    console.log(span);
    if (valor==""){
        span.innerHTML="¡Ups! No escribiste nada en el buscador";
        return false;
    }else return true;
}
