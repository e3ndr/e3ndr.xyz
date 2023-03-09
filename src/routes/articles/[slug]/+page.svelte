<script>
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data; // blogpost.
	let contentComponent;

	onMount(async () => {
		contentComponent = (await import(`../../../lib/meta/articles/${data.slug}.svelte`)).default;
	});
</script>

<svelte:head>
	<title>{data.title} - e3ndr.xyz</title>
</svelte:head>

<div class="mx-auto max-w-3xl relative">
	<a
		class="absolute -translate-x-16 text-xl mb-8 w-10 h-10 rounded-full transition bg-base-3 border border-base-4 hover:bg-base-4 hover:border-base-5"
		href="/articles"
	>
		<icon class="inline-block h-6 translate-y-2 translate-x-1.5" data-icon="icon/chevron-left" />
		<span class="sr-only"> Go back </span>
	</a>

	<article>
		<h1 class="inline-block font-bold text-2xl mr-1">{data.title}</h1>
		<h2 class="inline-block -translate-y-0.5 text-base-11 text-md mb-6">
			<div class="mr-1 inline-block h-[1em] w-0.5 rounded-full translate-y-0.5 bg-base-8" />
			{data.date}
		</h2>

		<p>
			{#if contentComponent}
				<svelte:component this={contentComponent} />
			{:else}
				{@html data.snippet}
			{/if}
		</p>
	</article>
</div>
