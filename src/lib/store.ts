import { writable } from 'svelte/store';

export type ContextMenuOptions = {
	label?: string;
	html?: string;
	action: () => void;
	class?: string;
};

export const contextMenuStore = writable({
	show: false,
	x: 0,
	y: 0,
	options: [] as ContextMenuOptions[]
});
