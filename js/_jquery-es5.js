

function ex_document_ready_and_click_el() {
/*
$(document).ready(function()
{
    $("a").click(function(event)
    {
        event.preventDefault();
        fadeOn2($(this).attr('href'));
    });
}); 
*/
}

function ex_resize_and_scroll_event_listeners(){
/*
$(window).resize(function() 
{
    resizeEL();
});
resizeEL();

$(window).scroll(function () 
{
    scrollEL();     
});     
    
function resizeEL()
{
    var w=$(window).width();
}

function scrollEL()
{
    s=$(window).scrollTop();
    sp=(s/h)*100;
    dh=$(document).height();
    dhp=(Math.ceil((s/((dh)-h))*100));    
}
*/    
}

function ex_detect_mouse_movement() {
/*
$(document).bind('mousemove', function(e)
{        
    var width=$(window).width();  
    var height=$(window).height();
    
    pc=Math.floor((e.pageX/width)*100);
    $("#debugger").html(pc);    
})
*/
}

function ex_mouse_over_out() {
/*
$(".services_subheader").mouseover(function()
{
    $("#toolTip").css("display","block");
});    


$(".services_subheader").mouseout(function()
{
    $("#toolTip").css("display","none");
});    
*/
}

function ex_timer() {
/*
var tockValue=0;
var t = setInterval("tock()", 500);
function tock()
{
    tockValue++;
    console.log(tockValue);        
}
//clearInterval(t);
*/
}

function ex_animations(){
/*
//opacity
//
$(".client_scroll").fadeTo(200,1,"linear");

// el function has to be in function otherwise the callback will trigger when animation starts
//
$('html').animate({scrollTop:595}, 500, function() { startTimer(); });

//.stop() useful to prevent clashing animations
//
$(titleArray[intt]).stop().animate({ 'padding-left' : '30px' }, 50);

//slideUp and slideDown are the least deprecated because it cant be replicated by css
//
$(".accordion-content").stop.slideUp(200);
*/
}

function ex_detect_browser() {
/**/
    function get_browser(){      
        const t = this;    
        const user = navigator.userAgent.toLowerCase();        
        var browser = 'other';
        if ( user.includes('edge') ) {
            browser = 'edge';
        }
        else if ( user.includes('firefox') ) {
            browser = 'firefox';
        }
        else if ( user.includes('safari') ) {
            browser = 'safari';
        }        
        else if ( user.includes('chrome') ) {
            browser = 'chrome';
        }
        else if ( user.includes('trident') ) {
            browser = 'ie';
        }
        return browser;  
    }
    var tempVar = get_browser();    
    console.log(tempVar);
/**/
}

function ex_detect_touch() {
/*

var startX=0;
var startY=0;

var moveX=0;
var moveY=0;

var distanceX=0;
var distanceY=0;

var endX=0;
var endY=0;

var startX_b=0;
var startY_b=0;

var moveX_b=0;
var moveY_b=0;

var distanceX_b=0;
var distanceY_b=0;

var endX=0;
var endY=0;



$(document).ready(function()
{
    
    if 
    (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/) || 
        navigator.userAgent.match(/Windows Phone/i) || 
        navigator.userAgent.match(/ZuneWP7/i)
    )
    {
        phone=true;
        initMobile();    
    }
    else
    {
        phone=false;                    
    }

$(window).bind('touchstart', function(event)
    {
        startX=event.originalEvent.touches[0].pageX;
        startY=event.originalEvent.touches[0].pageY;
       
        if (event.originalEvent.touches.length>1)
        {
            startX_b=event.originalEvent.touches[1].pageX;
            startY_b=event.originalEvent.touches[1].pageY;
        }
    });

   
    $(window).bind('touchmove', function(event)
    {
        moveX=event.originalEvent.touches[0].pageX;
        distanceX=moveX-startX;
        moveY=event.originalEvent.touches[0].pageY;
        distanceY=moveY-startY;
       
        if (event.originalEvent.touches.length>1)
        {
            moveX_b=event.originalEvent.touches[1].pageX;
            distanceX_b=moveX_b-startX_b;
            moveY_b=event.originalEvent.touches[1].pageY;
            distanceY_b=moveY_b-startY_b;
           
            debugTrace("touchmove "+event.originalEvent.touches.length+"!=<br />"+startX+"-"+moveX+"="+distanceX+" , "+startY+"-"+moveY+"="+distanceY+"<br />"+startX_b+"-"+moveX_b+"="+distanceX_b+" , "+startY_b+"-"+moveY_b+"="+distanceY_b);
        }
        else
        {
            debugTrace("touchmove "+event.originalEvent.touches.length+"!=<br />"+startX+"-"+moveX+"="+distanceX+" , "+startY+"-"+moveY+"="+distanceY);
        }
       
       
    });
                   
    $(window).bind('touchend', function(event)
    {
        endX=moveX;
        endY=moveY;
    });
});

*/
}

