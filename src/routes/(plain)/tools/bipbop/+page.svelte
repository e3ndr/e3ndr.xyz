<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let FRAMERATE: number = $state(60);
	let PLAYSOUND: boolean = $state(false);

	let audioContext: AudioContext;

	let renderTaskId = -1;

	let startTime: number;
	let elapsed = $state(0);

	let currentFrame = $state(0);
	let isBip = $state(false);

	function parseQuery() {
		const queryString = location.search;
		const pairs = (queryString[0] === '?' ? queryString.substring(1) : queryString).split('&');
		const query: Record<string, string> = {};
		for (let i = 0; i < pairs.length; i++) {
			const pair = pairs[i].split('=');
			query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
		}
		return query;
	}

	function doBeep(frequency: number) {
		const oscillator = audioContext.createOscillator();
		oscillator.type = 'sine';
		oscillator.connect(audioContext.destination);
		oscillator.frequency.value = frequency;
		oscillator.start();
		setTimeout(() => {
			oscillator.stop();
		}, 100);
	}

	function render() {
		currentFrame++;

		elapsed = (Date.now() - startTime) / 1000;

		const doNoise = currentFrame % FRAMERATE == 0;
		if (doNoise) {
			isBip = !isBip;

			let frequency = 0;
			if (isBip) {
				frequency = 800;
			} else {
				frequency = 600;
			}

			if (PLAYSOUND) {
				doBeep(frequency);
			}
		}
	}

	onMount(() => {
		const { rate, sound, transparent } = parseQuery();
		if (!rate || !sound) {
			location.search = `?rate=${rate || 60}&sound=${sound || false}`;
		}

		if (transparent == 'true') {
			document.body.style.backgroundColor = 'transparent';
		}

		FRAMERATE = parseFloat(rate);
		PLAYSOUND = sound == 'true';

		audioContext = new AudioContext();
		startTime = Date.now();

		renderTaskId = setInterval(() => {
			requestAnimationFrame(render);
		}, 1000 / FRAMERATE);

		document.title = `BipBop! - ${FRAMERATE}fps - ${PLAYSOUND ? 'Sound On' : 'Sound Off'}`;
	});

	onDestroy(() => {
		clearInterval(renderTaskId);
	});
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div>
	<div id="time-elapsed" class="font-mono">
		<span> {elapsed.toFixed(3)}</span>
	</div>

	<div id="color-test">
		<div class="color-square" style="background-color: red;" />
		<div class="color-square" style="background-color: green;" />
		<div class="color-square" style="background-color: blue;" />
		<div class="color-square" style="background-color: black;" />
		<br />
		<div class="color-square" style="background-color: magenta;" />
		<div class="color-square" style="background-color: yellow;" />
		<div class="color-square" style="background-color: cyan;" />
		<div class="color-square" style="background-color: white;" />
		<br />
		<div class="color-square">
			<div class="vertical-stripes">
				<div class="stripe" />
				<div class="stripe" />
				<div class="stripe" />
			</div>
		</div>
		<div class="color-square">
			<div class="horizontal-stripes">
				<div class="stripe" />
				<div class="stripe" />
				<div class="stripe" />
			</div>
		</div>
		<div class="color-square">
			<div class="diagnal-stripes">
				<div class="stripe" />
				<div class="stripe" />
				<div class="stripe" />
			</div>
		</div>
		<div class="color-square">
			<div class="diagnal-stripes-2">
				<div class="stripe" />
				<div class="stripe" />
				<div class="stripe" />
			</div>
		</div>
	</div>

	<div
		id="time-circle"
		class:is-bipping={isBip}
		style="--progress: {((currentFrame % FRAMERATE) / FRAMERATE) * 100}%;"
	>
		<span id="bip">
			{#if isBip}
				Bip!
			{:else}
				Bop!
			{/if}
		</span>
	</div>
</div>

<style>
	:root {
		--bip-color: gray;
		--bop-color: white;
		--square-size: 6vw;
	}

	:global(body) {
		background-color: black;
	}

	#time-elapsed {
		position: absolute;
		top: 25vh;
		right: 55vw;
		transform: translateY(-50%);
		width: 30vw;
		overflow: hidden;
		color: white;
		text-align: center;
		font-size: 8rem;
	}

	#color-test {
		position: absolute;
		top: 40vh;
		right: 60vw;
		font-size: 0;
	}

	.color-square {
		display: inline-block;
		width: var(--square-size);
		height: var(--square-size);
		background-color: white;
		overflow: hidden;
	}

	.color-square .vertical-stripes {
		display: inline-flex;
		flex-direction: row;
		width: var(--square-size);
		height: var(--square-size);
	}

	.color-square .horizontal-stripes {
		display: inline-flex;
		flex-direction: column;
		width: var(--square-size);
		height: var(--square-size);
	}

	.color-square .diagnal-stripes {
		display: inline-flex;
		flex-direction: column;
		width: var(--square-size);
		height: var(--square-size);
		transform: translate(-1vw, -1vw) rotate(45deg);
	}

	.color-square .diagnal-stripes-2 {
		display: inline-flex;
		flex-direction: column;
		width: var(--square-size);
		height: var(--square-size);
		transform: translate(-20%, 20%) rotate(-45deg);
	}

	.color-square .stripe {
		flex: 0 0 calc(var(--square-size) / 10);
		margin: auto;
		width: calc(var(--square-size) * 2);
		height: calc(var(--square-size) * 2);
		background-color: black;
	}

	#time-circle {
		position: absolute;
		top: 40vh;
		right: 12vw;
		transform: translateY(-50%);
		width: 30vw;
		height: 30vw;
		border-radius: 100%;
		overflow: hidden;

		--main-color: var(--bip-color);
		--secondary-color: var(--bop-color);

		color: var(--main-color);
		background-image: conic-gradient(
			var(--main-color) var(--progress),
			var(--secondary-color) var(--progress)
		);
	}

	#time-circle.is-bipping {
		--main-color: var(--bop-color);
		--secondary-color: var(--bip-color);
	}

	#bip {
		position: absolute;
		display: block;
		top: 50%;
		left: 0;
		right: 0;
		text-align: center;
		font-size: 6rem;
	}
</style>
