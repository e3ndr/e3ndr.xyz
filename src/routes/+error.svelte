<script lang="ts">
	import '$lib/css/tailwind.css';
	import '$lib/css/app.css';
	import '$lib/css/colors.css';
	import { page } from '$app/state';
	import NavBar from '$lib/NavBar.svelte';
</script>

<header class="border-b border-gray-3 py-4 font-mono">
	<NavBar />
</header>

<main class="mx-auto max-w-4xl py-16 text-center font-mono">
	<h1 class="text-3xl font-bold">{page.error!.message}</h1>
</main>
