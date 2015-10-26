/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */





// $('#change-content').click(function() {
//     var selector = $("#selector").val();
//     var apply = $("#newContent").val();
//     console.log(selector);
//     selector.val() = apply;
// }); 

// $('#add-at-end').click(function() {
//     alert('kk');
//     $('#selector').append('<div>' + apply + '</div>');
// });




$('button').click(function() {
    var thisButton = $(this).attr('id');
    var selector = $("#selector").val();
    var apply = $("#newContent").val();
    if (thisButton == "change-content") {
        console.log(selector);
        $(selector).html(apply);
    } else if (thisButton == "add-at-end") {
        $(selector).append("<div>" + apply + "</div>");
    } else if (thisButton == "add-at-start") {
        $(selector).prepend("<div>" + apply + "</div>");
    } else if (thisButton == "insert-before") {
        $("<div>" + apply + "</div>").insertBefore(selector);
    } else if (thisButton == "move-after") {
        $()
    } else if (thisButton == "surround-class") {

    } else if (thisButton == "hide-text") {

    } else if (thisButton == "remove-word") {
        if ($(selector).contains(apply)) {
            $(selector).remove();
        }
    }
});