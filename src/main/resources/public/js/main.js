function showRegistrationForm() {
    var registrationContainer = document.getElementById("registrationField");

    var createform = document.createElement('form'); // Create New Element Form
    createform.setAttribute("action", ""); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); // Setting Method Attribute on Form

    registrationContainer.appendChild(createform);
    var heading = document.createElement('h2'); // Heading of Form
    heading.innerHTML = "Add new user here ";
    createform.appendChild(heading);
    var line = document.createElement('hr'); // Giving Horizontal Row After Heading
    createform.appendChild(line);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var namelabel = document.createElement('label'); // Create Label for Name Field
    namelabel.innerHTML = "Your Name : "; // Set Field Labels
    createform.appendChild(namelabel);
    var inputelement = document.createElement('input'); // Create Input Field for Name
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dname");
    createform.appendChild(inputelement);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var usernamelabel = document.createElement('label'); // Create Label for Address Field
    usernamelabel.innerHTML = "User Name : "; // Set Field Labels
    createform.appendChild(usernamelabel);
    var inputelement = document.createElement('input'); // Create Input Field for Name
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "usrname");
    createform.appendChild(inputelement);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var pswdlabel = document.createElement('label'); // Create Label for Password Field
    pswdlabel.innerHTML = "Password : "; // Set Field Labels
    createform.appendChild(pswdlabel);
    var inputelement = document.createElement('input'); // Create Input Field for Password
    inputelement.setAttribute("type", "password");
    inputelement.setAttribute("name", "psswd");
    createform.appendChild(inputelement);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var doblabel = document.createElement('label'); // Create Label for date of birth
    doblabel.innerHTML = "Your Date of Birth : "; // Set Field Labels
    createform.appendChild(doblabel);
    var inputelement = document.createElement('input'); // Create Input Field for date of birth
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dob");
    createform.appendChild(inputelement);
}