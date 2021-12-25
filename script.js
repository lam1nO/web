$(document).ready(function() {
    $("#choose-form").change(function() {

        //Hide -other- visible forms
        $("#sign_in, #register").hide();
        $("#" + $(this).val()).show();
    });
});