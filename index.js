
$(document).ready(() => {

    $("#header a").on("click", function() { return false; });
    $("#header a").on("click", function(event) { 
        killCurrentSounds();
        let href = event.target.href;
        $("#content").load(href.substring(href.lastIndexOf("\/") + 1));
        $("html").scrollTop(0);
    });

    $("#content").load("about.html");
    $("#footer").load("social.html");

});