<script>
	import WORK_EXPERIENCE from '$lib/meta/workExperience.mjs';
	import SOCIALS from '$lib/meta/socials.mjs';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>Software Engineer & UX Expert - e3ndr.xyz</title>
	<meta name="description" content="Hi, I'm Alex!" />

	<!-- Facebook Meta Tags -->
	<meta property="og:title" content="Software Engineer & UX Expert - e3ndr.xyz" />
	<meta property="og:description" content="Hi, I'm Alex!" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Software Engineer & UX Expert - e3ndr.xyz" />
	<meta name="twitter:description" content="Hi, I'm Alex!" />
</svelte:head>

<div class="mt-4">
	<img class="rounded-full w-16 h-16" src="/images/avatar.jpg" alt="" />

	<h1 class="mt-4 font-serif font-bold text-6xl">Software engineer & UX Expert.</h1>
	<p class="mt-3 text-lg max-w-2xl">
		I'm Alex, a 19 y/o software engineer currently residing in Oklahoma. I'm also one of the
		founders of Casterlabs, a toolsuite for live-streamers and content creators.
	</p>

	<div
		class="-ml-0.5 text-base-10 hover:text-base-11 transition w-5 h-5"
		data-dummy="Dummy element so Tailwind knows what css classes to bundle."
		aria-hidden="true"
	/>
	<ul class="mt-2 mx-auto sm:mx-0 w-fit space-x-5 flex flex-row justify-center items-center">
		{#each SOCIALS as social}
			<li>
				<a href={social.href} rel="noreferrer" target="_blank" title={social.name}>
					<span class="sr-only">{social.name}</span>
					{@html social.icon}
				</a>
			</li>
		{/each}
	</ul>

	<div class="mt-20 flex flex-col-reverse md:flex-row md:space-x-8 w-full">
		<ul class="flex-1 mx-auto">
			{#each data.recentBlogPosts as blogPost}
				<li
					class="px-6 py-4 rounded-lg transition border border-transparent hover:bg-base-3 hover:border-base-4"
				>
					<a href="/articles/{blogPost.slug}">
						<h1 class="text-md font-medium inline-block">{blogPost.title}</h1>
						<span class="text-base-11 text-sm">
							<div class="mx-1 inline-block h-[1em] w-0.5 rounded-full translate-y-0.5 bg-base-8" />
							{blogPost.date}
						</span>
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

			<li>
				<a
					class="block text-center text-sm p-3 rounded-lg transition border border-transparent hover:bg-base-3 hover:border-base-4"
					href="/articles"
				>
					See all articles
				</a>
			</li>
		</ul>

		<div class="flex-1 mx-auto border border-base-5 rounded-lg w-full max-w-md p-8 bg-base-2 mb-16">
			<div class="flex flex-row items-center space-x-2 mb-6 ml-2">
				<icon class="w-6" data-icon="icon/briefcase" aria-hidden="true" />
				<span class="font-semibold text-sm">Work Experience</span>
			</div>

			{#each WORK_EXPERIENCE as experience}
				<div class="flex flex-row items-center space-x-3 mt-2 w-full">
					<div class="border border-base-6 bg-base-1 rounded-full w-10 h-10 shadow-sm">
						<img
							class="p-1 rounded-full w-full h-full shadow-md"
							src="/images/experience/{experience.id}.png"
							alt="{experience.name} Logo"
						/>
					</div>
					<div class="flex-1 flex flex-col">
						<span class="font-semibold text-sm"> {experience.name} </span>
						<div class="flex flex-row text-base-9 text-xs">
							<span class="flex-1">{experience.role}</span>
							<span>
								{experience.timeframe[0]}&mdash;{experience.timeframe[1]}
							</span>
						</div>
					</div>
				</div>
			{/each}

			<a
				href="mailto:balexbowles@gmail.com"
				rel="noreferrer"
				target="_blank"
				class="mt-12 block text-center w-full border bg-base-2 hover:bg-base-4 border-base-6 hover:border-base-7 transition rounded-md p-3"
			>
				<span class="text-sm font-medium"> Contact me for a CV </span>
				<icon
					class="inline-block w-4 h-4 ml-1 -rotate-45 translate-y-px"
					data-icon="icon/paper-airplane"
					aria-hidden="true"
				/>
			</a>
		</div>
	</div>
</div>
