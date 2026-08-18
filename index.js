let imageBOX = document.getElementById("imgBOX")
let qrimage = document.getElementById("qrimage")
let qrtext = document.getElementById("qrtext")

function gernateQr(){
    if(qrtext.value.length > 0){
   qrimage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
   imageBOX.classList.add("show-img");
    }else{
        // document.getElementById("imgBOX").innerHTML = "<p>error</p>";
        qrtext.classList.add('error');
        setTimeout(()=>{
            qrtext.classList.remove('error');

        },1000)
    }
}
