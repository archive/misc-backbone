(function (win){

	if (win.define) {
		throw 'define is already defined!';
	}

	win.define = function (name, requires, fn) {

	}

	if (win.require) {
		throw 'define is already require!';
	}

	win.define = function (requires, fn) {

	}
	
})(window);