let sessionCount = document.getElementById("session-count");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

const min_timer = document.getElementById("timer-min");
const sec_timer = document.getElementById("timer-sec");

let todo = document.getElementById("todo");
console.log(todo);

let session_count=1;
let min_count = 25;
let sec_count = 0;

let flag = 0;


function breakTimer(){
     
    flag=0;
}

function workTimer(){
    
}





startBtn.addEventListener("click",()=>{
    sessionCount.innerText=session_count.toString();
    todo.innerText="!!Work Time!!";
    const intervalId = setInterval(()=>{
        
        if(sec_count==0) {
            min_count--;
            sec_count=60;

            if(min_count<=0){
                console.log("hello");
                
               
                if(flag==0){
                    min_count = 5;
                    sec_count = 0;
                    flag = 1;
                    todo.innerText="!!Break Time!!";
                }
                else if(flag ==1){
                    min_count = 25;
                    sec_count = 0;
                   flag = 0;
                   todo.innerText="!!Work Time!!";
                   session_count++;
                }
                
    
                
                sessionCount.innerText=session_count.toString();
    
            }


        }
         else{
        sec_count--;
        sec_timer.innerText=sec_count.toString();
        min_timer.innerText=min_count.toString();}


    },1000);

    stopBtn.addEventListener("click",()=>{

        clearInterval(intervalId);
        min_timer.innerText=25;
        sec_timer.innerText=0;
    })

   
})
