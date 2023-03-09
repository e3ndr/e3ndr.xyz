<script>
	import WORK_EXPERIENCE from '$lib/meta/workExperience.mjs';
	import SOCIALS from '$lib/meta/socials.mjs';
</script>

<div class="mt-4" />

<div>
	<img class="rounded-full w-16" src="/images/avatar.jpg" alt="" />

	<h1 class="mt-4 font-serif font-bold text-6xl">Software engineer & UX guru.</h1>
	<p class="mt-3 text-lg max-w-2xl">
		I'm Alex, a 19 y/o software engineer currently residing in Oklahoma. I'm also one of the
		founders of Casterlabs, a toolsuite for live-streamers and content creators.
	</p>

	<ul class="mt-6 w-fit space-x-5 flex flex-row justify-center items-center">
		{#each SOCIALS as social}
			<li>
				<a href={social.href} rel="noreferrer" target="_blank" title={social.name}>
					<span class="sr-only">{social.name}</span>
					{@html social.icon}
				</a>
			</li>
		{/each}

		<div
			class="-ml-0.5 text-base-10 hover:text-base-11 transition w-5 h-5"
			aria-hidden="true"
			data-dummy="Dummy element so Tailwind knows what css classes to bundle."
		/>
	</ul>

	<div class="mt-20 flex flex-col-reverse md:flex-row w-full">
		<div class="flex-1 mx-auto">Blog posts here...</div>

		<div class="flex-1 mx-auto border border-base-5 rounded-lg w-full max-w-md p-8 bg-base-2 mb-16">
			<div class="flex flex-row items-center space-x-2 mb-6 ml-2">
				<icon class="w-6" data-icon="icon/briefcase" />
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
				<span class="text-md font-medium"> Contact me for a CV </span>
				<icon
					class="inline-block w-4 h-4 ml-1 -rotate-45 translate-y-[0.5px]"
					data-icon="icon/paper-airplane"
				/>
			</a>
		</div>
	</div>
</div>
