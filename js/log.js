const inputs = document.querySelectorAll("input");
const msgn = document.getElementById("msgn")
const msgp = document.getElementById("msgp")
function formHandle(){
    event.preventDefault();
    let email = inputs[0].value;
    let password = inputs[1].value;

    for(let i=0; i<inputs.length; i++){
        inputs[i].style.border="none";
        msgn.innerText=" "
        msgp.innerText=" "

    }

    if(email == ""){
        
        console.warn("Missing Fields");
        inputs[0].style.border="2px solid red";
        msgn.innerText="Missing Email Address"
        msgn.style.color="red"
    }
    else if(!email.includes("@gmail.com")){
        
        console.warn("Missing Fields");
        inputs[0].style.border="2px solid red";
        msgn.innerText="Not a Valid Email"
        msgn.style.color="red"
    }
    
    else if(password==""){
        
        console.warn("Missing Fields");
        inputs[1].style.border="2px solid red";
        msgp.innerText="Missing Password";
        msgp.style.color="red";
        
        
    }
    else if(password.length<8 ){
        inputs[1].style.border="2px solid red";
        msgp.innerText="Should greater than 8";
        msgp.style.color="red";
    }
    else if(!password.includes("#") && !password.includes("@") && !password.includes("#")){
    console.warn("Missing Fields");
    inputs[1].style.border="2px solid red";
    msgp.innerText="Contains alteast one (#@$)";
    msgp.style.color="red";
    }
    else{
        console.log("Sucess")
        inputs[0].style.border="2px solid green";
        inputs[1].style.border="2px solid green";
        msg.innerText="Success"
        msg.style.color="green"
        window.location.href="home.html"
    }

}



