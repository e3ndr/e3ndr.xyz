<script>
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data; // blogpost.
	let contentComponent;

	onMount(async () => {
		contentComponent = (await import(`../../../../lib/meta/articles/${data.slug}.svelte`)).default;
	});
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{data.title} - e3ndr.xyz</title>
	<meta name="description" content={data.snippet} />

	<!-- Facebook Meta Tags -->
	<meta property="og:title" content="{data.title} - e3ndr.xyz" />
	<meta property="og:description" content={data.snippet} />
	<!-- <meta property="og:image" content="/images/hero-bg.jpg" /> -->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary" />
	<!-- <meta name="twitter:card" content="summary_large_image" /> -->
	<meta name="twitter:title" content="{data.title} - e3ndr.xyz" />
	<meta name="twitter:description" content={data.snippet} />
	<!-- <meta name="twitter:image" content="/images/hero-bg.jpg" /> -->
</svelte:head>

<div class="mx-auto max-w-3xl relative">
	<a
		class="absolute -translate-x-11 md:-translate-x-12 lg:-translate-x-16 text-xl mb-8 w-10 h-10 rounded-full transition bg-base-3 border border-base-4 hover:bg-base-4 hover:border-base-5"
		href="/articles"
	>
		<icon
			class="inline-block h-6 translate-y-2 translate-x-1.5"
			data-icon="icon/chevron-left"
			aria-hidden="true"
		/>
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
