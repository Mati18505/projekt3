function load(path) {
    $("#product").load(path);
    toggleMenu();
}

function toggleMenu() {
    if($(".navigation").hasClass("active")) {
        $(".navigation").removeClass("active");
    } else {
        $(".navigation").addClass("active");
    }
}

$(document).ready(() => {
    $(".navigation").on("click", function(e) {
        e.stopPropagation();
    });
    $("#menu-icon").on("click", function(e) {
        e.stopPropagation();
    });

    $(window).on("click", function() { 
        if ($(".navigation").hasClass("active")) {
            $(".navigation").removeClass("active");
        }
    });
});