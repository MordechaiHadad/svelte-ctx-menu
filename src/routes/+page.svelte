<script lang="ts">
	import ContextMenu from "$lib/ContextMenu.svelte";
	import { openContextMenu } from "$lib/functions.js";

	const options = [
		{ label: 'Option 1', action: () => alert('Option 1 selected') },
		{ html: "<span class='bg-blue-500'>Bye Bye</span> <span class='bg-red-500'>Hello</span>'", action: () => alert('Option 2 selected'), class: "flex gap-5" }
	];
</script>

<button on:contextmenu={(event) => openContextMenu(event, options)}>Hello there!</button>

<ContextMenu class="bg-neutral-100 border border-neutral-500 shadow-lg" />