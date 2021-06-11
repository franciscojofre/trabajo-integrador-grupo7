let queryString = location.search
let queryStringToObj = new URLSearchParams(queryString)
let id = queryStringToObj.get('id')

console.log(id);

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let datosCancion = document.querySelector('.datos-canciones')
        datosCancion.innerHTML += `<li class="datitos-canciones"><h2>${data.title}</h2></li>
                                   <li class="datitos-canciones"><a href="./detail-artist.html?id=${data.artist.id}"><h3>Artista: ${data.artist.name}</h3> </a></li>
                                   <li class="datitos-canciones"><a href="./detail-album.html?id=${data.album.id}"><h3>Album: ${data.album.title}</h3></a></li>`

        let reproductor = document.querySelector('.player')
        reproductor.innerHTML += `<iframe title="deezer-widget" src="https://www.deezer.com/us/track/${data.id}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
    })
    .catch(function(error){
        console.log(error);
    })

let cancionesAPlaylist = [];
let recuperarDatos = localStorage.getItem('cancionesAPlaylist')

if(recuperarDatos != null){
    cancionesAPlaylist = JSON.parse(recuperarDatos);
}

if(cancionesAPlaylist.includes(id)){
    document.querySelector('.agregar-playlist').innerText = "Quitar de mi playlist"
}

let aPlaylist = document.querySelector('.agregar-playlist')

aPlaylist.addEventListener('click', function(e){
    e.preventDefault();

    if(cancionesAPlaylist.includes(id)){
        let idAQuitar = cancionesAPlaylist.indexOf(id);
        cancionesAPlaylist.splice(idAQuitar, 1)
        aPlaylist.innerText = "Agregar a mi playlist"
    } else{
        cancionesAPlaylist.push(id)
        aPlaylist.innerText = "Quitar de mi playlist"
    }

    let prepararParaStorage = JSON.stringify(cancionesAPlaylist);
    localStorage.setItem('cancionesAPlaylist', prepararParaStorage)

    console.log(localStorage);
})