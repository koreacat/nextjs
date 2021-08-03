// from underscore.js
export interface ThrottleOptions {
	leading?: boolean;
	trailing?: boolean;
}

export default function throttle(func: Function, wait: number, options: ThrottleOptions = {}) {
	let timeout: NodeJS.Timeout | null;
	let previous: number;
	let args: any;
	let result: any;
	let context: any;

	const later = function () {
		previous = options.leading === false ? 0 : Date.now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};

	const throttled = function (this: any, ..._args: any[]) {
		const _now = Date.now();
		if (!previous && options.leading === false) previous = _now;
		var remaining = wait - (_now - previous);
		context = this;
		args = _args;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = _now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};

	throttled.cancel = function () {
		if (timeout === null) return;
		clearTimeout(timeout);
		previous = 0;
		timeout = context = args = null;
	};

	return throttled;
}