<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>Articles - e3ndr.xyz</title>
	<meta name="description" content="All of my previously-written articles." />

	<!-- Facebook Meta Tags -->
	<meta property="og:title" content="Articles - e3ndr.xyz" />
	<meta property="og:description" content="All of my previously-written articles." />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Articles - e3ndr.xyz" />
	<meta name="twitter:description" content="All of my previously-written articles." />
</svelte:head>

<a
	class="absolute -translate-x-3 top-6 text-xl mb-8 w-10 h-10 rounded-full transition bg-base-3 border border-base-4 hover:bg-base-4 hover:border-base-5"
	href="/"
>
	<icon
		class="inline-block h-6 translate-y-2 translate-x-1.5"
		data-icon="icon/chevron-left"
		aria-hidden="true"
	/>
	<span class="sr-only"> Go back </span>
</a>

<ul class="mt-6">
	{#each data.blogPosts as blogPost}
		<li class="flex flex-row">
			<p class="mt-4 hidden md:block md:w-36 text-base-11 text-sm text-right mr-2">
				{blogPost.date}
			</p>
			<a
				class="md:mr-36 px-6 py-4 flex-1 rounded-lg transition border border-transparent hover:bg-base-3 hover:border-base-4"
				href="/articles/{blogPost.slug}"
			>
				<h1 class="text-md font-medium inline-block">{blogPost.title}</h1>
				<p class="mt-1 mb-2 text-base-12 text-sm">
					{@html blogPost.snippet}
				</p>
				<span class="text-primary-10">
					Read Article
					<icon
						class="inline-block h-3 -translate-x-1.5 translate-y-px"
						data-icon="icon/chevron-right"
						aria-hidden="true"
					/>
				</span>
			</a>
		</li>
	{/each}

	{#if !data.isStart}
		<a
			class="md:mx-36 block text-center text-sm p-3 rounded-lg transition border border-transparent hover:bg-base-3 hover:border-base-4"
			href="/articles?after={data.previous}"
			on:click={() =>
				document.querySelector('#css-intermediate').scrollTo({ top: 0, behavior: 'smooth' })}
		>
			Previous Page
		</a>
	{/if}
	{#if !data.isEnd}
		<a
			class="mx-36 block text-center text-sm p-3 rounded-lg transition border border-transparent hover:bg-base-3 hover:border-base-4"
			href="/articles?after={data.next}"
			on:click={() =>
				document.querySelector('#css-intermediate').scrollTo({ top: 0, behavior: 'smooth' })}
		>
			Next Page
		</a>
	{/if}
</ul>
