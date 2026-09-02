<script lang="ts">
	import '$lib/css/tailwind.css';
	import '$lib/css/app.css';
	import '$lib/css/colors.css';

	import NavBar from '$lib/NavBar.svelte';
</script>

<header class="border-b border-gray-3 py-4 font-mono">
	<NavBar />
</header>

<main class="mx-auto max-w-4xl p-4 font-mono md:p-8">
	<!-- svelte-ignore slot_element_deprecated -->
	<slot />
</main>