function ex_detect_multitouch() {
/*
var startX=0;
var startY=0;

var moveX=0;
var moveY=0;

var distanceX=0;
var distanceY=0;

var endX=0;
var endY=0;

var startX_b=0;
var startY_b=0;

var moveX_b=0;
var moveY_b=0;

var distanceX_b=0;
var distanceY_b=0;

var endX=0;
var endY=0;



$(document).ready(function()
{
    $(window).bind('touchstart', function(event)
    {
        startX=event.originalEvent.touches[0].pageX;
        startY=event.originalEvent.touches[0].pageY;
       
        if (event.originalEvent.touches.length>1)
        {
            startX_b=event.originalEvent.touches[1].pageX;
            startY_b=event.originalEvent.touches[1].pageY;
        }
    });

   
    $(window).bind('touchmove', function(event)
    {
        moveX=event.originalEvent.touches[0].pageX;
        distanceX=moveX-startX;
        moveY=event.originalEvent.touches[0].pageY;
        distanceY=moveY-startY;
       
        if (event.originalEvent.touches.length>1)
        {
            moveX_b=event.originalEvent.touches[1].pageX;
            distanceX_b=moveX_b-startX_b;
            moveY_b=event.originalEvent.touches[1].pageY;
            distanceY_b=moveY_b-startY_b;
           
            debugTrace("touchmove "+event.originalEvent.touches.length+"!=<br />"+startX+"-"+moveX+"="+distanceX+" , "+startY+"-"+moveY+"="+distanceY+"<br />"+startX_b+"-"+moveX_b+"="+distanceX_b+" , "+startY_b+"-"+moveY_b+"="+distanceY_b);
        }
        else
        {
            debugTrace("touchmove "+event.originalEvent.touches.length+"!=<br />"+startX+"-"+moveX+"="+distanceX+" , "+startY+"-"+moveY+"="+distanceY);
        }
       
       
    });
                   
    $(window).bind('touchend', function(event)
    {
        endX=moveX;
        endY=moveY;
    });
});
*/    
}

function ex_replace_all_using_regex() {
/*
tempVar = tempVar.replace(new RegExp("potato", 'g'),"new potato");
*/    
}

function ex_on_input_change() {
    /*
    $('.some-select').change(function() 
    {
        debugTrace($(this).val());
            
        if ($(this).val()=="about")
        {
            window.location='index.php';    
        }        
    });
    */
}

function ex_check_if_div_is_present() {
/*
if (document.getElementById("popupContainer") !== null) {
      
}
*/    
}

function ex_remove_all_blank_spaces_using_regex() {
/*
var xx="oh look spaces";
alert(xx.replace(/\s/g, ""));    
*/    
}

function ex_keyboard() {
/*
$(document.documentElement).keyup(function (event) 
{
    if (gallery_open==true)
    {
        if (event.keyCode == 37) 
        {
            
        }
        else if (event.keyCode == 39) 
        {
            next_gallery();
        }
        if (event.keyCode == 27) 
        {
            hide_popup();
            gallery_open=false;
        }
    }
});
*/    
}

function ex_click_away_to_hide_something() {
/*
$(document).bind('click', function(e) 
{
    var $clicked = $(e.target);
    if ($clicked.hasClass('trigger2').toString()=='false')
    {
        $("#new_lang_list").stop().slideUp(200);
        new_lang_open=false;
    }
});  
*/    
}

function ex_mousewheel() {
//replace original mousewheel scrolling with custom scrolling speed and tween, useful for paralax on ie
/*
function mouseWheelEL(e) {
    e = e.originalEvent;
    var delta; 
    delta=e.wheelDelta;
    
    if (delta==undefined)
    {
        delta=e.detail;
        debugTrace("firefox "+delta);    
    }
    else
    {
        e.preventDefault();
        debugTrace( delta );
        
        var newDelta=100;
        var speedMod=2;
                    
        if (delta<0)
        {
            newDelta=newDelta*-1;
        }
        //$(window).scrollTop($(window).scrollTop()-(delta/3));
        $("html,body").stop().animate({scrollTop:$(window).scrollTop()-(newDelta*speedMod)}, 150);
    }        
}

$(document).ready(function()
{
    $("body").bind("mousewheel DOMMouseScroll", mouseWheelEL);
});    

*/    
}

