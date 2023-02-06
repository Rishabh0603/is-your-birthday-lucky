var date = document.querySelector("#date-id");
var lucky = document.querySelector("#lucky-id");
var button = document.querySelector("#button-id");
var answer = document.querySelector("#output-answer");
function clickeventhandler()
{
    var dates = date.value;
    var lucky_number = lucky.value;
    var sum = 0;
    answer.style.display="none";
    if(typeof(dates)!="undefined" && typeof(lucky_number)!="undefined"){
    for(var i = 0;i<dates.length;i++){
        if(dates.charAt(i)=='1'||dates.charAt(i)=='2'||dates.charAt(i)=='3'||dates.charAt(i)=='4'||dates.charAt(i)=='5'||dates.charAt(i)=='6'||dates.charAt(i)=='7'||dates.charAt(i)=='8'||dates.charAt(i)=='9'){
            var ch = dates.charAt(i);
        var convert = parseInt(ch);
        sum+=convert;
    } }
    if(sum%lucky_number==0){
        answer.style.display="block";
    answer.innerText="this is a lucky number";
}
    else{
        answer.style.display="block";
    answer.innerText="this is not a lucky number";
}
}
else{
    console.log("heelo");
    answer.style.display="block";
    answer.innerText="Please enter in both fields";
}
}

button.addEventListener("click", clickeventhandler);
