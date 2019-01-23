function showMenu(){
       $("#openMenu").css("opacity", "0");
        $("#lgMenu").addClass("enter");
        $("#horizontalMenu").hide();
    }
function hideMenu() {
           $("#lgMenu").removeClass("enter");
            $("#openMenu").css("opacity", "1");
            $("#horizontalMenu").show();
        }


function setHBarFixed() {
    
    if ($(window).scrollTop() > $("#horizontalBar").scrollTop()) {

        $("#horizontalBar").css('position','fixed');
        $("#horizontalBar").css('top','0px');
    } else {
        $("#horizontalBar").css('position','relative');
        $("#horizontalBar").css('top','0px');
    }
}


window.onscroll = function() {setHBarFixed()};