

    document.querySelector("#continue>div:first-child").addEventListener("click",myfun)

    function myfun(){
             window.location.href="https://accounts.google.com/"
    }

    document.querySelector("#continue>div:last-child").addEventListener("click",myfun2)

    function myfun2(){
             window.location.href="https://www.facebook.com/"
    }
    document.querySelector("button").addEventListener("click",myfun3)

    function myfun3(){
             window.location.href="createacc.html"
             var cnum=document.querySelector("#loginid").value
             localStorage.setItem("contactnumber",cnum)
    }

    document.querySelector("#close").addEventListener("click",closeit)
    function closeit(){
        window.location.href="index.html"
    }
