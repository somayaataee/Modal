const modal = document.querySelector(".modal");
const ovarlay = document.querySelector(".ovarlay");
const btnsOpenmodal = document.querySelectorAll(".show-modal");
const btnsClosemodal =document.querySelector(".close-modal");

// console.log(btnsOpenmodal);

for(let i = 0; i< btnsOpenmodal.length; i++){
    btnsOpenmodal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        ovarlay.classList.remove('hidden');
    });
    btnsClosemodal.addEventListener('click',function(){
        modal.classList.add('hidden');
        ovarlay.classList.add('hidden');
    });
    
    
}