var hasClicked = false;
// Add mobile menu trigger 
(function($){
    $('#main-menu-trigger').on('click', function() {
        $('#main-menu-close').toggleClass('menu-open');
        $('#block-mainmenugroup').toggleClass('menu-open');
        $('.header-search-wrapper').toggleClass('menu-open');
    });
    $('#main-menu-close').on('click', function() {
        $(this).removeClass('menu-open');
        $('#block-mainmenugroup').removeClass('menu-open');
        $('.header-search-wrapper').removeClass('menu-open');
    });

    $('#block-mainmenugroup .link-expand').on('click', function(e) {
        if ($(this).parent().parent().hasClass('is-open')) {
            $('#block-mainmenugroup .is-open').removeClass('is-open');
        } else {
            $('#block-mainmenugroup .is-open').removeClass('is-open');
            $(this).parent().parent().addClass('is-open');
        }
    });

    $('.video-player').colorbox({iframe: true, width: 640, height: 390, href:function(){
        if (this.href.indexOf('vimeo') > -1) {
            return this.href.replace('//vimeo.com', '//player.vimeo.com/video')
        } else {
            var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
            if (videoId && videoId[1]) {
              return 'http://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent';
            }
        }
      }});

})(jQuery);
