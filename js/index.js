fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let topCanciones = data.tracks.data
    let topAlbumes = data.albums.data
    let topArtists = data.artists.data

    let canciones = document.querySelector(".cajitas-index")
    let artists = document.querySelector(".cajitas-artists")
    let albumes = document.querySelector(".cajitas-albumes")
    for (let i = 0; i < 5; i++) {
        canciones.innerHTML += '<img src="./img/la-noche-de-anoche.jpg" alt=""><p><a href="./detail-track.html">'+ topCanciones[i].title +'</a></p><p><a href="./detail-artist.html">Bad Bunny</a> & <a href="./detail-artist.html">Rosalia</a></p>'
        
    }

})