let display = document.getElementById("inputBox"); 

let button = document.querySelectorAll("button");

let string = "";

let buttonArray = Array.from(button);

buttonArray.forEach((btn)=>{

btn.addEventListener("click",(e)=>{
//e.target.innerHTML;
if(e.target.innerHTML == "DEL"){
    string =  string.substring(0, string.length-1)
}
string += e.target.innerHTML;
display.value = string;

//console.log(e.target.innerHTML);
});


   // console.log(btn);
});
