function reveal() {
    document.querySelector(".video1").style.display = "block"
    document.querySelector(".video2").style.display = "block"
    document.querySelector(".video3").style.display = "block"
    document.querySelector(".video4").style.display = "block"
    
    $(".video1")[0].src += "?autoplay=1";
    $(".video2")[0].src += "?autoplay=1";
    $(".video3")[0].src += "?autoplay=1";
    $(".video4")[0].src += "?autoplay=1";
}