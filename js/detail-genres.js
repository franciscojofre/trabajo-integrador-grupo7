let queryString = location.search
let queryStringToObj = new URLSearchParams(queryString)
let id = queryStringToObj.get('id')
let titulo=queryStringToObj.get("nombre")
console.log(id,titulo);

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`
document.body.querySelector("h1.titulo-detalle-genero").innerHTML=titulo;
// opcion 1  (forma vieja)

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log({data});

         data.data.forEach(element => {
            let domElementLi=document.createElement("li");
       
            domElementLi.classList.add("cajitas-index");
        
            domElementLi.innerHTML=`<img src="${element.picture_xl}" alt="">
        <p><a href="./detail-artist.html?id=${element.id}"> ${element.name}</a></p>`;
        
        
        document.body.querySelector("ul#lista-de-artistas").appendChild(domElementLi);
        });
    })
    .catch(function(error){
        console.log(error);
    });
    


