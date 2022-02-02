import { filter, filterGdr, sort } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

let character = data.results;
let board = document.getElementById("board");

const select = document.getElementById("selectSpecies")
select.addEventListener("change", filterBySpecies);

const selectGdr = document.getElementById("selectGender")
selectGdr.addEventListener("change", filterByGender);

const selectOrder = document.getElementById("selectSort")
selectOrder-addEventListener("change", sortAlphabetically);

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
 let speciesFilter = filter(filterBy, character) 
  addCharacters(speciesFilter)
 }
           
 function filterByGender() {
   let filterByGdr = selectGdr.value;
   let genderFilter = filterGdr(filterByGdr, character)
   addCharacters(genderFilter)
 }

 function sortAlphabetically() {
   let sortByName = selectOrder.value;
   let nameSort = sort(sortByName, character)
   addCharacters(nameSort)
 }