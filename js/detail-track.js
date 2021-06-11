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
                                   <li class="datitos-canciones"><a href="./detail-artist.html"><h3>Artista: ${data.artist.name}</h3> </a></li>
                                   <li class="datitos-canciones"><a href="./detail-album.html"><h3>Album: ${data.album.title}</h3></a></li>`
    })
    .catch(function(error){
        console.log(error);
    })