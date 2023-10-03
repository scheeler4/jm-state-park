$(document).ready(function() { 
    
    $(window).scroll(function() { 
      /*this covers all the "sticky" effects generated when user scrolls down the screen*/
        if ($(window).width() <= 1020) return;
        var scrollDown = $(window).scrollTop();

        if (scrollDown >= 250) {
            $("header").addClass("stickyHeader");
            $(".topAnch").addClass("topAnchSticky");
            $(".fprLogo").addClass("fprLogoSticky");
            $(".vspText").addClass("vspTextSticky");
            $(".dropdown").addClass("dropdownSticky");
            $(".browseParksWrap").addClass("browseParksWrapSticky");
            $("main").addClass("mainSticky");
        }
    });

    $(".browseParksWrap").on("click", function() {
        $(".browseParksDropdown").toggleClass("browseParksDropdownShow");
        $(".browseParksWrap .browseParksArrow").toggleClass("arrowRotate180");
    });

    $(".hamburger").on("click", function() {
        $("header .header-main .header-nav").toggleClass("mobileNavSlideIn");
        $("header .browseParksWrap").toggleClass("browseParksMobileSlideIn");
        $(".bar.one").toggleClass("barOneEffect");
        $(".bar.two").toggleClass("barTwoEffect");
        $(".bar.three").toggleClass("barThreeEffect");
        $(this).toggleClass("hamburgerDark");
    });
    
    $(".visitLi").on("click", function() {
        $(".visitDropdown").toggleClass("dropdownShow");
        $(".thingsToDoDropdown").removeClass("dropdownShow");
        $(".aboutUsDropdown").removeClass("dropdownShow");
        $(".visitDropdown").toggleClass("mobileLevelTwoSlide");
    });
    $(".thingsToDoLi").on("click", function() {
        $(".thingsToDoDropdown").toggleClass("dropdownShow");
        $(".visitDropdown").removeClass("dropdownShow");
        $(".aboutUsDropdown").removeClass("dropdownShow");
        $(".thingsToDoDropdown").toggleClass("mobileLevelTwoSlide");
    });
    $(".aboutUsLi").on("click", function() {
        $(".aboutUsDropdown").toggleClass("dropdownShow");
        $(".visitDropdown").removeClass("dropdownShow");
        $(".thingsToDoDropdown").removeClass("dropdownShow");
        $(".aboutUsDropdown").toggleClass("mobileLevelTwoSlide");
    });

    $(".mobileSearchMag").on("click", function() {
        $(".customHeader").toggleClass("mobileSearchShow");
        $("main").toggleClass("mobileSearchShowMain");
    });

    $("#main, .textPage, #textWrap, .customFooter").on("click", function() {
        $(".dropdown").removeClass("dropdownShow");
    });

    

    /*this shows the "related" (now called "menu") sections of text pages (mobile)*/
    $("#related").click(function() {
        $(".relatedUl").toggleClass("relatedUlExpand");
        $(".relatedArrow").toggleClass("arrowRotateDown");
        $(".textMain").toggleClass("textMainPushDown");
    });

    


    /*this handles the functionality for the "back to top" buttons that show up in mobile views on all text pages*/
    // hide .backToTop first
    $(".backToTop").hide();
    
    // fade in
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $(".backToTop").fadeIn();
            } else {
                $(".backToTop").fadeOut();
            }
        });

        // scroll body to 0px on click
        $(".backToTop").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });


    /*****************park page tabs*****************************/
    $("#parkInfoTab").click(function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $("#gettingHereDesc").removeClass("activeDesc");
        $("#mapsDesc").removeClass("activeDesc");
        $("#activitiesDesc").removeClass("activeDesc");
        $("#parkInfoDesc").addClass("activeDesc");

        $("#parkInfoArrow").addClass("arrowRotateDown");
        $("#gettingHereArrow").removeClass("arrowRotateDown");
        $("#mapsArrow").removeClass("arrowRotateDown");
        $("#activitiesArrow").removeClass("arrowRotateDown");
        return false;
    });
    $("#gettingHereTab").click(function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $("#parkInfoDesc").removeClass("activeDesc");
        $("#mapsDesc").removeClass("activeDesc");
        $("#activitiesDesc").removeClass("activeDesc");
        $("#gettingHereDesc").addClass("activeDesc");

        $("#parkInfoArrow").removeClass("arrowRotateDown");
        $("#gettingHereArrow").addClass("arrowRotateDown");
        $("#mapsArrow").removeClass("arrowRotateDown");
        $("#activitiesArrow").removeClass("arrowRotateDown");
        return false;
    });

    $("#mapsTab").click(function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $("#parkInfoDesc").removeClass("activeDesc");
        $("#gettingHereDesc").removeClass("activeDesc");
        $("#activitiesDesc").removeClass("activeDesc");
        $("#mapsDesc").addClass("activeDesc");

        $("#parkInfoArrow").removeClass("arrowRotateDown");
        $("#gettingHereArrow").removeClass("arrowRotateDown");
        $("#mapsArrow").addClass("arrowRotateDown");
        $("#activitiesArrow").removeClass("arrowRotateDown");
        return false;
    });

    $("#activitiesTab").click(function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $("#parkInfoDesc").removeClass("activeDesc");
        $("#gettingHereDesc").removeClass("activeDesc");
        $("#mapsDesc").removeClass("activeDesc");
        $("#activitiesDesc").addClass("activeDesc");

        $("#parkInfoArrow").removeClass("arrowRotateDown");
        $("#gettingHereArrow").removeClass("arrowRotateDown");
        $("#mapsArrow").removeClass("arrowRotateDown");
        $("#activitiesArrow").addClass("arrowRotateDown");
        return false;
    });

    /*this shows covers the functionality of "show/hide" switches on most text pages*/
    $(".showHideSwitch").click(function() {
        var $this = $(this);
        $(this).toggleClass("expanded")

        if ($this.hasClass("expanded")) {
            $this.html("- Hide");
        } else {
            $this.html("+ Show");
        }
    });

    /********this adds tooltip functionality ********/

    $(".tooltipFunc").tooltip({ content: '<img src="http://icdn.pro/images/fr/a/v/avatar-barbe-brun-homme-utilisateur-icone-9665-128.png" />' });
    

    /*fancy box*/
     $('.fancybox').fancybox({
        helpers : {
            title : {
                type : 'inside'
            }
        }
    });
 
});