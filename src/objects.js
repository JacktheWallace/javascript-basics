const createPerson = (name, age) => {
  const Person = {

  name: name,
  age: age,

  };

  return Person
};

const getName = object => {
  return object.name
};

const getProperty = (property, object) => {
  
  return object[property]

}; 

const hasProperty = (property, object) => {
   return object.hasOwnProperty(property)
};

const isOver65 = person => {
  if (person.age <= 65) { 
    return false
  } else {
    return true
  }
};

const getAges = people => {
  return people.map((el) => {return el.age})
};

const findByName = (name, people) => {
  return people.find((person) => {return person.name === name})
};

const findHondas = cars => {
  return cars.filter((el) => el.manufacturer === 'Honda')
};

const averageAge = people => {
 
  return people.map((el) => {return el.age}).reduce((prev, accu) => prev + accu, 0)/people.length
    
};

const createTalkingPerson = (name, age) => {
 return { 
 name: name,
 age: age,
 introduce: function(friend) {return 'Hi ' + friend + ', my name is ' + this.name + ' and I am ' + this.age + '!'}
 }; 

};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
