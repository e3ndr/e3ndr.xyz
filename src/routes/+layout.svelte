<script>
	import CSSIntermediate from '$lib/CSSIntermediate.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';
	import * as Swetrix from 'swetrix';

	onMount(() => {
		Swetrix.init('nfebI15q8Nfk', { debug: dev, disabled: dev });
		Swetrix.trackViews();
	});

	// Trigger a pageview everytime the user navigates.
	// We use the `browser` env variable to ensure that we don't try to
	// call trackViews while the component is doing SSR.
	$: $page.url.pathname, browser && Swetrix.trackViews();
</script>

<CSSIntermediate>
	<main class="mx-auto max-w-6xl bg-base-1 p-12 shadow min-h-full">
		<slot />
	</main>

	<Footer />
</CSSIntermediate>
