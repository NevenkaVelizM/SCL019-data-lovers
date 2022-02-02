import { filter } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

let character = data.results;
let board = document.getElementById("board");
const select = document.getElementById("selectSpecies")
select.addEventListener("change", filterBySpecies);

window.addEventListener("load", addCharacters(character));

function addCharacters(character) {
board.innerHTML = "";

  for (let i = 0; i < character.length; i++) {

    let tarjeta = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("p");
    
    tarjeta.setAttribute("class", "cell"); 
    tarjeta.setAttribute("id", "card"); 
    
    image.setAttribute("src", character[i].image);
    image.setAttribute("class", "image");
    name.innerHTML = character[i].name;
    
    board.appendChild(tarjeta);
    tarjeta.appendChild(image);
    tarjeta.appendChild(name); 
  }
}

function filterBySpecies() {
  let filterBy = select.value;
  // data filtrada
 let species = filter(filterBy, character) 
  addCharacters(species)
 }