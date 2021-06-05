$(document).ready(function () {

    // $(".menus li a").click(function (e) {

        // let target = $(this).attr("href");
        // $("html,body").animate(
        // {
        //     scrollTop: $(target).offset().top,
        // }
        // );
    //     e.preventDefault();
    // });

        $(".menus li a").click(function() {
            
        // let target = $(this).attr("href");
            $("html, body").animate({ scrollTop: $("#services_section").offset().top }, 1500);
        });

        
   

});