const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenmodal = document.querySelectorAll(".show-modal");
const btnsClosemodal =document.querySelector(".close-modal");
//close modal
const CloseModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

//open Modal
const OpenModal = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } 

for(let i = 0; i< btnsOpenmodal.length; i++){
    btnsOpenmodal[i].addEventListener('click',OpenModal);
    btnsClosemodal.addEventListener('click',CloseModal);
    overlay.addEventListener('click',CloseModal )
}

//close modal by escape button
document.addEventListener('keydown',function(e){
    // console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            CloseModal();
    }
});
