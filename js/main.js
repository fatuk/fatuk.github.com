$(function() {
    var $pageContainer = $('.js-pageContainer'),
        $body = $('body');
    if ($(document).width() <= 992) {
        $pageContainer.on('swipeleft', function(e) {
            $pageContainer.removeClass('swiped');
        });
         $pageContainer.on('swiperight', function(e) {
            $pageContainer.addClass('swiped');
        });

        /*$pageContainer.swipe({
            swipe: function(event, direction, distance, duration, fingerCount) {
                switch (direction) {
                    case 'left':
                        $pageContainer.removeClass('swiped');
                        break;
                    case 'right':
                        $pageContainer.addClass('swiped');
                        break;
                }
            }
        });*/
    }
});