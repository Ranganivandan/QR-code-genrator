let divimg=document.getElementById("img");
let qrcode=document.getElementById("imgcode");
let qrtext=document.getElementById("qrtext");


function  code(){
    if(qrtext.value.length>0){
qrcode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    }
    else{
        console.log("error")
        setTimeout(()=>{
            qrtext.classList.add('error');
        },1000)
    }
}

