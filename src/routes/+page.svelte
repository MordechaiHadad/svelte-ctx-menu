<script>
	import ContextMenu from '$lib';
	import { openContextMenu } from '$lib';

	const options = [
		{ label: 'Option 1', action: () => alert('Option 1 selected') },
		{ label: 'Option 2', action: () => alert('Option 2 selected') }
	];
</script>

<button on:contextmenu={(event) => openContextMenu(event, options)}>Right Click Me</button>

<ContextMenu />
