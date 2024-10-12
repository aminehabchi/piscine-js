const styles = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'
];
let i = 0;
let myclass = 'button'; 
let bl = true; 
export function pimp() {
    let button = document.getElementsByClassName(myclass);  
    
    if (bl) {

        button[0].className += " " + styles[i];
        myclass = button[0].className;  
        i++;
        

        if (i == styles.length) {
            bl = false;  
            button[0].textContent = 'Unpimp my style';  
        }
    } else {

        myclass = myclass.split(' ').slice(0, -1).join(' ');  
        button[0].className = myclass;  
        i--;
        
        if (i == 0) {
            bl = true;  
            button[0].textContent = 'Pimp my style'; 
        }
    }
}
