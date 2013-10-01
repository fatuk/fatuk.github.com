
	var vkApi = {
		init: function(){
			this.getData();
			
			VK.Auth.getLoginStatus(function(response){
				if(response.session){
					$('#loginBtn').attr('disabled', true);
					$('#getFriendsBtn').attr('disabled', false);
					$('#glitchBtn').attr('disabled', true);
					$('#logoutBtn').attr('disabled', false);
				}else {
					$('#loginBtn').attr('disabled', false);
					$('#getFriendsBtn').attr('disabled', true);
					$('#glitchBtn').attr('disabled', true);
					$('#logoutBtn').attr('disabled', true);
				}
			});
		},
		getData: function(){
			VK.Auth.getLoginStatus(function(response){
			});

			VK.Observer.subscribe('auth.login', function(response){

				vkApi.status = response.status;

				VK.Auth.getLoginStatus(function(response){
					vkApi.status = response.status;				
					vkApi.uids = response.session.mid;
					VK.Api.call('users.get', {
						uids: response.session.mid,
						fields: 'photo_big'
					}, function(data){
						vkApi.firstName = data.response[0].first_name;
						vkApi.lastName = data.response[0].last_name;
						vkApi.avatar = data.response[0].photo_big;
						$('.info-block').find('.info').text("Привет, " + vkApi.firstName + ' ' + vkApi.lastName);
						console.log(vkApi.avatar);
						$('.current-user-avatar').toggleClass('hide');
						$('.current-user__img').attr('src', vkApi.avatar);
						$('#loginBtn').attr('disabled', true);
					});
				});

			    VK.Observer.subscribe('auth.sessionChange', function(response){
				    if (response.status != 'connected') {
						$('.info-block').find('.info').text("Нужно залогиниться");
						$('#loginBtn').attr('disabled', false);
					}
				});
			});
			
		},
		login: function(){
			VK.Auth.login(null, VK.access.FRIENDS);

			VK.Observer.subscribe('auth.login', function(response){
				$('#getFriendsBtn').attr('disabled', false);
				$('#logoutBtn').attr('disabled', false);
			});
		},
		logout: function(){
			VK.Auth.logout(function() {
				$('#getFriendsBtn').attr('disabled', true);
				$('#logoutBtn').attr('disabled', true);
				$('#glitchBtn').attr('disabled', true);
				$('.friends-block').text('');
				$('.current-user-avatar').toggleClass('hide');
			});

		},
		getFriends: function(){
			VK.Api.call('friends.get', {
		    	fields: ['photo_big']
			}, function(data){
		    	vkApi.render(data);
		    	$('#getFriendsBtn').attr('disabled', true);
		    	$('#glitchBtn').attr('disabled', false);
			});
		},
		glitch: function() {
			var avatars = $('.friends-block').find('.friend-avatar');
			for(i in avatars){
				avatars[i].src =  'http://hitode909.appspot.com/glitch/api2?uri=' + avatars[i].src;
			}
			$('#glitchBtn').attr('disabled', true);
		},
		render: function(data){
			$('.friends-block').text('');
			var glitchServiceUrl = 'http://hitode909.appspot.com/glitch/api2?uri=';
			for(i in data.response){
				var imgUrl = data.response[i].photo_big,
					fullName = data.response[i].first_name + ' ' + data.response[i].last_name;
				$('.friends-block').append('<li class="friend-item"><img title="' + fullName + '" class="friend-avatar" src="' + imgUrl + '" alt="" ></li>');
			}
			$('.friends-block').wrapInner('<ul class="friends-list">');
		}
	};
