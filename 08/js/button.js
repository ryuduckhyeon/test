$(function(){
    let sw = true
    $(".btn_pause").click(function(){
        if(sw==true){
            $(".btn_pause").addClass("on");
            $(".list").slick("slickPause");
            sw = false;
        }else{
            $(".btn_pause").removeClass("on");
            $(".list").slick("slickPlay");
            sw = true
        }
    })
})