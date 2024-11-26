import type { Snippet } from "svelte";

export type ContextMenuOptions = {
	label?: string;
	component?: Snippet;
	action: () => void;
	class?: string;
};

export const contextMenuStore = $state({
	show: false,
	x: 0,
	y: 0,
	options: [] as ContextMenuOptions[]
});
