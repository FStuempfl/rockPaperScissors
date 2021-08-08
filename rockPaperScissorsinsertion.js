function display() {
    alert("Hello World!")
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));

function computerPlay(i){
    i = getRandomInt(3);
    console.log(i);
    if (i === 1){
        console.log("Scissors")
    }
    else if (i === 2){
        console.log("Rock")
    }
    else {
        console.log("Paper")
    }
    console.log(i)
}
computerPlay();
