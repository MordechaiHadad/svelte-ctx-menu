<script lang="ts">
	import ContextMenu from "$lib/ContextMenu.svelte";
	import { openContextMenu } from "$lib/functions.js";

	const options = [
		{ label: 'Option 1', action: () => alert('Option 1 selected') },
		{ label: 'Option 2', action: () => alert('Option 2 selected') }
	];
</script>

<button on:contextmenu={(event) => openContextMenu(event, options)}>Hello there!</button>

<ContextMenu class="bg-neutral-100 border border-neutral-500 shadow-lg" />