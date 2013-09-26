
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
						uids: response.session.mid
					}, function(data){
						vkApi.firstName = data.response[0].first_name;
						vkApi.lastName = data.response[0].last_name;
						$('.info-block').find('.info').text("Привет, " + vkApi.firstName + ' ' + vkApi.lastName);
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
		render: function(data){
			$('.friends-block').text('');
			for(i in data.response){
				$('.friends-block').append('<li class="friend-item"><img class="friend-avatar" src="' + data.response[i].photo_big + '" alt="" ></li>');
			}
			$('.friends-block').wrapInner('<ul class="friends-list">');
		}
	};
