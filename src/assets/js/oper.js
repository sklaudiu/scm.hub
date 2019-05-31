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


    document.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (!event.target.closest("#menuBar") ) return;
        else hideMenu();

        
        
        

        // If user clicks outside the element, hide it!
       // 
    });

    

  function showHeight() {
    document.getElementById("timeLeft").style.height = window.innerHeight + "px";
    document.getElementById("invitePresentation").style.height = window.innerHeight + "px";
    document.getElementById("locationDescription").style.height =(window.innerHeight*2+50) + "px";
    document.getElementById("subscribeToEvent").style.height =(window.innerHeight) + "px";
    document.getElementById("footerEvent").style.height =(window.innerHeight/5) + "px";
    document.getElementById("footerEvent").style.width =(window.innerWidth-40) + "px";

    }


    function hideMenu() {
                document.getElementById("menuBar").style.right="-600px";
                document.getElementById("menuSign").style.display ="block";
    }


    function showMenu() {
        document.getElementById("menuSign").style.display ="none";
        document.getElementById("menuBar").style.display="block";
        document.getElementById("menuBar").style.right="0";
}


function setPersons(nrPers){
    document.getElementById("noOfSelPers").value=nrPers;

    for(i = 0; i < document.getElementsByClassName("dropdown-content").length; i++){
        document.getElementsByClassName("dropdown-content")[i].style.display = "none";
    }
    
}

function showPersons(){
    for(i = 0; i < document.getElementsByClassName("dropdown-content").length; i++){
        document.getElementsByClassName("dropdown-content")[i].style.display = "block";
        
    }
}




