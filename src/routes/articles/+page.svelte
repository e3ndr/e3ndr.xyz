<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Articles - e3ndr.xyz</title>
</svelte:head>

<a class="block text-xl mb-8" href="/">
	<icon
		class="inline-block h-4 w-4 translate-y-0.5"
		data-icon="icon/chevron-left"
		aria-hidden="true"
	/>
	Go back
</a>

<ul>
	{#each data.blogPosts as blogPost}
		<li class="flex flex-row">
			<p class="mt-4 w-36 text-base-11 text-sm text-right mr-2">
				{blogPost.date}
			</p>
			<a
				class="mr-36 px-6 py-4 flex-1 rounded-lg transition border border-transparent hover:bg-base-3 hover:border-base-4"
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
			class="mx-36 block text-center text-sm p-3 rounded-lg transition border border-transparent hover:bg-base-3 hover:border-base-4"
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
