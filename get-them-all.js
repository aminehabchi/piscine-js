
export function getArchitects(people) {
    
    const architects = Array.from(people.getElementsByTagName('a'));

    const allPeople = Array.from(people.getElementsByTagName('*')); 

    const nonArchitects = allPeople.filter(person => person.tagName.toLowerCase() !== 'a');

    return [architects, nonArchitects];
}

export function getClassical(){
       
    const classical = Array.from(document.getElementsByClassName('classical'));

    const allPeople = Array.from(document.getElementsByClassName('*')); 

    const nonClassical = allPeople.filter(person => person.className.toLowerCase() !== 'classical');

    return [classical, nonClassical];
}
export function getActive(){
      
    const active = Array.from(document.getElementsByClassName('active'));

    const allPeople = Array.from(document.getElementsByClassName('*')); 

    const nonActive = allPeople.filter(person => person.className.toLowerCase() !== 'active');

    return [active, nonActive];

}
// export function getBonannoPisano(){
      
//     const architects = Array.from(document.getElementsByTagName('BonannoPisano'));

//     const allPeople = Array.from(document.getElementsById('*')); 

//     const nonArchitects = allPeople.filter(person => person.t.toLowerCase() !== 'BonannoPisano');

//     return [architects, nonArchitects];
// }
