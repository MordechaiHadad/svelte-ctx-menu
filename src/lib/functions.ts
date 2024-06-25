import { contextMenuStore, type ContextMenuOptions } from './store.js';

export const openContextMenu = (event: MouseEvent, options: ContextMenuOptions[]) => {
	event.preventDefault();
	contextMenuStore.set({
		show: true,
		x: event.clientX,
		y: event.clientY,
		options
	});
};

export function clickOutside(node: HTMLElement, callback: (event: MouseEvent) => void) {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) {
			callback(event);
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
