
$('button').on("click", function(e){
    addUser();
});


function addUser() {

    if ($('#userName').val() !== '' || $('#email').val() !== '') {
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: "/addUser",
            //dataType: "json",
            data: formToJSON(),
            /*complete: function() { that worked anyway*/
            success: function () {
                alert("success");
                clearInputField();
            },
            error: function () {
                alert("not managed")
            }
        });
    } else {
        alert("must fill both field!")
    }
}


function formToJSON() {
    var json = {
        "name": $('#userName').val(),
        "email": $('#email').val(),
    }
    return JSON.stringify(json);
}


function clearInputField() {
    $('#email').val('');
    $('#userName').val('');
}
