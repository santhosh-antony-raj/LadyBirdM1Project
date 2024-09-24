const inputs = document.querySelectorAll("input");
const msg = document.getElementById("msg");
const msgn = document.getElementById("msgn");
const msge = document.getElementById("msge");
const msgc = document.getElementById("msgc");
const msgp = document.getElementById("msgp");

function formHandle(){
    event.preventDefault();
    let user = inputs[0].value;
    let email = inputs[1].value;
    let cpass = inputs[3].value;
    let pass = inputs[2].value;

    for(let i=0; i<inputs.length; i++){
        inputs[i].style.border="none";
        msg.innerText=""
        msgn.innerText=""
        msge.innerText=""
        msgc.innerText=""
        msgp.innerText=""


    }

    if(user == ""){
        
        console.warn("Missing Fields");
        inputs[0].style.border="2px solid red";
        msgn.innerText="Missing UserName"
        msgn.style.color="red"
    }else if(email==""){
        
        console.warn("Missing Fields");
        inputs[1].style.border="2px solid red";
        msge.innerText="Missing Email"
        msge.style.color="red"
    }
    else if(!email.includes("@gmail.com")){
        
        console.warn("Missing Fields");
        inputs[1].style.border="2px solid red";
        msge.innerText="Not a Valid Email"
        msge.style.color="red"
    }
    else if(pass==""){
        
        console.warn("Missing Fields");
        inputs[2].style.border="2px solid red";
        msgp.innerText="Missing Password"
        msgp.style.color="red"
    }
    else if(pass.length<8 ){
        inputs[2].style.border="2px solid red";
        msgp.innerText="Should greater than 8";
        msgp.style.color="red";
    }
    else if(!pass.includes("#") && !pass.includes("@") && !pass.includes("#")){
    console.warn("Missing Fields");
    inputs[2].style.border="2px solid red";
    msgp.innerText="Contains alteast one (#@$)";
    msgp.style.color="red";
    }
    else if(cpass==""){
        
        console.warn("Missing Fields");
        inputs[3].style.border="2px solid red";
        msgc.innerText="Missing Confirm Password"
        msgc.style.color="red"
    }
    else if(cpass.length<8 ){
        inputs[3].style.border="2px solid red";
        msgc.innerText="Should greater than 8";
        msgc.style.color="red";
    }
    else if(!cpass.includes("#") && !cpass.includes("@") && !cpass.includes("#")){
    console.warn("Missing Fields");
    inputs[3].style.border="2px solid red";
    msgc.innerText="Contains alteast one (#@$)";
    msgc.style.color="red";
    }
    
    else if(cpass!=pass){
        console.warn("Missing Fields");
        inputs[3].style.border="2px solid red";
        inputs[2].style.border="2px solid red";
        msgc.innerText="Password Miss Match"
        msgc.style.color="red"
        msgp.innerText="Password Miss Match"
        msgp.style.color="red"

    }
    else{
        console.log("Success")
        inputs[0].style.border="2px solid green";
        inputs[1].style.border="2px solid green";
        inputs[2].style.border="2px solid green";
        inputs[3].style.border="2px solid green";
        msg.innerText="Success"
        msg.style.color="green"
        window.location.href="index.html"
    }

}




