const panel1 = document.querySelectorAll(".panel1");
console.log(panel1);
panel1.forEach((response)=>{
    
    response.addEventListener("click",()=>{
        sil();
        response.classList.add("actived"); 
    })
})


const sil = function(){
    panel1.forEach((response)=>{
    
       
           
            response.classList.remove("actived"); 
       
    })
    
   
}