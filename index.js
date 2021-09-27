function check(){
    let age = prompt("Enter your age here?");
    if(age==""){
        document.getElementById("rs_head").innerHTML="";
        document.getElementById("result").innerHTML= "Ooops So Sorry."
    }else{
        let calc = age*365;
        document.getElementById("result").innerHTML= "You are " + calc + " Days old.";
    }
}

function reset(){
    document.getElementById("result").innerHTML="";
}
