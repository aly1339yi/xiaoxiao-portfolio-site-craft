$( document ).ready(function() {

/* =========================================================================
	Fitvids
========================================================================= */


if($('.fitvids').length){
	$('.fitvids').fitVids();
}


/* =========================================================================
    Mobile Chrome vh units fix
========================================================================= */
/*

var options = [
  {
    selector: '.hp-pillar', // Mandatory, CSS selector
    vh: 100,  // Mandatory, height in vh units
  }
];

var vhFix = new VHChromeFix(options);
*/

/* =========================================================================
    Mobile Safari
========================================================================= */


Modernizr.addTest('mobile-safari', function() {
  return /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent);
});


/* =========================================================================
    Remove Class
========================================================================= */



function removeClassWithPrefix(element,classPrefix){

    var regex = new RegExp("(^|\\s)"+classPrefix+"\\S+", "g");

    element.removeClass(function (index, css) {
        return (css.match (regex) || []).join(' ');
    });

}



/* =========================================================================
    Get Url Parameter
========================================================================= */

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results || 0;
}



/* =========================================================================
    Wait For Image
========================================================================= */



$('.js-wait-for-image').waitForImages(true).done(function() {
    $('.hidden-before-images-ready').animate({
        opacity: '1'
    }, 200);
});


/* =========================================================================
    Browser Scrolled Detect
========================================================================= */

function scrolledCheck() {

    if ($(window).scrollTop() > 0) {
        $('body').addClass('browser-scrolled');
    } else {
        $('body').removeClass('browser-scrolled');
    }

    if ($(window).scrollTop() > 0) {
        $('body').addClass('navbar-condensed');
    } else {
        $('body').removeClass('navbar-condensed');
    }


}

scrolledCheck();

$(window).on('scroll', function() {
    scrolledCheck();
});


/* =========================================================================
    Browser Scroller
========================================================================= */


$(document).on('click', '.js-browser-back-to-top', function() {

    $("html, body").animate({
        scrollTop: 0
    }, 600, 'easeOutExpo');

});


/* =========================================================================
    Sroll Down Window Height
========================================================================= */

$(document).on('click', '.js-scroll-down-window-height', function() {

    $('html, body').animate({
        scrollTop: $(window).height() - $('.desktop-navbar').height()
    }, 600, 'easeOutExpo');

});


/* =========================================================================
    Scroll To Element
========================================================================= */


$(document).on('click', '.js-body-scroll-to-element', function(event) {

    var elementSelector = $(this).data('element-selector');
    var scrollOffset = $('.desktop-navbar-nav').height() + $('.page-breadcrumb').height();

    $('html, body').animate({
        scrollTop: $(elementSelector).offset().top - scrollOffset
    }, 600, 'easeOutExpo');

});





/* =========================================================================
    Dropdown
========================================================================= */


$('.js-dropdown-hover').hover(
    function() {

        if ($('html.mod-no-mobile').length) {
            $(this).addClass('open');
        }

    },
     function() {
        if ($('html.mod-no-mobile').length) {
            $(this).removeClass('open');
        }
        

    });



$(document).on('click', '.js-dropdown-toggle', function() {

    var $dropdown = $(this).parent();

    $dropdown.toggleClass('open')
            .siblings().removeClass('open');

});


$(document).on('click', '.js-dropdown-toggle-update', function() {

    var $this = $(this);

    var $dropdown = $this.parents('.dropdown');

    $dropdown.removeClass('open')
        .find('.dropdown-toggle').html($this.html());

});



/* =========================================================================
    Body Class
========================================================================= */


$(document).on('click', '.js-body-add-class', function() {
    $('body').addClass($(this).data('body-class'));
});

$(document).on('click', '.js-body-remove-class', function() {
    $('body').removeClass($(this).data('body-class'));
});

$(document).on('click', '.js-body-toggle-class', function() {
    $('body').toggleClass($(this).data('body-class'));
});



/* =========================================================================
    Element Class
========================================================================= */


$(document).on('click', '.js-class', function() {

    var $this = $(this);

    var arrayData = $this.data('js-class');


    $.each(arrayData, function( index, item ) {

        var ancestorSelector = item.ancestor_selector;

        var targetSelector = item.target_selector;

        var className = item.class_name;

        var classAction = item.class_action;

        var $target = ancestorSelector ? $this.parents(ancestorSelector).find(targetSelector) : $(targetSelector);

        switch (classAction) {
            case 'add':
                $target.addClass(className);
                break;
            case 'remove':
                $target.removeClass(className);
                break;
            case 'toggle':
                $target.toggleClass(className);
        }

    });

});



/* =========================================================================
    Element Fadein Fadeout
========================================================================= */


$(document).on('click', '.js-element-fadein', function() {
    $($(this).data('element-selector')).fadeIn(400);
});

$(document).on('click', '.js-element-fadeout', function() {
    $($(this).data('element-selector')).fadeOut(400);
});

$(document).on('click', '.js-element-toggle', function() {
    $($(this).data('element-selector')).fadeToggle(400);
});

$(document).on('click', '.js-element-fadeinout', function() {

    var $this = $(this);

    $($this.data('in-element-selector')).show();

    $($this.data('out-element-selector')).hide();


});

$(document).on('click', '.js-element-slideupdown', function() {

    var $this = $(this);
    var index = $this.index();

    var $switchTargets = $($this.data('element-selector'));
    var $activeTarget = $switchTargets.filter(':visible');

    $this.addClass('active').siblings().removeClass('active');

    if($activeTarget.length){
        $activeTarget.slideUp(300, function() {
            $switchTargets.eq(index).slideDown(300);
        });
    }
    else{
        $switchTargets.eq(index).slideDown(300);
    }

});



/* =========================================================================
    Stop Propagation
========================================================================= */


$(document).on('click', '.js-stop-propagation', function(event) {
	event.stopPropagation();
});


/* =========================================================================
    Tab
========================================================================= */


$(document).on('click', '.tab-label', function(event) {

event.preventDefault();

	var $this = $(this);
	var index = $this.index();
	
	var $tabContent = $this.parents('.tab').find('.tab-content');
	
	$this.addClass('active').siblings().removeClass('active');
	
	$tabContent.filter(':visible').fadeOut(0, function() {
	    $tabContent.eq(index).fadeIn(0);
	});

});







});