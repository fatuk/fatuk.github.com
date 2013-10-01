$(function() {
	VK.init({
	    apiId: 3881634
	});

	var app = {
		init: function() {
			glitch.init();

			$('#loginBtn').click(function(event){
			    event.preventDefault();
			    vkApi.login();
			});
			$('#logoutBtn').click(function(event){
			    event.preventDefault();
			    vkApi.logout();
			});
			$('#getFriendsBtn').on('click', function(event) {
				event.preventDefault();
				vkApi.getFriends();
			});
			$('#glitchBtn').on('click', function(event) {
				event.preventDefault();
				vkApi.glitch();
			});
		}
	};

	app.init();
});