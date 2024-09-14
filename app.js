let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgconatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let cntbtn = 0;

const winPat  = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const draw = () =>{
    msg.innerText = "It's an Draw.";
    msgconatiner.classList.remove("hide");
    cntbtn = 0;
}

const resetGame = () =>{
    turnO = true;
    EnableBtn();
    msgconatiner.classList.add("hide");
    cntbtn = 0;
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        cntbtn++;
        if(cntbtn === 9)
        {
            draw();
        }

        if(turnO === true)
        {
            box.innerText = "O";
            box.style.color = "orange";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const DisableBtn = ()=>{
    for(box of boxes)
    {
        box.disabled = true;
    }
}

const EnableBtn = ()=>{
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulaton the winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    DisableBtn();
}

const checkWinner = ()=>
{
    for(let pat of winPat)
    {
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if(pos1 != "" && pos2 !="" && pos3 !="")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                showWinner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

