let recuperarDatos = localStorage.getItem('cancionesAPlaylist')
let cancionesAPlaylist = JSON.parse(recuperarDatos)

let playlist = document.querySelector('.cajas-index')

if(cancionesAPlaylist.length===0){
    playlist.innerHTML += `<p class="titulo-detalle-genero"><a">Tu playlist esta vacia aun. Agrega tus canciones favoritas desde el detalle de la canciones.</a></p>`
} else{
    for(let i = 0; i < cancionesAPlaylist.length; i++){
    buscarYMostrarPlaylist(cancionesAPlaylist[i])
}

function buscarYMostrarPlaylist(id){
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
        fetch(url)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                //console.log(data);
                playlist.innerHTML += `<li class="cajitas-index"><img src="${data.album.cover_xl}" alt=""><p><a href="./detail-track.html?id=${data.id}">${data.title}</a></p></li>`
            })
            .catch(function(error){
                console.log(error);
            })
    }
}