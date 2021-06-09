let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("search");

console.log(queryString);
console.log(queryStringObj);
console.log(busqueda);
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+busqueda)
.then(function(response){
    return response.json();
})
.then(function(data){
    
    

})
