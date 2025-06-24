$(function
    ()
    {
        // //2단메뉴 숨기기
        // $(".dept2").hide();
        $("ul.gnb").mouseenter(function(){
            $("#header_wrap").stop().animate({'height' : '322px'}, 200);
            //2단메뉴 보이게
            $(".dept2").show();
            $("#header_wrap").css({"border-bottom":none});
        })
        $("#header_wrap").mouseleave(function(){
            $("#header_wrap").stop().animate({'height' : '70px'}, 200)
            //2단메뉴 숨기기
            $(".dept2").hide();
            $("#header_wrap").css({"border-bottom":"1px solid #c4c4c4"});
        })
    })