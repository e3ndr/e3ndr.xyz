<script lang="ts">
	import { page } from '$app/state';

	const NAV_LINKS = [
		{ name: 'about', href: '/' },
		// { name: 'blog', href: '/blog' },
		{ name: 'twitter', href: 'https://twitter.com/itzlcyx' },
		{ name: 'github', href: 'https://github.com/e3ndr' },
		{ name: 'linkedin', href: 'https://www.linkedin.com/in/e3ndr' }
	];
</script>

<nav class="mx-auto w-fit">
	<ul class="flex space-x-4">
		{#each NAV_LINKS as link}
			{@const isExternal = link.href.startsWith('http')}
			<li>
				<a
					href={link.href}
					target={isExternal ? '_blank' : '_self'}
					class="p-1 text-gray-12 hover:bg-gray-12 hover:text-gray-1"
					class:underline={page.url.pathname === link.href}
					class:no-underline!={isExternal}
				>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
