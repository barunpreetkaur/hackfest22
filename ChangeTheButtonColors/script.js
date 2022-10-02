var allbuttons = document.getElementsByTagName('button');

var copyAllbuttons = [];
for(let i=0;i<allbuttons.length;i++){
    copyAllbuttons.push(allbuttons[i].classList[0]);
}

console.log(allbuttons);

function buttoncolorChange(buttonthingy){
    if(buttonthingy.value === 'red'){
        buttonsRed();
    }
    else if(buttonthingy.value === 'green'){
        buttonsGreen();
    }
    else if(buttonthingy.value === 'reset'){
        buttonsReset();
    }
    else if(buttonthingy.value === 'random'){
        colorRandom();
    }
}

function buttonsRed(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add("btn4");
    }
}

function buttonsGreen(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add("btn2");
    }
}

function buttonsReset(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add(copyAllbuttons[i]);
    }
}

function colorRandom(){
    var choices = ["btn1","btn2","btn3","btn4"];
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add(choices[Math.floor(Math.random()*4)]);
    }
}