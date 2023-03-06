const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes();

function checkboxes(){
   const triggerBottom =  window.innerHeight / 5*4;
    boxes.forEach(box  =>  {  //for each box
     const boxTop = box.
     getBoundingClientRect().top; //we know top viewport area
        

     if(boxTop < triggerBottom){
        box.classList.add('show');
     } else{
        box.classList.remove('show');
     }

    });


}