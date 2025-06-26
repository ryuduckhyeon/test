$(function(){
    $(".notice ul li:first-child a").click(function(){
        $(".cover").show();
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    })
})