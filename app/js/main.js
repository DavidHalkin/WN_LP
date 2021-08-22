$(document).ready(function(){
	$(".menu_mob_js").click(function(){
        $(this).toggleClass("opened");
        $(".nav_holder_js").toggleClass("opened");
        $("body").toggleClass("opened");
    });
    $('html').click(function(){
      $('.nav_holder_js,.menu_mob_js,body').removeClass("opened");
    });

    $('.menu_mob_js').click(function(e){
      e.stopPropagation();
    });

    $(".read_more_js span").click(function(){
        $(this).parent().toggleClass("opened");
        $(this).parent().next(".hide_section_js").slideToggle("fast");
    });
});