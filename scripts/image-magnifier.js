$(document).ready(() => {
  $(".img-container").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    let src = $(this).children("img").attr("src");
    console.log(src);

    $(".popup-img").css({"display": "block"});
    $(".popup-img img").attr("src", src);
  });

  $(".popup-img span").on("click", function(e) {
    $(".popup-img").css({"display": "none"});
  });

  $(window).on("click", function() { 
    if ($(".popup-img").css("display") != "none") {
      $(".popup-img").css({"display": "none"});
    }
  });

  $(document).on('keyup', function(e) {
    if (e.key == "Escape") {
      $(".popup-img").css({"display": "none"});
    }
  });
});