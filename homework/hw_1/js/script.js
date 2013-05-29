$(function(){

	/**
	* View logic
	**/

	$(".comment-answer-btn").on("click", function(e){
		e.preventDefault();
		$(this).parent().next(".add-comment-block").toggle({
			"display":"block"
		});
	});

	$(".comment-message-input").on("focus", function(e){
		$(this).animate({
			"height":"150px"
		});
	});

	$(".comment-message-input").on("blur", function(e){
		$(this).animate({
			"height":"50px"
		});
	});

	/**
	* Validation
	**/

	$(".add-comment-btn").on("click", function(e){
		// e.preventDefault();
		var username = $(this).siblings(".user-name-input").prop("value");
		var message = $(this).siblings(".comment-message-input").prop("value");
		if (!username || !message) {
			$(this).siblings(".comments-error-message").css({"display":"block"});
			$(this).siblings(".comments-error-message").text("Заполните все поля");
			return false;
		}else{
			$(this).siblings(".comments-error-message").css({"display":"none"});
			return true;
		};
	});
});