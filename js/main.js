
jQuery(document).ready(function(){
 "use strict"
    $('.slider').ripples({
      dropRadius: 7,
      perturbance: 0.01,
       
    });
  
     $(".text").typed({
        strings:["<strong>i love</strong><strong class='primary'> coding.</strong>","<strong>and to</strong><strong class='primary'> share !!.</strong>"],
         typespeed:0,
         loop:true
        
     });
  
});