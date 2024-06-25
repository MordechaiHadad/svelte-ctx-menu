<script lang="ts">
	import { clickOutside } from '$lib/functions.js';
	import { twMerge } from 'tailwind-merge';
	import { contextMenuStore } from './store.js';

	let contextMenu: HTMLElement | undefined;

	const close = () => {
		contextMenuStore.set({ show: false, x: 0, y: 0, options: [] });
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (contextMenu && !contextMenu.contains(event.target as Node)) {
			close();
		}
	};
</script>

{#if $contextMenuStore.show}
	<div
		class={twMerge('context-menu absolute flex flex-col', $$props.class)}
		bind:this={contextMenu}
		use:clickOutside={handleClickOutside}
		style="top: {$contextMenuStore.y}px; left: {$contextMenuStore.x}px;"
	>
		{#each $contextMenuStore.options as option}
			<button
				class={option.class}
				on:click={() => {
					option.action();
					close();
				}}
				>{#if option.html}
					{@html option.html}
				{:else}
					{option.label}
				{/if}
			</button>
		{/each}
	</div>
{/if}

<style>
	.context-menu {
		z-index: 9999;
	}
</style>
