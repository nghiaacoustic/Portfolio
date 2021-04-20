$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }
        else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    //slide up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })
    //typed animation
    var typed=new Typed(".typing",{
        strings: ["Truong Phuoc Nghia","a Front-end Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    var typed = new Typed(".typing-2", {
        strings: ["Future Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    // toggle menu
})