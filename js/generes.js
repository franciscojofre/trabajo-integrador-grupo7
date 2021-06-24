


let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log({data});

        data.data.forEach(element => {
            let domElementLi=document.createElement("li");
       
            domElementLi.classList.add("cajitas-index");
        
            domElementLi.innerHTML=`<img src="${element.picture}" alt="">
        <p><a href="./detail-genres.html?id=${element.id}&nombre=${element.name}"> ${element.name}</a></p>`;
        
        document.body.querySelector("ul#lista-de-generos").appendChild(domElementLi);
        });
    })
    .catch(function(error){
        console.log(error);
    })