function ex_shuffle_array() {
/*
var arr=[2,3,4];
shuffle(arr);

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
*/    
}

function ex_on_load_all_inages(){
/*
$(".js-hidden-team-dump li img").each(function(){                
    $(this).load(function() {
   
        total_people_loaded++;
   
        if (total_people_loaded==total_people)
        {
            init_something();
            }
    });               
});   
*/
}

function ex_timeouts() {
/*
setTimeout(function(){           
        do_something();
}, 500);


setTimeout(explode, 2000);
function explode(){
  alert("Boom!");
}

var timeoutPotato = setTimeout(explode, 2000);
function explode(){
  alert("Boom!");
}

clearTimeout(timeoutPotato);
*/    
}


function ex_cookies() {
/*
$(document).ready(function()
{
    //creates the cookie
    $(".js-close-zoom-info").click(function(e){
       
        $(".js-zoom-info").stop().slideUp(250);
        $("body").removeClass("zoom-info-show");
       
        zoomInfo = true;
        if (zoomInfo != "" && zoomInfo != null) {
            setCookie("closedZoomInfo", zoomInfo, 365);
        }
    });   
   
    checkCookie();
});   

//checks if cookie exists   
function checkCookie() {
    var zoomInfo = getCookie("closedZoomInfo");
    if (zoomInfo == "") {
        $(".js-zoom-info").addClass("show");
        $("body").addClass("zoom-info-show");
    }
}
*/    
}



function ex_custom_objects() {
/* */
var var_book = {
    name: "The Potato Tome",
    current_page: 1,
    changePage: function changePageFunction(page_no){
        this.current_page = page_no;
        console.log("var_book " + this.name + " is in page " + this.current_page);
        //$("#app").append("var_book " + this.name + " is in page " + this.current_page + "<br />");
    },
    nextPage: function nextPageFunction(){
        this.changePage(this.current_page + 1);
    },
    prevPage: function prevPageFunction(){
        this.changePage(this.current_page - 1);
    }
}

function Book() {
  
}

function Book(name) {
    this.name = name;
}

Book.prototype = {
    name: "NO_NAME",
    current_page: 1,
    changePage: function changePageFunction(page_no){
        this.current_page = page_no;
        console.log("book " + this.name + " is in page " + this.current_page);

    },
    nextPage: function nextPageFunction(){
        this.changePage(this.current_page + 1);
    },
    prevPage: function prevPageFunction(){
        this.changePage(this.current_page - 1);
    }
}

var books_array = new Array(new Book("Hlopkek"),new Book("Hlopkek II"),new Book())

$(document).ready(function()
{
    var_book.nextPage();
    var_book.changePage(999);

    books_array[0].changePage(10);
    books_array[1].changePage(20);
    books_array[2].changePage(30);
    
});
/* */
}

function ex_local_storage() {
/*With web storage, web applications can store data locally within the user's browser.

Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data. */
/*The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

The localStorage property is read-only. */

    console.log("previous localStorage tempLSVar is " + localStorage.getItem("tempLSVar"));

    setTimeout(function(){

        //set new localStorage variable
        localStorage.setItem("tempLSVar", "zplonk" + Date.now());

        console.log("new localStorage tempLSVar is " + localStorage.getItem("tempLSVar"));

        //clear local storage variable
        //localStorage.removeItem("tempLSVar");
        
        //clear local storage 
        //localStorage.clear();

    }, 50);

}

function ex_session_storage() {
/*sessionStorage allow to save key/value pairs in a web browser.

The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed). */

    console.log("previous sessionStorage tempSSVar is " + sessionStorage.getItem("tempSSVar"));

    setTimeout(function(){

        //set new sessionStorage variable
        sessionStorage.setItem("tempSSVar", "zplonk" + Date.now());

        console.log("new sessionStorage tempSSVar is " + sessionStorage.getItem("tempSSVar"));

        //clear session storage variable
        //sessionStorage.removeItem("tempSSVar");

        //clear session storage 
        //sessionStorage.clear();

    }, 50);
}