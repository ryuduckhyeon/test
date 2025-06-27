$(function() {
    $("main >ul.other-contents>li>div.notice_box>ul.notice>li>a.notice").click(function() {
        window.open(
            "./popup.html",
            "popup",
            "width=600, height=450, left=50%, top=50%"
        );
    });
});
