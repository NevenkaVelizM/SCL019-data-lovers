import { filter, filterGdr, sort } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

let character = data.results;

const selectSpecies = document.getElementById("select-species")
selectSpecies.addEventListener("change", filterBySpecies);

const selectGender = document.getElementById("select-gender")
selectGender.addEventListener("change", filterByGender);

const selectOrder = document.getElementById("select-sort")
selectOrder.addEventListener("change", sortAlphabetically);

window.addEventListener("load", allCharacters(character));

function allCharacters(character) {
  let board = document.getElementById("board");
  board.innerHTML = "";

  for (let i = 0; i < character.length; i++) {

    let card = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("p");
    
    card.setAttribute("class", "card"); 
    card.setAttribute("id", "file"); 
    
    image.setAttribute("src", character[i].image);
    image.setAttribute("class", "image");
    name.innerHTML = character[i].name;
    
    board.appendChild(card);
    card.appendChild(image);
    card.appendChild(name); 

  }
}

function filterBySpecies() {
  let filterBy = selectSpecies.value;
  // data filtrada
 let speciesFilter = filter(filterBy, character) 
  allCharacters(speciesFilter)
 }
           
 function filterByGender() {
   let filterByGdr = selectGender.value;
   let genderFilter = filterGdr(filterByGdr, character)
   allCharacters(genderFilter)
 }

 function sortAlphabetically() {
   let sortByName = selectOrder.value;
   let nameSort = sort(sortByName, character)
   allCharacters(nameSort)
 }