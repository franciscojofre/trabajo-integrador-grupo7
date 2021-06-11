let recuperarDatos = localStorage.getItem('cancionesAPlaylist')
let cancionesAPlaylist = JSON.parse(recuperarDatos)

let playlist = document.querySelector('.cajas-index')

for(let i = 0; i < cancionesAPlaylist.length; i++){
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionesAPlaylist[i]}`
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            //console.log(data);
            let resultados = "";
            playlist.innerHTML += `<li class="cajitas-index"><img src="${data.album.cover_xl}" alt=""><p><a href="./detail-track.html">${data.title}</a></p></li>`
        })
        .catch(function(error){
            console.log(error);
        })
}

