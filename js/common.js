$(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function WEDDINGPOPUP() {
        $(".wedding_btn > a").click(function() {
            let popupmodal = $(this).attr("data-pop");
            $('#'+popupmodal).addClass("active");
            $(".popup_bg").fadeIn(300);
        });

        $(".close_btn").click(function(){
            $(".popup_con").removeClass("active");
            $(".popup_bg").fadeOut(300);
        });
    }
    WEDDINGPOPUP();
});
