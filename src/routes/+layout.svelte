<script>
	import CSSIntermediate from '$lib/CSSIntermediate.svelte';
	import Navbar from '$lib/layout/Navbar.svelte';
	import Footer from '$lib/layout/Footer.svelte';
</script>

<CSSIntermediate>
	<div class="flex flex-col min-h-full">
		<!-- Here so the layout will work properly. -->
		<Navbar />

		<!-- This'll grow to fill any remaining space. It'll also overflow the container if needed. -->
		<main class="flex-grow">
			<slot />
		</main>
	</div>

	<!-- Here so the footer will get pushed off screen. -->
	<Footer />
</CSSIntermediate>
