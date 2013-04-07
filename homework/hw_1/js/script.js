function showAuth(){
	document.getElementsByClassName('auth')[0].setAttribute('style', 'display:block;');
	document.getElementsByClassName('blur-area')[0].setAttribute('style', '-webkit-filter: blur(4px) contrast(50%);');
	// document.getElementsByClassName('blur-area')[0].setAttribute('class', 'blur-area blur');
	return false;
}

function hideAuth(){
	document.getElementsByClassName('auth')[0].setAttribute('style', 'display:none;');
	document.getElementsByClassName('blur-area')[0].setAttribute('style', '-webkit-filter: none;');
	// document.getElementsByClassName('blur-area')[0].setAttribute('class', 'blur-area');
	return false;
}