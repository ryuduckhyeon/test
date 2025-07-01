$(document).ready(function(){
    $("ul.menu>li").click(function(){
        let num = $(this).index();

        // 메뉴 li 상태 조정
        $("ul.menu>li").removeClass("on");
        $(this).addClass("on");

        // 콘텐츠 ul 상태 조정
        $("main>ul").removeClass("on");
        $("main>ul").eq(num).addClass("on");
    });
});