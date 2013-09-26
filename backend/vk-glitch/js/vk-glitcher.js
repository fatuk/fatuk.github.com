var glitch = {
	init: function(){
		vkApi.init();
	},
	make: function() {
		$('.header').glitch({
			amount: 8,
			complete: function(canvas) {
				$('.header').html(canvas);
			}
		}
	)}
};
