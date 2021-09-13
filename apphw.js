//Supplied array
let list = ["dog", "fish", "cat", "shark", "cat", "dog"];
let ranList = list;


//set variable to current array

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

//array randomize
const randomize = () => {
    for (let i = 0; i < list.length; i++) {
       let x = ranList[Math.floor(Math.random() * list.length )];
        ranList[i]=x;
    }
}

//reset random list to avoid same variable repeat after multiple randomizing
const reset = () => {
    list = ["dog", "fish", "cat", "shark", "cat", "dog"];
    ranList = list;
}

//initial functions
writeList();
loop();

//random & recall
document.body.querySelector(".button").addEventListener("click",function(){
    randomize();
    writeList();
    loop();
    reset();
});
