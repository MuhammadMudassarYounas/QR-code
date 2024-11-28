let imgBox=document.getElementById("imgBox");
let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");
let btn=document.querySelector(".btn")


function generateQR(){
   if(qrText.value.length > 0){
    qrImage.src="http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img")
   }else{
    qrText.classList.add("error");
    setTimeout(()=>{
     qrText.classList.remove("error");
    },1000)
   }
}


btn.addEventListener("click",()=>{
    generateQR()
    console.log("button clicked")
})
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateQR();
        console.log("Enter key pressed");
    }
});


