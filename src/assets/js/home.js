function showMenu(){
       $("#openMenu").css("opacity", "0");
       $(".modal").css("display", "block");
        $("#lgMenu").addClass("enter");
        /*$("#horizontalMenu").hide();*/
    }
function hideMenu() {
           $("#lgMenu").removeClass("enter");
            $("#openMenu").css("opacity", "1");
            $(".modal").css("display", "none");
            /*$("#horizontalMenu").show();*/
        }


function setHBarFixed() {
    
    if ($(window).scrollTop() > $("#horizontalBar").scrollTop() 
        && window.screen.availWidth <= 600) {

        $("#horizontalBar").css('position','fixed');
        $("#horizontalBar").css('top','5px');
        $("#horizontalBar").css('width','100%');
    } else {
        $("#horizontalBar").css('position','relative');
    }
}


window.onscroll = function() {setHBarFixed()};