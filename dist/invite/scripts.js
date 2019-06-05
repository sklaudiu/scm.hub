window.setInterval((function () {
    var start = Date;
    var currDate = new Date();

    var end = new Date(2019, 07, 24, 12, 00, 00, 00);

    if (end >= currDate) {
        document.getElementById('days').innerText = Math.floor((end - currDate) / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = 23 - currDate.getHours();
        document.getElementById('minutes').innerText = 59 - currDate.getMinutes();
        document.getElementById('seconds').innerText = 59 - currDate.getSeconds();
    }

}
), 1000);


document.addEventListener("click", function (event) {
    // If user clicks inside the element, do nothing
    if (!event.target.closest("#menuBar")) return;
    else hideMenu();





    // If user clicks outside the element, hide it!
    // 
});


function acnowledgeViewedMsg() {
    if (document.cookie.includes("refid")) {
        var isSent = false;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
        xhttp.open("GET", "/confirm_view.php", false);
        xhttp.send();
        if (xhttp.responseText.length > 2) alert(xhttp.responseText);
    }
}

function setSize() {
    document.getElementById("timeLeft").style.height = (window.innerHeight + 20) + "px";
    document.body.style.margin = "0";
    document.body.style.width = "100%";
    //document.getElementById("invitePresentation").style.height =(window.innerHeight+40) + "px";
    //document.getElementById("locationDescription").style.height =(window.innerHeight*2+50) + "px";
    //document.getElementById("subscribeToEvent").style.height =(window.innerHeight) + "px";
    //document.getElementById("footerEvent").style.height =(window.innerHeight/5) + "px";
    //document.getElementById("footerEvent").style.width =(window.innerWidth-40) + "px";

}

function setCookies() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    if (url.searchParams.get("nume") !== null && url.searchParams.get("nume").length != 0) document.cookie = "nume=" + url.searchParams.get("nume") + ";";
    if (url.searchParams.get("email") !== null && url.searchParams.get("email").length != 0) document.cookie = "email=" + url.searchParams.get("email") + ";";
    if (url.searchParams.get("refid") !== null && url.searchParams.get("refid").length != 0) document.cookie = "refid=" + url.searchParams.get("refid") + ";";
}

function sendConfirmEmail() {

    if (!document.cookie.includes("refid")) {
        alert("Lipseste id-ul de sesiune din URL");
        return;
    }

    if (document.getElementById("noOfSelPers").value.length == 0 ||
        document.getElementById("noOfSelPers").value == 0) {
        alert("Va rugam sa completati numarul de persoane.");
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText.length >1)
                alert(this.responseText+this.responseText.length);
            else alert("Va multumim!");
        }
    };
    var paramsConf = "confirm=1";
    if (document.getElementById("mentions").value.length != 0)
        paramsConf += "&msg=" + document.getElementById("mentions").value;

    xhttp.open("POST", "/sendConfMail.php", true);

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(paramsConf);
}

function sendRejectEmail() {
    if (!document.cookie.includes("refid")) {
        alert("Lipseste id-ul de sesiune din URL");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText.length >1)
                alert(this.responseText);
            else alert("Ne pare rau ca nu reusiti sa ajungeti.");
        }
    };
    var paramsConf = "confirm=0";
    if (document.getElementById("mentions").value.length != 0)
        paramsConf += "&msg=" + document.getElementById("mentions").value;

    xhttp.open("POST", "/sendConfMail.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(paramsConf);
}




function showSubscribeConfirmation() {
    alert("Va multumim!");
}


function hideMenu() {
    document.getElementById("menuBar").style.right = "-600px";
    document.getElementById("menuSign").style.display = "block";
}


function showMenu() {
    document.getElementById("menuSign").style.display = "none";
    document.getElementById("menuBar").style.display = "block";
    document.getElementById("menuBar").style.right = "0";
}


function setPersons(nrPers) {
    document.getElementById("noOfSelPers").value = nrPers;
    document.cookie = "nrPers=" + nrPers;

    for (i = 0; i < document.getElementsByClassName("dropdown-content").length; i++) {
        document.getElementsByClassName("dropdown-content")[i].style.display = "none";
    }

}

function showPersons() {
    for (i = 0; i < document.getElementsByClassName("dropdown-content").length; i++) {
        document.getElementsByClassName("dropdown-content")[i].style.display = "block";

    }
}

function rotateBars() {
    // document.getElementById("showmenu").style.transform = "rotate(90deg);";
    document.getElementById("bar1").style.WebkitTransform = "rotate(90deg)";
    // Code for IE9
    document.getElementById("bar1").style.msTransform = "rotate(90deg)";
    // Standard syntax
    document.getElementById("bar1").style.transform = "rotate(90deg)";
    // document.getElementById("bar2").style.transform = "rotate(90deg);";
    //document.getElementById("bar3").style.transform = "rotate(90deg);";
}

function unrotateBars() {

    document.getElementById("bar1").style.transform = "rotate(360deg)";
    document.getElementById("bar2").style.transform = "rotate(360deg)";
    document.getElementById("bar3").style.transform = "rotate(360deg)";
    // document.getElementById("bar2").style.transform = "rotate(90deg);";
    //document.getElementById("bar3").style.transform = "rotate(90deg);";
}




;
//# sourceMappingURL=scripts.js.map