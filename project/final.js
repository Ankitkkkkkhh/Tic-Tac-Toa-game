let Boxes = document.querySelectorAll("#box")
let ResetBtn = document.querySelector("#ResetBtn")
let newGameBtn =document.querySelector("#new-Btn") //new game
let msgContainer= document.querySelector(".messg-container") // line no 10
let msg =document.querySelector("#msg")

// Now we have to tarack the player turns ex,= x,o,x,o,x,o,x,o

let turnO =true;//PlayerX, PlayerY;
let wingPartten=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// step3
const restGame=()=>{
    turnO =true;
    enabledBox()
    msgContainer.classList.add('hide')
}

//now using arro function step1
Boxes.forEach((box)=>{
    box.addEventListener("click",()=>{                                       //adding event handlear
        if (turnO) {                                                   //playerO    // this if value alrady declared true
            box.innerText="O"
            turnO=false
        }else{                                                              //playerXS
            box.innerText="X"
            turnO=true 
        }                                                               //this logic is work but we already tu samja bus for that we writh
        box.disabled= true                                              // we have check winer   for that we creat seprate function  
        checkWinn();                                                    // this is the function

    });
})

const disabledBox =()=>{ // disabled function  
    for(let box of Boxes)
    box.disabled=true
}

const enabledBox = ()=>{ // disabled function  
    for(let box of Boxes){
    box.disabled=false
    box.innerText="";
}
};

// 2 step
const showWinner =(winer) =>{
    msg.innerText= `Congratulation, Winner is ${winer}`
    msgContainer.classList.remove("hide")
    disabledBox()

};

// 1.a step
const checkWinn = () =>{                                                    // this is the function
        for(let pattern of wingPartten){                                        // kisi bhi box ko click kanre se function me  checkWinn(); call jata hai
        // // console.log(pattern); 
        // console.log(pattern[0],pattern[1],pattern[2]);                      // when we chick index value come
        // // console.log(Boxes[pattern[0]],Boxes[pattern[1]],Boxes[pattern[2]]);   // in this iam printing all boxes  html    

        // console.log(
        // Boxes[pattern[0]].innerText, 
        // Boxes[pattern[1]].innerText, 
        // Boxes[pattern[2].innerText]
        // ); // now we store all this into variable 

        let po1val= Boxes[pattern[0]].innerText;
        let po2val= Boxes[pattern[1]].innerText;
        let po3val= Boxes[pattern[2]].innerText;

        if (po1val !=""  && po2val !="" && po3val !="") {
            if(po1val === po2val && po2val===po3val)
        showWinner(po1val);
        }
    }

};
newGameBtn.addEventListener("click",restGame);
// ResretBtn.addEventListener("click",restGame);
ResetBtn.addEventListener("click",restGame);
