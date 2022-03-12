//get method
function loginAdmin() {
    var emails = document.getElementById("aEmail").value;
    var pass = document.getElementById("password").value;
    var admin;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            admin = JSON.parse(this.responseText);
            if (admin !== "") {
                if (emails == admin[0].email && pass == admin[0].password) {
                    alert("Yeah");
                    window.location.href = "http://www.w3schools.com";
                } else {
                    alert("No");
                }
                //     var adminEmail = admin[0].email;
                //     var adminPass = admin[0].password
                //     alert("Forwarding Admin?");
                //     if (emails == adminEmail && pass == adminPass) {
                //         window.location.href = "/HTML/admin.html";
                //     }
                //     else {
                //         alert("Admin Login Failed!");
                //     }
            }
            else {
                alert("alsdf");
            }
        }
    };
    xhttp.open("GET", "http://localhost:3000/admins/", true);
    xhttp.send();
}