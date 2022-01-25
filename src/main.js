import data from './data/rickandmorty/rickandmorty.js';

let character = data.results;

let table = document.getElementById("table");

window.addEventListener("load", addAllCharacters(character));

function addAllCharacters(character) {

  table.innerHTML = "";
  
  for (let i = 0; i < character.length; i++) {

    let tarjeta = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("p");
    
    tarjeta.setAttribute("class", "cell"); 
    tarjeta.setAttribute("id", "card"); 
    image.setAttribute("src", character[i].image);
    image.setAttribute("class", "image");
    name.innerHTML = character[i].name;
    
    
    table.appendChild(tarjeta);
    tarjeta.appendChild(image);
    tarjeta.appendChild(name);
    
  }
}
