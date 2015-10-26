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
    if (thisButton == "change-content") {
        var selector = $("#selector").val();
        var apply = $("#newContent").val();
        $(selector).val() = apply;
    } else if (thisButton == "add-at-end") {
        var selector = $("#selector").val();
        var apply = $("#newContent").val();
        
    }
});