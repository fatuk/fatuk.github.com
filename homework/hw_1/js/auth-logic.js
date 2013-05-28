function showAuth(){
	$(".auth").css({
		"top":"-300px",
		"opacity":"0",
		"display":"block"		
	});
	$(".auth").animate({
		"top":"150px",
		"opacity":"1"
	}, 1500, "easeInOutElastic", function(){		
		$(".blur-area").css("-webkit-filter", "blur(4px) contrast(50%)");
	});

	$(".shade").css("display", "block");
	return false;
}

function hideAuth(){
	$(".auth").animate({
		"top":"-100px",
		"opacity":"0"
	}, 1500, "easeInOutElastic", function(){
		$(".auth").css("display", "none");
		$(".shade").css("display", "none");
	});

	$(".blur-area").css("-webkit-filter", "none");
	return false;
}

$(function(){
	$(".login-btn").on("click", function(e){
		e.preventDefault();
		showAuth();
	});

	$(".cancel-btn, .shade").on("click", function(e){
		e.preventDefault();
		hideAuth();
	});
});