var numberreg=localStorage.getItem("contactnumber")
document.querySelector("#phonenumbers").value=numberreg

document.querySelector("#back").style.cursor="pointer"

document.querySelector("#back").addEventListener("click",back)
function back(){
    window.location.href="login.html"    
}

document.querySelector("button").addEventListener("click",create)
function create(){
    window.location.href="verify.html" 
    user=[]
    var obj={
        title:document.querySelector("#titles").value,
        name:document.querySelector("#names").value,
        email:document.querySelector("#emails").value,
        pasword:document.querySelector("#passwords").value,
        phonenumber:document.querySelector("#phonenumbers").value,
    } 
    user.push(obj)
    localStorage.setItem("userdetails", JSON.stringify(user))
}