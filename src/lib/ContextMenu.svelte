<script lang="ts">
	import { clickOutside } from '$lib/functions.js';
	import { twMerge } from 'tailwind-merge';
	import { contextMenuStore } from './store.js';

	let contextMenu: HTMLElement | undefined;

	const handleClickOutside = (event: MouseEvent) => {
		if (contextMenu && !contextMenu.contains(event.target as Node)) {
			contextMenuStore.set({ show: false, x: 0, y: 0, options: [] });
		}
	};
</script>

{#if $contextMenuStore.show}
	<div
		class={twMerge('absolute z-[1000] flex flex-col', $$props.class)}
		bind:this={contextMenu}
		use:clickOutside={handleClickOutside}
		style="top: {$contextMenuStore.y}px; left: {$contextMenuStore.x}px;"
	>
		{#each $contextMenuStore.options as option}
			<button class={option.class} on:click={option.action}>{option.label}</button>
		{/each}
	</div>
{/if}
