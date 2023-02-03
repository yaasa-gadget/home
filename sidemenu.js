$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#sidemenu").toggleClass('panelactive');
});

$("#sidemenu a").click(function () {
    $(".openbtn").removeClass('active');
    $("#sidemenu").removeClass('panelactive');
});