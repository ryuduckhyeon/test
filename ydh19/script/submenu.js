$(function(){
    $("header ul.gnb").mouseenter(function(){
        $(".sub_menu_box, header>ul.gnb>li>ul.sub_menu").show();
    })
    $("header ul.gnb").mouseleave(function(){
        $(".sub_menu_box, header>ul.gnb>li>ul.sub_menu").hide();
    })
})