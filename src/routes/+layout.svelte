<script>
	import CSSIntermediate from '$lib/CSSIntermediate.svelte';
	import Footer from '$lib/layout/Footer.svelte';
</script>

<CSSIntermediate>
	<main class="mx-auto max-w-6xl bg-base-1 p-12 shadow min-h-full">
		<slot />
	</main>

	<Footer />
</CSSIntermediate>
