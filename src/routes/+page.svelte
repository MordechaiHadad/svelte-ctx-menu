<script lang="ts">
	import ContextMenu from '$lib/ContextMenu.svelte';
	import { openContextMenu } from '$lib/functions.js';
	import { fly } from 'svelte/transition';
</script>

<ContextMenu class="border border-neutral-500 bg-neutral-100 shadow-lg" inTransition={fly} />

<div class="flex w-full justify-end">
	<button
		oncontextmenu={(e) =>
			openContextMenu(e, [
				{
					label: 'Hello friends',
					action: () => console.log('Hello friends')
				}
			])}>Bye</button
	>
</div>
<hr />
<button
	oncontextmenu={(e) =>
		openContextMenu(e, [
			{
				label: 'Hello friends',
				action: () => console.log('Hello friends')
			}
		])}>Die</button
>
