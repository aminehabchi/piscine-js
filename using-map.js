function citiesOnly(ar) {
    return ar.map((x) => x.city)
}

function upperCasingStates(ar) {
    return ar.map((x) => capitalize(x))
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fahrenheitToCelsius(ar) {
    return ar.map((x) => convert(x.slice(0, x.length - 2)) + "°C")
}
function convert(f) {
    return Math.floor((f - 32) * 5 / 9);
}

function trimTemp(obj) {
    return obj.map((o) => {
        o.temperature = trim(o.temperature)
        return o
    })
}
function trim(s) {
    let ss = ''
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            ss = ss + s[i]
        }
    }
    return ss
}

function tempForecasts(obj) {
    return obj.map((o) => {
        let t=trim(o.temperature)
        t=convert(t.slice(0,t.length-2))
        return t+'°Celsius in '+capitalize(o.city)+', '+capitalize(o.state)
    })
}

