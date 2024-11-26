<script lang="ts">
	import { clickOutside } from '$lib/functions.js';
	import { twMerge } from 'tailwind-merge';
	import { contextMenuStore } from './store.svelte.js';

	let { class: className = '', inTransition = () => {}, outTransition = () => {} } = $props();

	let contextMenu: HTMLElement | undefined = $state(undefined);

	const close = () => {
		contextMenuStore.show = false;
		contextMenuStore.x = 0;
		contextMenuStore.y = 0;
		contextMenuStore.options = [];
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (contextMenu && !contextMenu.contains(event.target as Node)) close();
	};

	$effect(() => {
		if (contextMenu) {
			const rect = contextMenu.getBoundingClientRect();
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			const adjustedX = Math.min(Math.max(contextMenuStore.x, 0), windowWidth - rect.width);
			const adjustedY = Math.min(Math.max(contextMenuStore.y, 0), windowHeight - rect.height);

			contextMenu.style.left = `${adjustedX}px`;
			contextMenu.style.top = `${adjustedY}px`;
		}
	});
</script>

{#if contextMenuStore.show}
	<div
		class={twMerge('context-menu absolute flex flex-col', className)}
		bind:this={contextMenu}
		use:clickOutside={handleClickOutside}
		in:inTransition
		out:outTransition
	>
		{#each contextMenuStore.options as option}
			<button
				class={option.class}
				onclick={() => {
					option.action();
					close();
				}}
			>
				{#if option.component}
					{@render option.component()}
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
