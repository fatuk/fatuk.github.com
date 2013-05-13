function myToggle(selector){
	if (selector === undefined) {
		console.log("Вы не указали селектор");
		return false;
	}

	var pure_selector = selector.substring(1, selector.length);
	var attr = document.getElementsByClassName(pure_selector)[0].getAttribute('style');

	if (attr === null || attr == "display:none;") {
		show(selector);
	}else{
		hide(selector);
	}

	return false;
}

function show(selector){
	if (selector === undefined) {
		console.log("Вы не указали селектор");
		return false;
	}

	if (selector.charAt(0) == ".") {
		selector = selector.substring(1, selector.length);
		document.getElementsByClassName(selector)[0].setAttribute('style', 'display:block;');
	}

	if (selector.charAt(0) == "#") {
		selector = selector.substring(1, selector.length);
		document.getElementsById(selector)[0].setAttribute('style', 'display:block;');
	}

	return false;
}

function hide(selector){
	if (selector === undefined) {
		console.log("Вы не указали селектор");
		return false;
	}

	if (selector.charAt(0) == ".") {
		selector = selector.substring(1, selector.length);
		document.getElementsByClassName(selector)[0].setAttribute('style', 'display:none;');
	}

	if (selector.charAt(0) == "#") {
		selector = selector.substring(1, selector.length);
		document.getElementsById(selector)[0].setAttribute('style', 'display:none;');
	}
	
	return false;
}