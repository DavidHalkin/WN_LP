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

    // go  to top
    var btn = $('.go_top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });


    // go to
    // Click event for any anchor tag that's href starts with #
    $('.nav_js li a[href^="#"]').click(function(event) {
        // $(this).parent().addClass("active");
        // $(this).parent().siblings("li").removeClass("active");
        // The id of the section we want to go to.
        var id = $(this).attr("href");

        // An offset to push the content down from the top.
        var offset = 60;

        // Our scroll target : the top position of the
        // section that has the id referenced by our href.
        var target = $(id).offset().top - offset;

        // The magic...smooth scrollin' goodness.
        $('html, body').animate({scrollTop:target}, 500);

        //prevent the page from jumping down to our section.
        event.preventDefault();
    });
});