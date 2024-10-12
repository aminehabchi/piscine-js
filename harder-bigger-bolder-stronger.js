export function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let newdiv = document.createElement('div')
        if (i < 40) {
            newdiv.setAttribute("style", `font-weight:300;font-size:${i+11}px`)
        } else if (i < 80) {
            newdiv.setAttribute("style", `font-weight:400;font-size:${i+11}px`)
        } else {
            newdiv.setAttribute("style", `font-weight:600;font-size:${i+11}px`)
        }
        newdiv.textContent=generateRandomLetter()
        document.querySelector('body').appendChild(newdiv)
    }

}
function generateRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
}