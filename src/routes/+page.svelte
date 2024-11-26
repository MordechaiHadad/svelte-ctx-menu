<script lang="ts">
	import ContextMenu from '$lib/ContextMenu.svelte';
	import { openContextMenu } from '$lib/functions.js';
</script>

<ContextMenu class="border border-neutral-500 bg-neutral-100 shadow-lg" />

<button oncontextmenu={(e) => openContextMenu(e, [{
	label: 'Hello friends',
	action: () => console.log('Hello friends')
}])}>Hello friends</button>