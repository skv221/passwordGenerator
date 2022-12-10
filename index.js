function makePassword() {
    let length = document.getElementById("num-input").value;
    let password = document.getElementById("password");
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+';
    let charactersLength = characters.length;
    if(length < 10 && length > 20) {
        alert("Please enter values greater than 5 and less than 20 ")
    }
    else {
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        password.innerText = result;
        password.classList.add("typing");
        console.log(password.innerText)
    }
}

function textRemover() {
    let password = document.getElementById("password");
    password.classList.remove("typing");    
}

function copy() {
    var r = document.createRange();
    r.selectNode(document.getElementById("password"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}