var glitch = {
	init: function(){
		vkApi.init();
	},
	make: function() {
		$('.friends-block').glitch({
			amount: 8,
			complete: function(canvas) {
				$('.friends-block').html(canvas);
				var dataURL = canvas.toDataURL();
				$('.friends-block').append('<img src=' + dataURL + '>');
				console.log(dataURL);
			}
		}
	)}
};
