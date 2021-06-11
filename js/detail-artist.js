let queryString = location.search
let queryStringToObj = new URLSearchParams(queryString)
let id = queryStringToObj.get('id')

console.log(id);

let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let imagen = document.querySelector('.cajas-index')
        imagen.innerHTML += `<li class="cajitas-index"><img src="${data.picture_xl}"><p>${data.name}</p></li>`

        let topTracks = document.querySelector('.cajas-index')
        topTracks += `<li class="cajitas-index"><img src=""><p><a href="./detail-track.html"></a></p></li>`
    })
    .catch(function(error){
        console.log(error);
    })