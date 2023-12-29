let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset');
let newBtn=document.querySelector('#new-btn');
let msg=document.querySelector('#msg');
let heading=document.querySelector('.heading');




let turnO=true;

const winpatterns=[
    [0,1,2],[0,4,8],[0,3,6],
    [1,4,7],[2,5,8],[3,4,5],
    [6,7,8],[2,4,6]
]

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msg.classList.add('hide');
    newBtn.classList.add('hide');
    resetBtn.classList.remove('hide');
    heading.classList.remove('hide');
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});


const checkWinner = () =>{
    for( let pattern of winpatterns){
        position1=boxes[pattern[0]].innerText;
        position2=boxes[pattern[1]].innerText ;
        position3=boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if (position1===position2 && position2===position3){
                console.log("winner", position1);
                showWinner(position1);
            }
        }
    }
}


const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg.classList.remove('hide');
    newBtn.classList.remove('hide')
    heading.classList.add('hide');
    resetBtn.classList.add('hide');
    
    
    
    disableBoxes();
    
}

const disableBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);

