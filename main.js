// Show Privacy Modal //
let modal = document.getElementById("privacy_modal");

let modalBtn = document.getElementById("myBtn");

let closeBtn = document.getElementsByClassName("button_left")[0];

modalBtn.onclick = function() {
    modal.style.display = "flex";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Display an error message //
function validate() {
    document.getElementById('error').style.display = "block";
}
function success() {
    document.getElementById('error').style.display = "none";
}
