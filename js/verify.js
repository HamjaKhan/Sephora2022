sendOtp();
    let otp;
    function sendOtp(){
        setTimeout(()=>{
            otp = Math.floor(Math.random() * 5000) + 999;
            alert(otp);
        },2000)
    }


var numbers=localStorage.getItem("contactnumber")
document.querySelector("#no-show").append(numbers)

document.querySelector("#back").style.cursor="pointer"
document.querySelector("#back").addEventListener("click",back)
function back(){
    window.location.href="createacc.html"    
}


var Button=document.querySelector("button")
    
Button.addEventListener("click",submitit)
function submitit(){
    var otps=document.querySelector("#myotp").value
    if(otps==otp)
    {
        window.location.href="index.html"
    }
    else
    {
        document.querySelector("#wrongotp").append("Enter corect otp")
    }
    
}
