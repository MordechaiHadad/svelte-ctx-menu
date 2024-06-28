import type { SvelteComponent } from 'svelte';
import { writable } from 'svelte/store';

type AnySvelteComponent = new (...args: any) => SvelteComponent;

export type ContextMenuOptions = {
	label?: string;
	component?: { element: AnySvelteComponent; props?: Record<string, any> };
	action: () => void;
	class?: string;
};

export const contextMenuStore = writable({
	show: false,
	x: 0,
	y: 0,
	options: [] as ContextMenuOptions[]
});
