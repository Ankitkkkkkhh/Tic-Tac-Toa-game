let Boxes = document.querySelectorAll("#box")  //game Box
let ResetBtn = document.querySelector("#ResetBtn")
let newGameBtn =document.querySelector("#new-Btn") //new game
let msgContainer= document.querySelector(".messg-container") // line no 10
let msg =document.querySelector("#msg")

// player turns x,o,x,o,x,o,x,o

let turnO =true;//Player0, PlayerY;
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

// step4
const restGame=()=>{
    turnO =true;
    enabledBox()
    msgContainer.classList.add('hide')
}

// step1
Boxes.forEach((box)=>{   //select 9 box 
    box.addEventListener("click",()=>{                                       //adding event handlear
        if (turnO) {                                                   //playerO    // this if value alrady declared true
            box.style.color="blue";
            box.innerText="O"
            turnO=false
        }else{                                                              //playerXS
            box.innerText="X"
            turnO=true 
        }                                                               //this logic is work but we already tu samja bus for that we writh
        box.disabled= true                                              // we have check winer   for that we creat seprate function  
        checkWinn();        //step2                                            // this is the function

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

// // 3 step
const showWinner =(winer) =>{
    msg.innerText= `Congratulation, Winner is ${winer}`
    msgContainer.classList.remove("hide")
    disabledBox()

};


// // 2 step
const checkWinn = () =>{                                                    
        for(let pattern of wingPartten){     //this select all parten                                    // kisi bhi box ko click kanre se function me  checkWinn(); call jata hai
        // console.log(pattern); 
        // console.log(pattern[0],pattern[1],pattern[2]);                            // when we chick index value come
        // console.log(Boxes[pattern[0]],Boxes[pattern[1]],Boxes[pattern[2]]);       // in this iam printing all boxes  html    
                
            
        let po1val= Boxes[pattern[0]].innerText; // line no 69 put into let variable
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
