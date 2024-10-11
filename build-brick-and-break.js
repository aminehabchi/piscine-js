export function build(n) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'brick-' + (i + 1));
    if ((i + 1) % 3 === 2 ){
        newDiv.setAttribute("foundation", "true")
    }
    document.body.appendChild(newDiv);
    newDiv.innerHTML = i + 1
    n--
    i++
    if (n > 0) {
        setTimeout(() => {
            build(n);
        }, 100);
    }
}

export function repair(...ids) {
    ids.forEach((id) => {
        let brick = document.getElementById(id);
        let a= brick.getAttribute("foundation")
  
        if (a=="true"){
            brick.setAttribute("data-repaired", 'in progress')
        } else{
            brick.setAttribute("data-repaired", "true")
        }
    });
}
let i = 0
export function destroy() {
    if (i != 0) {
        const element = document.getElementById('brick-' + i);
        element.remove();
        i--
    }
}