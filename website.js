var result;
var str;
function clicknumber(number){
    str=document.getElementById("nummessage");
    str.value=str.value+number;
}
function clickclear(){
    str=document.getElementById("nummessage");
    str.value="";
}
function clickresult() {
    str = document.getElementById("nummessage");
    result = eval(str.value);
    str.value = result;
}
