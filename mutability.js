// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
//   }
const clone1 = Object.assign({}, person);
const clone2 = Object.assign({}, person);

const samePerson = person;

person.country='FR'
person.age++

// console.log(person)
// console.log(clone1)
// console.log(clone2)
// console.log(samePerson)
