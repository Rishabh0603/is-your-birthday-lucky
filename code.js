var dates  = document.querySelector("#date-id");
var lucky = document.querySelector("#lucky-id");
var button = document.querySelector("#button-id");
var answer = document.querySelector("#output-answer");

answer.style.display = "none";

function adding_date(){
    var sum =0;
    var date = dates.value;
    var new_date = date.replaceAll("-","");
    for(var i =0;i < new_date.length;i++){
    var ch = new_date.charAt(i);
    var conversion = parseInt(ch);
    sum = sum+conversion;
    }
    return sum;
}


function check_lucky(){
    var add = adding_date();
    var lucky_number = lucky.value;
    if(add && lucky_number){
   checkbirthday(add,lucky_number);}
    else{
        answer.style.display ="block";
        answer.innerText = "Enter both the fields";}
    
}
function checkbirthday( add, lucky_number){
    if(add % lucky_number === 0){
        answer.style.display ="block";
        answer.innerText = "It is a lucky number 🤩";
    }
    else{
        answer.style.display ="block";
    answer.innerText = "Your Birthday is not so lucky 😕";
}
}

button.addEventListener("click",check_lucky);