// Script for loading elements like header/footer and contact form on each page

$(function() {
    $("#header").load("../elements/header.html");
    $("#contact_form").load("../elements/contact_element.html");
    $("#footer").load("../elements/footer.html");
});
