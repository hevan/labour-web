/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
-----------------------------------------------------------------------*/
(function ($) {
 
    $.fn.fakeLoader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide:1200, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex 
            bgColor: '#2ecc71', // Default background color
            spinner:'spinner7', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);

        //Customized Spinners 自定义雪碧图
        var spinner03 = '<div class="spin spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each 
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    default:
                        el.html(spinner03);
                    }

                //Add customized loader image

                if (settings.imagePath !='') {
                    el.html('<div class="spin"><img src="'+settings.imagePath+'"></div>');
                    centerLoader();
                }
        });

        //Time to hide fakeLoader
        setTimeout(function(){
            $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader
 

        //Center Spinner
        function centerLoader() {

            var winW = $(window).width();
            var winH = $(window).height();
            var spinnerW = $('.spin').outerWidth();
            var spinnerH = $('.spin').outerHeight();
            $('.spin').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });

        }
            //监听屏幕
        $(window).load(function(){
                centerLoader();
              $(window).resize(function(){
                centerLoader();
              });
        });


}(jQuery));




