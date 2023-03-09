<script>
	import ScrollToTop from '$lib/layout/ScrollToTop.svelte';

	// Theme colors.
	import './css/colors/base/mauve.css';
	import './css/colors/primary/pink.css';
	import './css/colors/overlay-black.css';
	import './css/colors/overlay-white.css';

	// The actual gravy.
	import './css/app.css';
	import './css/colors/base.css';
	import './css/colors/primary.css';
	import './css/colors/misc.css';

	import iconsHook from '$lib/icons.mjs';
	import { onMount } from 'svelte';

	const useLightTheme = true;
	const baseColor = 'mauve';
	const primaryColor = 'pink';

	let scrollButton;

	onMount(iconsHook);
</script>

<!--
	The app's theming is handled with data-theme-base, data-theme-primary, and class:dark-theme (we include data-theme-dark for debugging).
	All of the css files to make this happen are imported above.
-->

<div
	id="css-intermediate"
	class="w-full h-full bg-base-3 text-base-12 overflow-auto"
	class:dark-theme={!useLightTheme}
	data-theme-dark={!useLightTheme}
	data-theme-base={baseColor}
	data-theme-primary={primaryColor}
	on:scroll={(e) => scrollButton.onScroll(e)}
>
	<slot />

	<ScrollToTop bind:this={scrollButton} />
</div>

<style>
	#css-intermediate {
		--link: rgb(54, 100, 252);
		--error: rgb(224, 30, 30);
		--success: rgb(69, 204, 69);
	}

	#css-intermediate.dark-theme {
		--link: rgb(58, 137, 255);
		--error: rgb(252, 31, 31);
		--success: rgb(64, 187, 64);
	}
</style>
