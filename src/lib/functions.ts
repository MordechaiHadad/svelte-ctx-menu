import { contextMenuStore, type ContextMenuOptions } from "./store.svelte.js";

export const openContextMenu = (event: MouseEvent, options: ContextMenuOptions[]) => {
	event.preventDefault();
	contextMenuStore.show = true;
	contextMenuStore.x = event.clientX;
	contextMenuStore.y = event.clientY;
	contextMenuStore.options = options;
};

export const clickOutside = (node: HTMLElement, callback: (event: MouseEvent) => void) => {
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
};
