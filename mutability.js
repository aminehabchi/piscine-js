// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
//   }
const clone1 = Object.assign({}, person);
clone1.country='FR'
const clone2 = Object.assign({}, person);
clone2.country='FR'
const samePerson = person;


person.age++

// console.log(person)
// console.log(clone1)
// console.log(clone2)
// console.log(samePerson)
