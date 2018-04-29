$( document ).ready(getAllUsers());

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
                getAllUsers();
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

function getAllUsers() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: "/getAllUsers",
        dataType: "json",
        success: function (data) {
            alert("success");
            console.log(data);
            makeTable(data);
        }
    })
}


function makeTable(data) {
    var table = $("<table>").addClass('usersTable');
    $('#tableDiv').html("");
    $('#tableDiv').append(table);
    var thead = $('<thead/>').appendTo(table);
    thead.append('<td>ID</td>');
    thead.append('<td>USERNAME</td>');
    thead.append('<td>EMAIL</td>');
    thead.append('<td>DELETE ITEM</td>');

    var tbody = $('<tbody/>').appendTo(table);
    for (let user of data) {
        console.log(user);
        var tr = $('<tr/>').appendTo(tbody);
        tr.append('<td>' + user.id + '</td>');
        tr.append('<td>' + user.name + '</td>');
        tr.append('<td>' + user.email + '</td>');
        tr.append(`<td><i class="fa fa-trash" data-userid=${user.id}></i></td>`);
    }
    //maybe put to a seperate event listener function
    $('.fa-trash').on("click", function(e){
        var userId = $(this).data("userid");
        console.log("userid: " + userId);
        deleteUser(userId);
    });
}

function deleteUser(userId) {
    $.ajax({
        type: 'DELETE',
        url: "delete/" + userId,
        success: function () {
            alert("success");
            getAllUsers();
        }
    })
}
