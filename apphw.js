//Supplied array
let list = ["dog", "fish", "cat", "shark", "cat", "dog"];
let ranList = [];
let x;


//set variable to current array
//let ranList=list

//write function
const write = (message)=> {
    let wEle = document.body.querySelector(".container");
    let cEle=document.createElement("div");
    cEle.innerHTML=message;
    wEle.appendChild(cEle);
}
//Array write function
const writeList = ()=> {
    write (ranList);
}

//if/then/else loop
const loop = ()=> {
    for (let i = 0; i < list.length; i++) {
        if (ranList[i] === "dog") {
            write("borf borf");
        } else if (ranList[i] === "cat") {
            write("I am a cat");
        } else {
            write("I am an animal");
        }
    }
}

const randomize = () => {
    gen();
    ranList[i] = x;

}

const gen = () => {
    x = Math.floor(Math.random() * list.length);
}
input();
writeList();
//random & recall
// document.body.querySelector(".button").addEventListener("click",randomize());
