(function ($) {
    "use strict"
    $("#addButton").on("click", function (e) {
        var textToAdd = $("#textToAdd");
        var value = textToAdd.val().trim();
        if (value) {
            $("#elements").append("<li>" + value + "</li>");
            textToAdd.val("");
        }
    });

})(jQuery);