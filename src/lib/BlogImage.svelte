<script>
	import AspectVar from '$lib/aspect-ratio/AspectVar.svelte';

	export let aspectRatio;
	export let src;
	export let caption;
	export let credit = null; // Optional.
</script>

<figure class="my-8">
	<AspectVar {aspectRatio}>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img class="w-full h-full rounded-lg" {src} alt={caption} />
	</AspectVar>
	<figcaption class="text-xs font-semibold">
		{@html caption}

		{#if credit}
			{@const [href, owner] = credit}
			&bull;
			<a class="underline" {href} rel="noreferrer" target="_blank">
				{owner}
			</a>
		{/if}
	</figcaption>
</figure>
