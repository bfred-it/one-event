'use strict';

export default function once (element, type, listener, useCapture) {
	function selfRemoving() {
		element.removeEventListener(type, listener, useCapture);
		element.removeEventListener(type, selfRemoving, useCapture);
	}
	element.addEventListener(type, listener, useCapture);
	element.addEventListener(type, selfRemoving, useCapture);
}
