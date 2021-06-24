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

        let topAlbums = document.querySelector('.cajas-index')
        topAlbums += `<li class="cajitas-index"><img src=""><p><a href="./detail-album.html"></a></p></li>`
    })
    .catch(function(error){
        console.log(error);
    })

let urlParaAlbumes = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`

fetch(urlParaAlbumes)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let albumes = data.data;
        console.log(albumes);

        for(i=0; i<8; i++){
                    let topAlbums = document.querySelector('.cajas-index-duo')
                    topAlbums.innerHTML += `<li class="cajitas-index"><img src="${albumes[i].cover_xl}"><p><a href="./detail-album.html?id=${albumes[i].id}">${albumes[i].title}</a></p></li>`
        }

    })
    .catch(function(error){
        console.log(error);
    })
