let counter=0;
function updateClock(){
    let hrs=document.querySelector("#hours12");
    let min=document.querySelector(".minutes");
    let sec=document.querySelector(".seconds");
    let hrs24=document.querySelector("#hours");
    let min24=document.querySelector(".minutes24");
    let sec24=document.querySelector(".seconds24");
    let am=document.querySelector("#am");
    
    let now= new Date();
    let Hours= now.getHours().toString().padStart(2,"0");
    let Minutes= now.getMinutes().toString().padStart(2,"0");
    let Seconds= now.getSeconds().toString().padStart(2,"0");

    let hours12= ((now.getHours()+11)%12+1).toString().padStart(2,"0") ;
    let ampm= now.getHours>12?"pm":"am";

    function update12hrs(){
        console.log(`12hrs format-${hours12}:${Minutes}:${Seconds}:${ampm}`);
    }
    function update24hrs(){
        console.log(`24hrs format-${Hours}:${Minutes}:${Seconds}`);
    }
    console.clear();
    update12hrs();
    update24hrs();
    setTimeout(updateClock, 1000);
    hrs.innerText=hours12;
    min.innerText=Minutes;
    sec.innerText=Seconds;
    hrs24.innerText=Hours;
    min24.innerText=Minutes;
    sec24.innerText=Seconds;
    am.innerText=ampm;
}
updateClock();