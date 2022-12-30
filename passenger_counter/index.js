

let saveEl = document.getElementById("save-el")



let countUp = document.getElementById("count-up")

console.log(countUp);
let count = 0;

function increment() {
    count = count + 1 ;
    countUp.textContent = count ;
    console.log(count);
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countUp.textContent = 0;
    count = 0;
    console.log(count)
}





