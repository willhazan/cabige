$(".title").click(function() {
    $(".title").css("border", "5px dotted black");

});

$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".beginning").hide();

});

$(".no-button").click(function() {
    $(".Part-Two-No").fadeIn();
    $(".beginning").hide();

});



$(".sword-img").click(function() {
    $(".Story-3-Yes").show();
    $(".beginning").hide();
    $(".Part-Two-Yes").hide();
});

$(".garden-img").hover(function() {
    $(".Story-4-Yes").show();
    $(".beginning").hide();
    $(".Part-Two-Yes").hide();
    $(".Story-3-Yes").hide();
});
$(".correct-button").click(function() {
    $(".story4").show();
    $(".beginning").hide();
    $(".Part-Two-Yes").hide();
    $(".Story-3-Yes").hide();
    $(".Story-4-Yes").hide();
    $(".story4").css("display", "flex");
    $(".story4").css("justify-content", "center");
});

$(".woof-button").click(function() {
    $(".Part-Two-No").fadeIn();
    $(".beginning").hide();
    $(".Part-Two-Yes").hide();
    $(".Story-3-Yes").hide();
    $(".Story-4-Yes").hide();
});

$(".cabbage-img").dblclick(function() {
    $(".the-end").show();
    $(".beginning").hide();
    $(".Part-Two-Yes").hide();
    $(".Story-3-Yes").hide();
    $(".Story-4-Yes").hide();
    $(".Part-Two-No").hide();
    $(".story4").hide();

});