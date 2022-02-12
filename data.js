// Filtros por especies y género 
export const filterSpecies = (filterBySpecie, character) => {

  let filteredSpecies;

  if (filterBySpecie == "specie") {
    filteredSpecies = character;

  } else {
    filteredSpecies = character.filter(element => {
      return element.species.includes(filterBySpecie);
    });
  }

  return filteredSpecies;

}

 
export const filterGenders= (filterByGender, character) => {

let filteredGender;

if (filterByGender == "gender") {
  filteredGender = character; 

} else {
  filteredGender = character.filter(element => {
    return element.gender.includes(filterByGender);

  });
}
return filteredGender;
}

// Orden alfabetico (ascendente-descendente)
export const sort = (sortByName, character) => {

let sorteredName;

if (sortByName == "az") {
  sorteredName = character.sort((a, b) => {
    return (a.name < b.name) ? -1 : 1 
  });

} else { 
  (sortByName == "za") 
    sorteredName = character.sort((a, b) => {
      return (a.name > b.name) ? -1 : 1
  });
}
return sorteredName; 
}

// Buscar por nombre de personaje 
export const searchBy = (searchByName, character) => {

let nameSearch = (character) => character.name.toLowerCase().includes(searchByName.toLowerCase());
let searchCharacter = character.filter(nameSearch);
return searchCharacter;

};


// Cálculo agregado (porcentaje de humanos y aliens)
export const getHumanPercentage = (character) => {

let filterBySpecie = "Human";

let totalHuman = filterSpecies(filterBySpecie, character);
totalHuman = totalHuman.length;

let totalCharacter = character.length;

return ((totalHuman / totalCharacter)*100).toFixed(0);
};

export const getAlienPercentage = (character) => {

let filterBySpecie = "Alien";

let totalAlien = filterSpecies(filterBySpecie, character);
totalAlien = totalAlien.length;
let totalCharacter = character.length;

return ((totalAlien / totalCharacter)*100).toFixed(0);
};




