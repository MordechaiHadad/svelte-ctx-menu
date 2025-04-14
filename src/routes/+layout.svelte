<script>
	import ContextMenu from '$lib/ContextMenu.svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';

	let { children } = $props();
</script>


<ContextMenu class="border border-neutral-500 bg-neutral-100 shadow-lg" inTransition={fly} />
{@render children()}