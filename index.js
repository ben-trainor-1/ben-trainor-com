
$(document).ready(() => {

    $("#header a").on("click", function() { return false; });
    $("#header a").on("click", function(event) { 
        let href = event.target.href;
        $("#content").load(href.substring(href.lastIndexOf("\/") + 1));
        killCurrentSounds();
    });

    $("#content").load("about.html");
    $("#footer").load("social.html");

});