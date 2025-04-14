# Svelte Context Menu

A lightweight, customizable context menu library for Svelte 5 applications.

## Features

- 🚀 Built for Svelte 5 with runes
- 📱 Automatically adjusts position to prevent viewport overflow
- 🎨 Tailwind CSS integration with customizable styles
- 🧩 Support for custom components in menu items
- 🔄 Transition animations support
- 📦 Lightweight and easy to use

## Installation

```bash
npm install svelte-ctx-menu
```

## Usage

### Basic Example

```svelte
<script>
	import { ContextMenu, openContextMenu } from 'svelte-ctx-menu';

	const handleContextMenu = (e) => {
		openContextMenu(e, [
			{
				label: 'Option 1',
				action: () => console.log('Option 1 clicked')
			},
			{
				label: 'Option 2',
				action: () => console.log('Option 2 clicked')
			}
		]);
	};
</script>

<div oncontextmenu={handleContextMenu}>Right click me!</div>

<ContextMenu />
```

### Custom Styling

The context menu supports Tailwind CSS classes and custom styling:

```svelte
<script>
	import { ContextMenu } from 'svelte-ctx-menu';
</script>

<ContextMenu class="rounded-lg bg-white shadow-lg" />
```

### Custom Components

You can use custom components in menu items:

```svelte
<script>
	import { openContextMenu } from 'svelte-ctx-menu';

	const showMenu = (e) => {
		openContextMenu(e, [
			{
				component: () => '<div class="flex items-center"><Icon />Copy</div>',
				action: () => console.log('Copy clicked')
			}
		]);
	};
</script>
```

### Transitions

The context menu supports custom transitions for entry and exit animations:

```svelte
<script>
	import { fade } from 'svelte/transition';
	import { ContextMenu } from 'svelte-ctx-menu';
</script>

<ContextMenu inTransition={fade} outTransition={fade} />
```

## API

### ContextMenu Props

| Prop          | Type     | Default  | Description                                 |
| ------------- | -------- | -------- | ------------------------------------------- |
| class         | string   | ''       | Additional CSS classes to apply to the menu |
| inTransition  | function | () => {} | Entry transition function                   |
| outTransition | function | () => {} | Exit transition function                    |

### openContextMenu Options

```typescript
interface MenuOption {
	label?: string;
	component?: () => string;
	action: () => void;
	class?: string;
}

function openContextMenu(event: MouseEvent, options: MenuOption[]): void;
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build the library
npm run package

# Preview production build
npm run preview
```

## License

MIT License - see the [LICENSE](LICENSE) file for details.
