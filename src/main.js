import { filterSpecies, filterGenders, sort, getHumanPercentage, getAlienPercentage } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

let character = data.results;

const selectSpecies = document.getElementById("select-species")
selectSpecies.addEventListener("change", filteredBySpecies);

const selectGender = document.getElementById("select-gender")
selectGender.addEventListener("change", filteredByGenders);

const selectOrder = document.getElementById("select-sort")
selectOrder.addEventListener("change", sortAlphabetically);

const computeHuman  = document.getElementById("compute-human")
computeHuman.innerHTML = getHumanPercentage(character);

const computeAlien = document.getElementById("compute-alien")
computeAlien.innerHTML = getAlienPercentage(character);


window.addEventListener("load", allCharacters(character));


function allCharacters(character) {
  let board = document.getElementById("board");
  board.innerHTML = "";

  for (let i = 0; i < character.length; i++) {

    let card = document.createElement("div");
    card.setAttribute("class", "card"); 
    card.setAttribute("id", "card"); 
    board.appendChild(card);

    let cardFront = document.createElement("div");
    cardFront.setAttribute("class", "cardFront");
    cardFront.setAttribute("id", "cardFront");
    let imageFront = document.createElement("img");
    imageFront.setAttribute("class", "imageFront");
    imageFront.setAttribute("src", character[i].image);
    let nameFront = document.createElement("p");
    nameFront.innerHTML = character[i].name;
    card.appendChild(cardFront);
    cardFront.appendChild(imageFront);
    cardFront.appendChild(nameFront); 
    
    let cardBack = document.createElement("div");
    cardBack.setAttribute("class", "cardBack");
    cardBack.setAttribute("id", "cardBack");
    let nameBack = document.createElement("p");
    nameBack.innerHTML = "Name: " + character[i].name;
    let speciesBack = document.createElement("p");
    speciesBack.innerHTML = "Specie: " + character[i].species;
    let genderBack = document.createElement("p");
    genderBack.innerHTML = "Gender: " + character[i].gender;
    let statusBack = document.createElement("p");
    statusBack.innerHTML = "Status: " + character[i].status;
    let originBack = document.createElement("p");
    originBack.innerHTML = "Origin: " + character[i].origin.name;
    
    card.appendChild(cardBack);
    cardBack.appendChild(nameBack);
    cardBack.appendChild(speciesBack); 
    cardBack.appendChild(genderBack); 
    cardBack.appendChild(statusBack); 
    cardBack.appendChild(originBack);
    
  }
}

function filteredBySpecies() {
  // se obtiene el valor de las opciones del select
  let filterBySpecie = selectSpecies.value;
  // data filtrada por especie
 let speciesFilter = filterSpecies(filterBySpecie, character) 
 // se muestra la data filtrada
  allCharacters(speciesFilter)
 }
           
 function filteredByGenders() {
   let filterByGender = selectGender.value;
   let genderFilter = filterGenders(filterByGender, character)
   allCharacters(genderFilter)
 }

 function sortAlphabetically() {
   let sortByName = selectOrder.value;
   let nameSort = sort(sortByName, character)
   allCharacters(nameSort)
 }

