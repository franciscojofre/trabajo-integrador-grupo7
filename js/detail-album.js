let queryString = location.search
let queryStringToObj = new URLSearchParams(queryString)
let id = queryStringToObj.get('id')

console.log(id);

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let imagen = document.querySelector('.cajas-index')
        imagen.innerHTML += `<li class="cajitas-index"><img src="${data.cover_xl}"><p>${data.title}</p></li>`

        let datosAlbum = document.querySelector('.datos-album')
        let datoGenre = data.genres.data
        datosAlbum.innerHTML += `<li class="datitos-album"><p><a href="./detail-artist.html">Artista: ${data.artist.name}</a></p></li>
                                 <li class="datitos-album"><p><a href="./detail-genres.html">Género: ${datoGenre[0].name}</a></p></li>
                                 <li class="datitos-album"><a><p>Fecha de lanzamiento: ${data.release_date}</p></a></li>`

        let listaCanciones = document.querySelector('.lista-cancion-album')
        let canciones = data.tracks.data
        
        for(i=0; i < canciones.length; i++){
            listaCanciones.innerHTML += `<li><a href="./detail-track.html">${canciones[i].title}</a></li>`
            console.log(canciones[i].title);
        }
        
    })
    .catch(function(error){
        console.log(error);
    })