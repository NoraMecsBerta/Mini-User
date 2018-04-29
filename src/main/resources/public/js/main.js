$( document ).ready(getAllUsers());


$('#buttonOfAddUser').on("click", function(e){
    addUser();
});


function addUser() {
    if (checkInputFields()) {
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: "/addUser",
            data: formToJSON(),
            success: function () {
                alert("You successfully added the new user!");
                clearInputFields();
                getAllUsers();
            },
            error: function () {
                alert("Oops! Not managed to add new user!")
            }
        });
    }
}

function formToJSON() {
    var json = {
        "name": $('#userName').val(),
        "email": $('#email').val(),
    }
    return JSON.stringify(json);
}

function clearInputFields() {
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
            console.log(data);
            displayUsersTable(data);
        },
        //maybe on server side
        error: function() {
            alert("Oops, something unexpected happened. Can't display users!");
        }
    })
}

function displayUsersTable(data) {
    $('#tableDiv').html("");
    var table = $("<table>").addClass('usersTable');
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
            getAllUsers();
            alert("You successfully delete the user!");
        },
        error: function () {
            alert("Not managed to delete this user!")
        }
    })
}

function checkInputFields() {
    var emailAddress = $("#email").val();

    if ($('#userName').val() === '' || $('#email').val() === '') {
        alert("Must fill both fields");
        return false;
    }
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(emailAddress) !== true) {
        alert("Not valid email address!");
        clearInputFields();
    }
    return regex.test(emailAddress);
}
