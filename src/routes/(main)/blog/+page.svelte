<script lang="ts">
	const ARTICLES = [
		{
			name: 'Beating Small LLMs Into Submission',
			short: '...or: a state machine and a 27B model that learned to read its own notes.',
			slug: '/blog/2026-09-07',
			date: 'September 7th, 2026'
		}
	];
</script>

<svelte:head>
	<title>Blog | e3ndr.xyz</title>
</svelte:head>

<div class="space-y-8 text-gray-11">
	<header class="space-y-4">
		<h1 class="text-4xl text-gray-12">blog</h1>
		<p>thoughts, experiments, and things I've been building.</p>
	</header>

	<section>
		<h2 class="sr-only">Articles</h2>

		<ol class="divide-y divide-gray-4 border-y border-gray-4">
			{#each ARTICLES as article}
				<li class="py-4 first:pt-5 last:pb-5">
					<a href={article.slug} class="group block space-y-1">
						<h3 class="text-xl text-gray-12 group-hover:text-gray-11">{article.name}</h3>
						<p class="text-gray-10">{article.short}</p>
						<p class="text-xs text-gray-10">{article.date}</p>
					</a>
				</li>
			{/each}
		</ol>
	</section>
</div>
