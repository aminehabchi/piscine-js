export function compose() {
    document.addEventListener('keydown', function (event) {
        if (event.key === "Backspace") {
            let divs = document.getElementsByTagName('div')
            if (divs.length > 0) {
                divs[divs.length - 1].remove()
            }
        } else if (event.key === "Escape") {
            let divs = document.getElementsByTagName('div')
            while (divs.length > 0) {
                divs[0].remove()
            }
        } else if (event.key>='a' && event.key <='z') {
            let newdiv = document.createElement('div')
            newdiv.className = "note"
            newdiv.textContent = event.key
            newdiv.style.background= `rgb(${event.key.charCodeAt(0)}, ${event.key.charCodeAt(0)+12}, ${event.key.charCodeAt(0)+50})`
            document.body.appendChild(newdiv)
        }
    });
}
