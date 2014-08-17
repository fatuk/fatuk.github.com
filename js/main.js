$(function() {
    var $pageContainer = $('.js-pageContainer'),
        $body = $('body');
    if ($(document).width() <= 992) {
        $body.swipe({
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
        });
    }
});