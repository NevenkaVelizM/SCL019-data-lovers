export const filter = (filterBy, character,) => {

    let filteredSpecies;
  
    if (filterBy == "specie") {
      filteredSpecies = character;
    }
    else {
      filteredSpecies = character.filter(element => {
        return element.species.includes(filterBy);
      });
    }
  
    return filteredSpecies;
  }