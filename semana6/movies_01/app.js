import movies_01 from "./data.json" assert {type: "json"};
const container= document.querySelector(".container");
const inputBuscar= document.querySelector(".input-buscar");
const btnBuscar = document.querySelector(".btn-buscar");

btnBuscar.onclick =()=>{
    const texto = inputBuscar.value; 

    const moviesFiltradas = movies_01.entries.filter(
        (movie)=> movie.title.toLowerCase()==texto.toLowerCase());
    readMovies(moviesFiltradas);
};

    function readMovies(listaPeliculas=movies_01.entries){
        container.innerHTML= "";
        listaPeliculas.forEach((movie)=>{
           container.innerHTML+= ` <div class="movie">
           <img src="${movie.images.posterArt.url}" alt="" />
           <h4>${movie.title}</h4>
           <p>
            ${movie.description}
           </p>
         </div>`
        })
    }
    readMovies();




