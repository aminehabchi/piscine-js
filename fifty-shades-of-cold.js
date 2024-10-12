import { colors } from './fifty-shades-of-cold.data.js'
export function generateClasses() {
    let style = document.createElement('style')
    for (let i = 0; i < colors.length; i++) {
        style.textContent += `.${colors[i]}{background:${colors[i]};}`
    }
    document.head.appendChild(style)
}
export function generateColdShades() {

    for (let i = 0; i < colors.length; i++) {
        if (check(colors[i])) {
            let newdiv = document.createElement('div')
            newdiv.className = colors[i]
            newdiv.textContent = colors[i]
            document.body.appendChild(newdiv)
        }
    }
}
function check(colorX) {
    let color = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]
    for (let i = 0; i < color.length; i++) {
        if (colorX.includes(color[i])) {
            return true
        }
    }
    return false
}
export function choseShade(color) {
    let divs = document.getElementsByTagName('div')
    for (let i = 0; i < divs.length; i++) {
        divs[i].className = color
    }
}