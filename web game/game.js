"use strict"

let btun = document.querySelector('.btun'),
    remdopposition;


  btun.addEventListener('click',function(){
    btun.style.visibility = "hidden";
    disPlaymalo();
  }) 

    function  disPlaymalo(){
        remdopposition = Math.floor(Math.random()* 9) +1;
        setTimeout(function(){
            document.getElementById(remdopposition).setAttribute('src',"download.jpg");
        },1000)
        helodisplay(position);
    }

    setTimeout(function(){
        document.getElementById(position).setAttribute('src',"pngtree-circle-clipart-black-circle-png-image_2381996.jpg");
        return disPlaymalo;
    },3000)