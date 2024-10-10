
export function getArchitects() {
    
    const architects = Array.from(people.getElementsByTagName('a'));

    const allPeople = Array.from(people.getElementsByTagName('*')); 

    const nonArchitects = allPeople.filter((person) => person.tagName.toLowerCase() !== 'a');

    return [architects, nonArchitects];
}

export function getClassical(){
    const allPeople = getArchitects()[0]
    const classical = allPeople.filter(person => person.className.toLowerCase() === 'classical');
    const nonClassical = allPeople.filter(person => person.className.toLowerCase() !== 'classical');

    return [classical, nonClassical];
}
export function getActive(){
    const allPeople = Array.from(document.getElementsByClassName('*')); 

    const active =  allPeople.filter(person => person.className.toLowerCase() === 'active');

    const nonActive = allPeople.filter(person => person.className.toLowerCase() !== 'active');

    return [active, nonActive];

}
// export function getBonannoPisano(){
      
//     const architects = Array.from(document.getElementsByTagName('BonannoPisano'));

//     const allPeople = Array.from(document.getElementsById('*')); 

//     const nonArchitects = allPeople.filter(person => person.t.toLowerCase() !== 'BonannoPisano');

//     return [architects, nonArchitects];
// }
