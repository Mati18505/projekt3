$(document).ready(() => {
  $(".img-container").on("click", function(e) {
    e.preventDefault();

    let src = $(this).children("img").attr("src");
    console.log(src);

    $(".popup-img").css({"display": "block"});
    $(".popup-img img").attr("src", src);
  });

  $(".popup-img span").on("click", function(e) {
    $(".popup-img").css({"display": "none"});
  })
});