$(function
    ()
    {
        // //2단메뉴 숨기기
        // $(".dept2").hide();
        $("ul.gnb").mouseenter(function(){
            $("#header_wrap").stop().animate({'height' : '380px'});
            //2단메뉴 보이게
            $(".dept2").show();
        })
        $("#header_wrap").mouseleave(function(){
            $("#header_wrap").stop().animate({'height' : '110px'})
            //2단메뉴 숨기기
            $(".dept2").hide();
        })
    })