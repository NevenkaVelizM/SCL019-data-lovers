
export const filter = (filterBy, character) => {

  let filteredSpecies;

  if (filterBy == "specie") {
    filteredSpecies = character;

  } else {
    filteredSpecies = character.filter(element => {
      return element.species.includes(filterBy);
    });
  }

  return filteredSpecies;

}

export const filterGdr = (filterByGdr, character) => {

let filteredGender;

if (filterByGdr == "gender") {
  filteredGender = character; 

}else{
  filteredGender = character.filter(element => {
    return element.gender.includes(filterByGdr);

  });
}
return filteredGender;
}

export const sort = (sortByName, character) => {

let sorteredName;

if (sortByName == "az") {
  sorteredName = character.sort((a, b) => {
    return (a.name < b.name) ? -1 : 1 
  });

}else{ 
  (sortByName == "za") 
    sorteredName = character.sort((a, b) => {
      return (a.name > b.name) ? -1 : 1
  });
}
return sorteredName; 
}