$(function() {
	var $pageContainer = $('.js-pageContainer'),
		$body = $('body');

	// Just swipe
	if ($(document).width() <= 992) {
		$pageContainer.on('swipeleft', function(e) {
			$pageContainer.removeClass('swiped');
		});
		$pageContainer.on('swiperight', function(e) {
			$pageContainer.addClass('swiped');
		});
	}

	// WOW css animation init
	setTimeout(function() {
		new WOW().init();
	}, 200);
});