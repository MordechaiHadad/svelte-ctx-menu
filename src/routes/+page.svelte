<script lang="ts">
	import { openContextMenu } from '$lib/functions.js';
</script>


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
