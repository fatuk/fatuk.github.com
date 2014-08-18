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
	}
});