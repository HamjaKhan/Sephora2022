
    sendOtp();
    let otp;
    function sendOtp(){
        setTimeout(()=>{
            otp = Math.floor(Math.random() * 900000) + 99999;
            alert(otp);
        },3000)
    }
 



document.querySelector("#btnpay").addEventListener("click",funbtn)

   function funbtn () {
    var enteredOtp = document.getElementById("input1").value;

    if(otp == enteredOtp){
            document.getElementById("errorMsg").textContent = "";
            
            window.location.href="orderplaced.html"
}
else{
            document.getElementById("errorMsg").textContent = "Invalid OTP";
         }
        }

