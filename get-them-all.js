
export function getArchitects() {
    let a = Array.from(document.getElementsByTagName('a'))
    let b = Array.from(document.getElementsByTagName('span'))
    return [a, b]
}

export function getClassical() {
    let people = getArchitects()[0]
    let a = people.filter((x) => x.tagName.toLowerCase() == 'classical')
    let b = people.filter((x) => x.tagName.toLowerCase() !== 'classical')
    return [a, b]
}

export function getActive() {
    let people = getClassical()[0]
    let a = people.filter((x) => x.active)
    let b = people.filter((x) => !x.active)
    return [a, b]
}

export function getBonannoPisano() {
    let i = document.getElementById('BonannoPisano')
    let people = getClassical()[0].filter((x) => x.active)
    return [i, people]
}
