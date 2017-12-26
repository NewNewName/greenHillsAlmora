$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >1){
            $(".fixed_nav").css({"background-color":"blue"});   
        }
    })
})

