let header=document.body.querySelector("header");
let nav=document.createElement("nav");
nav.innerHTML=
`
 <img src="./img/logo.png" alt="logo">
 <form action="./search-results.html" onsubmit="return validarBusqueda()" method="GET" name="formBusqueda">
  <input type="text" name="search" placeholder="¿Qué quieres escuchar?" value="">
                    <button type="submit">Buscar</button>
                    <span name="mensajeError"></span>
                </form>
                <ul>
                    <li><a href="./index.html">HOME</a></li>
                    <li><a href="./playlist.html">PLAYLIST</a></li>
                    <li><a href="./genres.html">GENEROS</a></li>
                </ul>
`;
function validarBusqueda(){
    let valor=document.forms["formBusqueda"]["search"].value;
    let span=document.body.querySelector("form span[name='mensajeError']");
    console.log(span);
    if (valor==""){
        span.innerHTML="¡Ups! No escribiste nada en el buscador";
        return false;
    }else return true;
}
header.appendChild(nav);