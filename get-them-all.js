export const getArchitects = () => {

   const architects = Array.from(document.getElementsByTagName('a'));
    const nonArchitects = Array.from(document.getElementsByTagName('span')); 
   return [architects, nonArchitects];
}

export const getClassical = () => {
    const classical=getArchitects()[0]
    const nonclassical=classical.filter((person) => person.tagName.toLowerCase() !== 'classical');
    return [ classical, nonclassical ];
}

export const getActive = () => {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

export const getBonannoPisano = () => {
    return [
        document.getElementById("BonannoPisano"),
        getActive()[0],
    ];
}