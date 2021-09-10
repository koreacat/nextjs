export const getViewPortPosition = (el: Element) => {
	if(!el) return;

    const getVpPos: any = (el: Element) => {
    	if(!el || !el.parentElement) return;
        if(el?.parentElement?.tagName === 'svg') {
            return el.parentElement.getBoundingClientRect();
        }
        return getVpPos(el.parentElement);
    };

    const elPos = el.getBoundingClientRect();
    const vpPos = getVpPos(el);

    return {
        top: elPos.top - vpPos.top,
        left: elPos.left - vpPos.left,
        width: elPos.width,
        bottom: elPos.bottom - vpPos.top,
        height: elPos.height,
        right: elPos.right - vpPos.left
    };
};
