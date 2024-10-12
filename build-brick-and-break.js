let i = 0;

export function build(n) {
    if (n > 0) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'brick-' + (i + 1));
        
        if ((i + 1) % 3 === 2) {
            newDiv.dataset.foundation = true;
        } else {
            newDiv.removeAttribute('foundation');
        }
        newDiv.innerHTML = i + 1;
        document.body.appendChild(newDiv);
        i++;
        setTimeout(() => {
            build(n - 1); 
        }, 100);
    }
}

export function repair(...ids) {
    ids.forEach((id) => {
        let brick = document.getElementById(id);
        if (brick) {
            if (brick.dataset.foundation) {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }
    });
}
export function destroy() {
    if (i != 0) {
        const element = document.getElementById('brick-' + i);
        if (element) {
            element.remove();
            i--;
        }
    }
}