import { filterSpecies, filterGenders, sort, searchBy } from '../src/data.js';

const characterTest = [
  {name:"Rick Sanchez", id: 1, species: "Human", gender: "Male"}, 
  {name:"Morty Smith", id: 2, species: "Human", gender: "Male"}, 
  {name:"Abadango Cluster Princess", id: 3, species: "Alien", gender: "Female"}, 
  {name:"Amish Cyborg", id: 4, species: "Alien", gender: "Male"},
  {name:"Adjudicator Rick", id: 5, species: "Human", gender: "Male"},
  {name:"Beth Smith", id: 6, species: "Human", gender: "Female"}
];


describe('filter by species', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('should filter by species', () => {
    expect(filterSpecies("Human", characterTest)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", gender: "Male"}, 
      {name:"Morty Smith", id: 2, species: "Human", gender: "Male"}, 
      {name:"Adjudicator Rick", id: 5, species: "Human", gender: "Male"},
      {name:"Beth Smith", id: 6, species: "Human",gender: "Female"}]);
});

it('should filter by species', () => {
  expect(filterSpecies("specie", characterTest)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", gender: "Male"}, 
      {name:"Morty Smith", id: 2, species: "Human", gender: "Male"}, 
      {name:"Abadango Cluster Princess", id: 3, species: "Alien", gender: "Female"}, 
      {name:"Amish Cyborg", id: 4, species: "Alien", gender: "Male"},
      {name:"Adjudicator Rick", id: 5, species: "Human", gender: "Male"},
      {name:"Beth Smith", id: 6, species: "Human", gender: "Female"}
    ]); 
  });
});


describe('filter by genders', () => {
  it('is a function', () => {
    expect(typeof filterGenders).toBe('function');
  });

  it('should filter by genders', () => {
    expect(filterGenders("Male", characterTest)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", gender: "Male"}, 
      {name:"Morty Smith", id: 2, species: "Human", gender: "Male"}, 
      {name:"Amish Cyborg", id: 4, species: "Alien", gender: "Male"},
      {name:"Adjudicator Rick", id: 5, species: "Human", gender: "Male"}]);
});

it('should filter by genders', () => {
  expect(filterGenders("gender", characterTest)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", gender: "Male"}, 
      {name:"Morty Smith", id: 2, species: "Human", gender: "Male"}, 
      {name:"Abadango Cluster Princess", id: 3, species: "Alien", gender: "Female"}, 
      {name:"Amish Cyborg", id: 4, species: "Alien", gender: "Male"},
     {name:"Adjudicator Rick", id: 5, species: "Human", gender: "Male"},
      {name:"Beth Smith", id: 6, species: "Human", gender: "Female"}]); 
  });
});

describe('sort az, za', () => {
  it('is a function', () => {
    expect(typeof sort).toBe('function');
  });

  it('should order from az', () => {
    expect(sort("az", characterTest)).toEqual([
      {name:"Abadango Cluster Princess", id: 3, species: "Alien", gender: "Female"},
      {name:"Adjudicator Rick", id: 5, species: "Human", gender: "Male"},
      {name:"Amish Cyborg", id: 4, species: "Alien", gender: "Male"},
      {name:"Beth Smith", id: 6, species: "Human", gender: "Female"},
      {name:"Morty Smith", id: 2, species: "Human", gender: "Male"}, 
      {name:"Rick Sanchez", id: 1, species: "Human", gender: "Male"}]); 
  });

  it('should order from za', () => {
    expect(sort("za", characterTest)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", gender: "Male"},
      {name:"Morty Smith", id: 2, species: "Human", gender: "Male"},
      {name:"Beth Smith", id: 6, species: "Human", gender: "Female"},
      {name:"Amish Cyborg", id: 4, species: "Alien", gender: "Male"},
      {name:"Adjudicator Rick", id: 5, species: "Human", gender: "Male"},
      {name:"Abadango Cluster Princess", id: 3, species: "Alien", gender: "Female"}]); 
  });
});

describe('search by name', () => {

  it('is a function', () => {
    expect(typeof searchBy).toBe('function');
  });

  it('return `Rick Sanchez`', () => {
    expect(searchBy("Rick Sanchez", characterTest)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", gender: "Male"}]);
    });
  });
