$("body").hide().fadeIn(3000);

// hide all images, hide all the links
$("img").hide();

$("h1").click(hidesections);

function hidesections() {
    $(this).text("Hiding...");
    $("body").children("p").slideToggle();
}

$("a").each(change);

function change() {
    const links = $(this).attr("href");
    $(this).attr("href", "https://www.google.com");
}
