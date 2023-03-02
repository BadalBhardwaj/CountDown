
const inputs = document.querySelectorAll("input");
const content = document.getElementById('title');

//console.log(content);



let interval= setInterval(function (){
    
        const end = new Date("01-01-2023 00:00:00");
        const now = new Date();
    
        const diff = (end-now)/1000;
        //converts into days
    
        inputs[0].value = (Math.floor(diff/3600/24));
    
        //converts into hours
        inputs[1].value = (Math.floor(diff/3600)%24)
    
        //converts into minutes
        inputs[2].value = (Math.floor(diff/60)%60);
    
        //converts into seconds
        inputs[3].value = (Math.floor(diff%60));
        if(inputs[0].value >0){
            content.innerHTML = "few Days are ramming for your birthday!";
        }
        else if(inputs[0].value == 0 && inputs[1].value > 0){
            content.innerHTML = "few Hours are ramming for your birthday!";
        }
        else if(inputs[1].value == 0 && inputs[2].value > 0){
            content.innerHTML = "few Minutes are ramming for your birthday!";
        }
        if(inputs[2].value == 0 && inputs[3].value > 0){
            content.innerHTML = "few Seconds are ramming for your birthday!";
        }
        if(inputs[3].value == 0 && inputs[2].value == 0 && inputs[1].value == 0 && inputs[0].value == 0 ){
            content.innerHTML = " now Celebration time!!!!!!!";
            clearInterval(interval);
        }
},1000)
