<script lang="ts">
	const AUDIO_CHAPTERS = [
		{
			index: 1,
			start: 0.0,
			end: 2.24,
			duration: 2.24
		},
		{
			index: 2,
			start: 2.74,
			end: 8.281,
			duration: 5.541
		},
		{
			index: 3,
			start: 8.781,
			end: 10.993,
			duration: 2.212
		},
		{
			index: 4,
			start: 11.493,
			end: 13.695,
			duration: 2.202
		},
		{
			index: 5,
			start: 14.195,
			end: 15.894,
			duration: 1.699
		},
		{
			index: 6,
			start: 16.394,
			end: 18.891,
			duration: 2.497
		},
		{
			index: 7,
			start: 19.391,
			end: 57.433,
			duration: 38.042
		},
		{
			index: 8,
			start: 57.933,
			end: 74.561,
			duration: 16.628
		},
		{
			index: 9,
			start: 75.061,
			end: 83.572,
			duration: 8.511
		},
		{
			index: 10,
			start: 84.072,
			end: 86.495,
			duration: 2.423
		},
		{
			index: 11,
			start: 86.995,
			end: 109.939,
			duration: 22.944
		},
		{
			index: 12,
			start: 110.439,
			end: 113.02,
			duration: 2.581
		},
		{
			index: 13,
			start: 113.52,
			end: 125.072,
			duration: 11.552
		},
		{
			index: 14,
			start: 125.572,
			end: 143.81,
			duration: 18.238
		},
		{
			index: 15,
			start: 144.31,
			end: 150.879,
			duration: 6.569
		},
		{
			index: 16,
			start: 151.379,
			end: 166.439,
			duration: 15.061
		},
		{
			index: 17,
			start: 166.939,
			end: 169.222,
			duration: 2.283
		},
		{
			index: 18,
			start: 169.722,
			end: 177.677,
			duration: 7.955
		},
		{
			index: 19,
			start: 178.177,
			end: 182.443,
			duration: 4.266
		},
		{
			index: 20,
			start: 182.943,
			end: 189.096,
			duration: 6.153
		},
		{
			index: 21,
			start: 189.596,
			end: 192.413,
			duration: 2.817
		},
		{
			index: 22,
			start: 192.913,
			end: 195.441,
			duration: 2.528
		},
		{
			index: 23,
			start: 195.941,
			end: 200.484,
			duration: 4.543
		},
		{
			index: 24,
			start: 200.984,
			end: 204.11,
			duration: 3.125
		},
		{
			index: 25,
			start: 204.61,
			end: 207.438,
			duration: 2.828
		},
		{
			index: 26,
			start: 207.938,
			end: 211.394,
			duration: 3.456
		},
		{
			index: 27,
			start: 211.894,
			end: 234.292,
			duration: 22.398
		},
		{
			index: 28,
			start: 234.792,
			end: 254.833,
			duration: 20.041
		},
		{
			index: 29,
			start: 255.333,
			end: 257.36,
			duration: 2.027
		},
		{
			index: 30,
			start: 257.86,
			end: 269.645,
			duration: 11.785
		},
		{
			index: 31,
			start: 270.145,
			end: 280.864,
			duration: 10.719
		},
		{
			index: 32,
			start: 281.364,
			end: 297.672,
			duration: 16.308
		},
		{
			index: 33,
			start: 298.172,
			end: 306.032,
			duration: 7.86
		},
		{
			index: 34,
			start: 306.532,
			end: 308.226,
			duration: 1.694
		},
		{
			index: 35,
			start: 308.726,
			end: 332.877,
			duration: 24.151
		},
		{
			index: 36,
			start: 333.377,
			end: 343.53,
			duration: 10.153
		},
		{
			index: 37,
			start: 344.03,
			end: 380.266,
			duration: 36.236
		},
		{
			index: 38,
			start: 380.766,
			end: 423.004,
			duration: 42.238
		},
		{
			index: 39,
			start: 423.504,
			end: 429.786,
			duration: 6.283
		},
		{
			index: 40,
			start: 430.286,
			end: 431.737,
			duration: 1.451
		},
		{
			index: 41,
			start: 432.237,
			end: 454.571,
			duration: 22.334
		},
		{
			index: 42,
			start: 455.071,
			end: 475.432,
			duration: 20.361
		},
		{
			index: 43,
			start: 475.932,
			end: 489.103,
			duration: 13.171
		},
		{
			index: 44,
			start: 489.603,
			end: 504.856,
			duration: 15.253
		},
		{
			index: 45,
			start: 505.356,
			end: 529.375,
			duration: 24.019
		},
		{
			index: 46,
			start: 529.875,
			end: 532.051,
			duration: 2.176
		},
		{
			index: 47,
			start: 532.551,
			end: 549.243,
			duration: 16.692
		},
		{
			index: 48,
			start: 549.743,
			end: 576.739,
			duration: 26.996
		},
		{
			index: 49,
			start: 577.239,
			end: 579.82,
			duration: 2.581
		},
		{
			index: 50,
			start: 580.32,
			end: 592.394,
			duration: 12.074
		},
		{
			index: 51,
			start: 592.894,
			end: 594.388,
			duration: 1.493
		},
		{
			index: 52,
			start: 594.888,
			end: 602.418,
			duration: 7.53
		},
		{
			index: 53,
			start: 602.918,
			end: 603.686,
			duration: 0.768
		},
		{
			index: 54,
			start: 604.186,
			end: 619.972,
			duration: 15.786
		},
		{
			index: 55,
			start: 620.472,
			end: 632.93,
			duration: 12.458
		},
		{
			index: 56,
			start: 633.43,
			end: 646.954,
			duration: 13.525
		},
		{
			index: 57,
			start: 647.454,
			end: 668.53,
			duration: 21.075
		},
		{
			index: 58,
			start: 669.03,
			end: 670.267,
			duration: 1.237
		},
		{
			index: 59,
			start: 670.767,
			end: 678.638,
			duration: 7.871
		},
		{
			index: 60,
			start: 679.138,
			end: 686.593,
			duration: 7.455
		},
		{
			index: 61,
			start: 687.093,
			end: 710.282,
			duration: 23.189
		},
		{
			index: 62,
			start: 710.782,
			end: 721.832,
			duration: 11.05
		},
		{
			index: 63,
			start: 722.332,
			end: 724.636,
			duration: 2.304
		},
		{
			index: 64,
			start: 725.136,
			end: 744.015,
			duration: 18.879
		},
		{
			index: 65,
			start: 744.515,
			end: 759.92,
			duration: 15.405
		},
		{
			index: 66,
			start: 760.42,
			end: 768.377,
			duration: 7.957
		},
		{
			index: 67,
			start: 768.877,
			end: 782.305,
			duration: 13.428
		},
		{
			index: 68,
			start: 782.805,
			end: 795.348,
			duration: 12.543
		},
		{
			index: 69,
			start: 795.848,
			end: 798.408,
			duration: 2.56
		},
		{
			index: 70,
			start: 798.908,
			end: 824.069,
			duration: 25.161
		},
		{
			index: 71,
			start: 824.569,
			end: 828.461,
			duration: 3.892
		},
		{
			index: 72,
			start: 828.961,
			end: 850.357,
			duration: 21.395
		},
		{
			index: 73,
			start: 850.857,
			end: 869.022,
			duration: 18.165
		},
		{
			index: 74,
			start: 869.522,
			end: 880.921,
			duration: 11.399
		},
		{
			index: 75,
			start: 881.421,
			end: 883.746,
			duration: 2.325
		},
		{
			index: 76,
			start: 884.246,
			end: 900.763,
			duration: 16.517
		},
		{
			index: 77,
			start: 901.263,
			end: 915.626,
			duration: 14.363
		},
		{
			index: 78,
			start: 916.126,
			end: 920.904,
			duration: 4.778
		},
		{
			index: 79,
			start: 921.404,
			end: 945.978,
			duration: 24.574
		},
		{
			index: 80,
			start: 946.478,
			end: 955.985,
			duration: 9.507
		},
		{
			index: 81,
			start: 956.485,
			end: 968.387,
			duration: 11.902
		},
		{
			index: 82,
			start: 968.887,
			end: 971.296,
			duration: 2.409
		},
		{
			index: 83,
			start: 971.796,
			end: 972.584,
			duration: 0.788
		},
		{
			index: 84,
			start: 973.084,
			end: 985.094,
			duration: 12.01
		},
		{
			index: 85,
			start: 985.594,
			end: 1000.548,
			duration: 14.954
		},
		{
			index: 86,
			start: 1001.048,
			end: 1023.904,
			duration: 22.856
		},
		{
			index: 87,
			start: 1024.404,
			end: 1038.706,
			duration: 14.303
		},
		{
			index: 88,
			start: 1039.206,
			end: 1044.613,
			duration: 5.407
		},
		{
			index: 89,
			start: 1045.113,
			end: 1066.901,
			duration: 21.788
		},
		{
			index: 90,
			start: 1067.401,
			end: 1081.49,
			duration: 14.089
		},
		{
			index: 91,
			start: 1081.99,
			end: 1097.371,
			duration: 15.381
		},
		{
			index: 92,
			start: 1097.871,
			end: 1117.332,
			duration: 19.461
		},
		{
			index: 93,
			start: 1117.832,
			end: 1137.98,
			duration: 20.148
		}
	];

	let currentVoiceElement: HTMLElement | null = $state(null);

	function handleTimeUpdate(event: Event) {
		const time = (event.currentTarget as HTMLAudioElement).currentTime;
		const chapter = AUDIO_CHAPTERS.find((c) => time >= c.start && time < c.end);
		if (!chapter) return;

		const foundVoiceElement = document.querySelector(
			`[data-voice-index="${chapter.index}"]`
		) as HTMLElement;
		if (foundVoiceElement == currentVoiceElement) return; // Don't move the blip.
		currentVoiceElement = foundVoiceElement;
	}
</script>

<svelte:head>
	<title>Beating Small LLMs Into Submission | e3ndr.xyz</title>
</svelte:head>

<article class="relative mx-auto max-w-3xl space-y-8 px-4 py-8 text-gray-11">
	{#if currentVoiceElement}
		{@const middleY =
			currentVoiceElement.offsetTop + currentVoiceElement.getBoundingClientRect().height / 2 - 4}

		<div
			class="absolute top-0 -left-4 h-2 w-2 rounded-full bg-gray-12 transition-transform duration-300 ease-in-out"
			style:transform="translateY({middleY}px)"
		></div>
	{/if}

	<header class="space-y-4">
		<h1 class="text-4xl font-semibold tracking-tight text-gray-12" data-voice-index="1">
			Beating Small LLMs Into Submission
		</h1>

		<p class="text-xl text-gray-10 italic" data-voice-index="2">
			...or: a state machine and a 27B model that learned to read its own notes.
		</p>

		<blockquote class="mt-6 border-l-2 border-gray-8 pl-4 text-gray-12">
			<p data-voice-index="3">&gt; "Mom, can we get a frontier model?"</p>
			<p data-voice-index="4">&gt; "We already have a frontier model at home."</p>
			<p data-voice-index="5">
				&gt; <a
					href="https://huggingface.co/Qwen/Qwen3.8-27B"
					target="_blank"
					rel="noreferrer"
					class="hover:text-gray-11"
				>
					The frontier model at home.
				</a>
			</p>
		</blockquote>

		<audio class="mt-8" controls ontimeupdate={handleTimeUpdate}>
			<source src="/blog/2026-09-07/article.mp3" type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
	</header>

	<p data-voice-index="6">Small models suck. Except when they don't.</p>

	<p data-voice-index="7">
		That's the funny thing I've discovered while beating the shit out of Qwen3.8-27B: small models
		are actually pretty good at following instructions. And if a model is good at following
		instructions, then maybe the problem isn't that the model sucks, but rather the problem is that
		we haven't given it good instructions. With the release of Qwen3.8-27B, the homelab crowd has
		been frothing at the mouth because, for the first time, we've gotten a genuine slice of the
		frontier without needing to spend a million dollars on the VRAM required to run the frontier,
		and I've been working to make it
		<em>better</em>.
	</p>

	<p data-voice-index="8">
		Don't get me wrong, twenty-seven billion parameters is still a very large model. But compared to
		the models that normally get called "frontier," it's tiny. It is something an enthusiast can
		actually run at home, on hardware that doesn't require a venture capital round.
	</p>

	<p data-voice-index="9">
		So I started wondering: <strong
			>What happens when you take a model that is good at following instructions and give it a
			written state machine to execute?</strong
		>
	</p>

	<p data-voice-index="10">Well, it turns out only good things happen.</p>

	<p data-voice-index="11">
		What follows is a series of increasingly weird experiments where I kept modifying the harness,
		the prompt, and the model's persistent state. The model kept modifying its own behavior in
		response. In retrospect, these ideas were already obvious to anyone who had spent enough time
		fine tuning their agents to behave, but seeing it in action with a small model was enlightening.
	</p>

	<h2 class="mt-8 text-3xl text-gray-12" data-voice-index="12">
		Experiment One: Make It Write Its Own Prompt
	</h2>

	<p data-voice-index="13">
		I started with a prompt that was hand-modified from OpenClaw. It was decent but was not nearly
		strong enough to allow this model to hold up against the frontier models the prompt was written
		for.
	</p>

	<p data-voice-index="14">
		The problem wasn't that the model couldn't understand what I wanted. The problem was that the
		prompt was mostly a collection of instructions and behavioral suggestions. The model would
		follow them most of the time, but "most of the time" is not particularly useful when you're
		trying to run an agent for hours.
	</p>

	<p data-voice-index="15">
		So I gave the model a slightly cursed job: <strong
			>Rewrite your own prompt. Make it harder for yourself to fuck up.</strong
		>
	</p>

	<p data-voice-index="16">
		After a few iterations, it produced something that was substantially more rigid than what I
		started with. It stopped looking like a quirky personality prompt and started looking like an
		engineer's blueprint, and the resulting bootstrap is basically a state machine.
	</p>

	<p data-voice-index="17">First, there is an initialization state:</p>

	<pre class="overflow-x-auto rounded-md bg-gray-3 p-4 text-sm text-gray-12"><code
			>BOOT
  |
  v
READ SOUL
  |
  v
READ LONGTERMMEMORY
  |
  v
READ TOOLING
  |
  v
READ WORKPLAN
  |
  v
READ TODAY'S MEMORY
  |
  v
READ YESTERDAY'S SUMMARY
  |
  v
CHECK ONE-SHOT PROTOCOLS
  |
  v
WORKING</code
		></pre>

	<p data-voice-index="18">
		And importantly, it explicitly forbids doing anything before that sequence completes. Not "you
		should probably read these files."
	</p>

	<blockquote class="border-l-2 border-gray-8 pl-4 text-gray-10">
		<p data-voice-index="19">"Acting before this sequence completes = acting blind. Forbidden."</p>
	</blockquote>

	<p data-voice-index="20">
		The model also started treating persistent state as actual state rather than as a collection of
		notes.
	</p>

	<ul class="list-disc space-y-2 pl-6">
		<li data-voice-index="21">If it learns something durable, it writes it down.</li>
		<li data-voice-index="22">If it makes a mistake, it writes it down.</li>
		<li data-voice-index="23">
			If it changes the plan, it writes the plan down before acting on the change.
		</li>
		<li data-voice-index="24">If it becomes blocked, the block goes into the workplan.</li>
		<li data-voice-index="25">If the task finishes, the workplan gets cleared.</li>
	</ul>

	<p data-voice-index="26">Even the final response has a verification state machine:</p>

	<pre class="overflow-x-auto rounded-md bg-gray-3 p-4 text-sm text-gray-12"><code
			>Before replying:

  one-shots checked?
       |
       v
  memory written?
       |
       v
  no fabricated claims?
       |
       v
  filler removed?
       |
       v
  delivery path valid?
       |
       v
  state truthful?
       |
       v
     SEND</code
		></pre>

	<p data-voice-index="27">
		The prompt had effectively stopped being a prompt, it had morphed into boolean logic written in
		plain English. And that was the experiment. I wanted to know whether a relatively small model
		could execute a sufficiently explicit behavioral protocol reliably, even when the protocol
		became more complicated than the model's raw reasoning ability might suggest it should be able
		to manage.
	</p>

	<p data-voice-index="28">
		The answer, at least so far, appears to be yes. And that led to the rest of the experiments.
		Because once I realized that the model was pretty damn good at executing instructions, I started
		asking a different question: <strong
			>What happens if I stop trying to make the model smarter and instead make the instructions,
			state, and environment smarter?</strong
		>
	</p>

	<h2 class="mt-8 text-3xl text-gray-12" data-voice-index="29">Experiment Two: Stop Yapping</h2>

	<p data-voice-index="30">
		The next problem was context. During long-running tasks, the model was getting compacted two or
		three times an hour. I dug into the transcripts and found the culprit: <strong
			>This model fucking yaps.</strong
		>
	</p>

	<p data-voice-index="31">
		It yaps so much that its reasoning chain was often three or four times longer than the actual
		content it produced. So I had another idea: <strong
			>What happens if you remove the model's thoughts?</strong
		>
	</p>

	<p data-voice-index="32">
		The answer was: nothing good. It would lose the plot and start making decisions that made sense
		locally but had nothing to do with the larger objective. Even retaining the previous twenty
		reasoning chains wasn't enough to reliably steer it back onto the original path.
	</p>

	<p data-voice-index="33">
		I'd basically chopped off its prefrontal cortex, but there was one important property this model
		still had: <strong>It follows instructions.</strong>
	</p>

	<h3 class="mt-6 text-2xl text-gray-12" data-voice-index="34">Write it down, and then do it</h3>

	<p data-voice-index="35">
		<code>WORKPLAN.md</code> is explicitly defined as the
		<strong>externalized first thinking block</strong>. The model's first meaningful thought about a
		task gets written to disk. That means the thing that would normally disappear when the reasoning
		chain is pruned becomes an artifact that survives. I wrote out the basic structure of the
		mechanism, and the model built the state machine around it and codified the rules for
		interacting with it.
	</p>

	<p data-voice-index="36">
		Now, before starting any meaningful work, it had to write out a detailed workplan to a file.
		<strong>This increased the initial token churn by about 30%.</strong>
	</p>

	<p data-voice-index="37">
		I didn't care. The important part wasn't the extra tokens. It was that the <code
			>file_write</code
		>
		tool call itself remained in context. A few turns later, the reasoning chain would get pruned. The
		model no longer had any idea <em>why</em> it had performed the action, but it could still see that
		it had written down what it was doing. Even with only the most recent five reasoning chains in context,
		it could reliably reconstruct its own trajectory. And the best part was that this reduced overall
		context window usage after a few turns because all of the yap had been consolidated into a concise
		summary.
	</p>

	<p data-voice-index="38">
		The result was bizarrely effective. It went from getting compacted two or three times an hour to
		getting compacted once or twice every <strong>two hours</strong>, despite the model actually
		doing more work during those periods. And this wasn't bullshit churn. It was actual work moving
		toward the goal it had written down. The model had effectively externalized part of its working
		memory into a file, and because the action that created that state remained visible in the
		context, the model could repeatedly rediscover its own trajectory after losing the reasoning
		that originally produced it. And even better, compactions no longer caused it to lose its
		trajectory through the task, because it always had the workplan as a reference.
	</p>

	<p data-voice-index="39">
		I hadn't made the model smarter. I'd just given it somewhere to put its brain so I could remove
		all of the yap.
	</p>

	<h3 class="mt-6 text-2xl text-gray-12" data-voice-index="40">Practice Makes Perfect</h3>

	<p data-voice-index="41">
		LLMs are merely next-token predictors. They use the context they've been given as the substrate
		from which they predict what comes next. So if I rewrite the bootstrap prompt to make certain
		actions happen immediately, those actions become part of the context. And once the model
		performs them a few times, it starts to behave as though those actions are simply what it does.
	</p>

	<p data-voice-index="42">
		The important part is what happens during initial boot. The model has no prior context to rely
		on, so it is highly susceptible to context rot. If the temperature causes it to decide that
		something isn't worth writing down early in the conversation, there's a good chance that it will
		continue deciding that it isn't worth writing down later.
	</p>

	<p data-voice-index="43">
		Then, two hundred thousand tokens later, it compacts. And suddenly the model has no idea what it
		was doing before. It lost its running list of what it was supposed to be keeping track of, and
		the whole thing unravels.
	</p>

	<p data-voice-index="44">
		So I changed the bootstrap. Instead of merely telling it that it should write things down, I
		made it actually write things down within the first few turns as non-negotiable actions. The
		result was that it effectively developed a habit: <strong>Write everything down.</strong>
	</p>

	<p data-voice-index="45">
		With no other meaningful changes to the prompt, the model went from occasionally missing key
		actions to performing them consistently. The strange part is that nothing magical happened, I
		just made the desired behavior happen early enough that it became part of the model's ongoing
		context. Practice makes perfect, except the "practice" is just a few tool calls at the beginning
		of a context window.
	</p>

	<h2 class="mt-8 text-3xl text-gray-12" data-voice-index="46">
		Experiment Three: Make Your Own Tools
	</h2>

	<p data-voice-index="47">
		Next problem: the model was using a lot of shell commands to accomplish things that really
		should have been tools. So I added custom tools to the harness. They're extremely basic: You
		specify an executable, and the tool arguments get passed to it as environment variables.
	</p>

	<p data-voice-index="48">
		Then I let the model design some. The model identified several things it thought were "a real
		gap on the harness" and designed tools to fill them. Now, instead of repeatedly brute-forcing a
		shell command whenever it needed to do something, it had a dedicated tool for the operation. It
		didn't have to rediscover the magical shell incantation every time, it just called the tool that
		it wrote itself and treated it like a blackbox with a well-defined interface.
	</p>

	<h2 class="mt-8 text-3xl text-gray-12" data-voice-index="49">
		Experiment Four: Stop Making Mistakes
	</h2>

	<p data-voice-index="50">
		To be fair, the model was already pretty good about recording its mistakes in <code
			>LONGTERMMEMORY.md</code
		>. The problem was that it kept making them anyway. During this round of triage, I discovered
		two things.
	</p>

	<h3 class="mt-6 text-2xl text-gray-12" data-voice-index="51">Fear Is the Mind Killer</h3>

	<p data-voice-index="52">
		I told it that it had to tell me every time it made the same mistake consecutively. That
		dramatically reduced the error rate.
	</p>

	<p data-voice-index="53">Why?</p>

	<p data-voice-index="54">
		Because the model had already written down that mistakes weren't acceptable. This was basically
		the equivalent of telling it "make no mistakes," except the model had arrived at that conclusion
		itself. There was an arbitrary failure threshold: three failures per week.
	</p>

	<p data-voice-index="55">
		So the model would make a mistake, realize it was approaching the threshold, and then very
		carefully reason about how to avoid making the mistake again. Then it would write that down in
		its daily
		<code>MEMORY.md</code>.
	</p>

	<p data-voice-index="56">
		And that created another useful feedback loop. The tool call that wrote the lesson remained in
		context. Compaction could see the note in the daily log. The model could see that it had
		previously identified the failure mode.
	</p>

	<p data-voice-index="57">
		So it started treading lightly. Sometimes it would spend several reasoning passes explicitly
		checking how it could avoid repeating the mistake before continuing. Then it would write the
		result down. The model wasn't being trained, nothing about its weights changed. But its behavior
		was becoming increasingly constrained by the history it had accumulated.
	</p>

	<h3 class="mt-6 text-2xl text-gray-12" data-voice-index="58">Tokens Matter</h3>

	<p data-voice-index="59">
		One particularly persistent error was the model writing <code>content</code> instead of
		<code>contents</code> when calling my file-writing tools.
	</p>

	<p data-voice-index="60">
		It kept doing it. So I looked at the tokenizer, and there it was: <code>contents</code> is
		actually two tokens: <code>content</code> + <code>s</code>
	</p>

	<p data-voice-index="61">
		A single fucking token was enough to repeatedly thrash its context. So I renamed the parameter
		and the model stopped making the mistake. I found several other cases where tool names, argument
		names, or descriptions had similarly stupid tokenization. Some descriptions were also
		significantly longer than they needed to be. I rewrote them and the error rate kept dropping.
	</p>

	<p data-voice-index="62">
		This was probably the most humbling experiment of the entire thing. Sometimes the model wasn't
		confused, it wasn't making bad decisions, I had simply made it harder to do its job.
	</p>

	<h2 class="mt-8 text-3xl text-gray-12" data-voice-index="63">Experiment Five: The User Is God</h2>

	<p data-voice-index="64">
		There's a problem with most LLM chat interfaces: the user doesn't really get to interrupt the
		model. You send a message, the model thinks, the model calls tools, the model thinks some more,
		and maybe after an hour it finishes and you are finally allowed to talk to it again. Only then
		do you get to say "oh, never mind."
	</p>

	<p data-voice-index="65">
		For an autonomous agent, that's pretty fucking useless. So I changed my harness to drain queued
		user messages at the tool-call boundary, that means that while the model is working, there's
		only a short gap between a message being sent and the model seeing it.
	</p>

	<p data-voice-index="66">
		And because models are trained to treat the user's message as an actionable request, something
		remarkable happens: <strong>It just complies.</strong>
	</p>

	<p data-voice-index="67">
		If I send it on its merry way and then change my mind about some detail, it reasons about the
		new message and rewrites its workplan to accommodate the change. If I say "oh, never mind," it
		pretty much stops.
	</p>

	<p data-voice-index="68">
		This was a face-palm moment for me. The model doesn't need some complicated cancellation
		protocol or special tools to drain queued user messages; it just needs to be allowed to see the
		fucking message.
	</p>

	<h2 class="mt-8 text-3xl text-gray-12" data-voice-index="69">
		Experiment Six: Learn to Multitask
	</h2>

	<p data-voice-index="70">
		Then I had it write its own Discord integration. Now several people can talk to it at once, and
		because the user is God, it has to make all of them happy while still reasoning about the
		<em>source</em> of each message. The model gave itself more rules, it explicitly acknowledged that
		a Discord-sourced message isn't necessarily from the same person, and suddenly it could talk to several
		people at once within the same context window.
	</p>

	<p data-voice-index="71">
		But something else happened by accident: <strong>It learned to multitask.</strong>
	</p>

	<p data-voice-index="72">
		When several people are asking for different things, the model starts working on two tasks in
		parallel (well, about as parallel as a linear token predictor can get) and then reasoning about
		the results individually within the same turn. This is reinforced by the workplan system as it
		tracks the status of each request within the same unified plan file.
	</p>

	<p data-voice-index="73">
		And because the model only has a limited window into its own reasoning chain, that separation of
		concerns becomes increasingly useful. It can look at the workplan, see that there are three
		independent things happening, and continue each one without having to remember the entire
		reasoning chain that created them.
	</p>

	<p data-voice-index="74">
		Again, I didn't train it to multitask, I only gave it a structure that made multitasking easy to
		express. Then I told it to follow the structure, and lo and behold: <strong>it did.</strong>
	</p>

	<h2 class="mt-8 text-3xl text-gray-12" data-voice-index="75">
		Experiment Seven: We Are Not the Same
	</h2>

	<p data-voice-index="76">
		This one was simpler. The model has a personality, it has a name, but it is still a machine. I
		told the model to rewrite its own prompt to get rid of the cutesy "I am a human!!1!" roleplay
		slop and replace it with something much closer to: <strong>I am fallible. I do work.</strong>
	</p>

	<p data-voice-index="77">
		That change has had surprisingly good results. It no longer churns out tokens trying to behave
		like a person, it just gets to the point. Everything it does is framed through a much simpler
		lens:
		<strong>I either do work, or I do nothing.</strong>
	</p>

	<p data-voice-index="78">
		The robot knows that it's a robot, and it stops caring about pretending otherwise.
	</p>

	<p data-voice-index="79">
		There is another important detail here. The leash is long, but it is still tied down. This isn't
		some free-roaming agent with the keys to the kingdom, the agent has scoped access. It is
		explicitly told that it isn't allowed to touch things outside those scopes, and those
		restrictions are enforced mechanically. If it wants something outside its permissions, it has to
		ask me. And if it tries anyway, it gets an error message.
	</p>

	<p data-voice-index="80">
		And, unsurprisingly, that becomes another instruction the model follows: <strong
			>Stay in your lane. Ask the human. Don't touch things you aren't allowed to touch.</strong
		>
	</p>

	<p data-voice-index="81">
		The model doesn't need to understand <em>why</em> the restriction exists, it just needs to consistently
		observe that the environment enforces it. And that brings me to the actual conclusion of all of this.
	</p>

	<h2 class="mt-8 text-3xl text-gray-12" data-voice-index="82">
		So, Did I Make a Small Model Smart?
	</h2>

	<p data-voice-index="83">No.</p>

	<p data-voice-index="84">
		I didn't retrain Qwen. I didn't fine-tune it. I didn't give it a larger context window or bolt
		another fifty billion parameters onto it. I gave it a fucking notebook and a list of rules.
	</p>

	<p data-voice-index="85">
		And eventually, it started behaving like a surprisingly competent agent. That's the part I find
		interesting. The model didn't suddenly become more intelligent. Its weights never changed. But
		the
		<em>system</em> around the model changed dramatically.
	</p>

	<p data-voice-index="86">
		The context window is a terrible place to store state. Reasoning gets pruned. Conversations get
		compacted. Important details disappear. The model's own thoughts are transient by design. So I
		told it to write everything down. The workplan became working memory, the daily log became
		episodic memory, and the long-term memory became durable knowledge.
	</p>

	<p data-voice-index="87">
		The harness became the thing that enforced boundaries the model couldn't reliably enforce
		itself. The model sits in the middle of this network of rules, tools, and memory structures.
		Just making decisions and following the protocol.
	</p>

	<p data-voice-index="88">
		That distinction matters because some of the failures were just as instructive as the successes.
	</p>

	<p data-voice-index="89">
		One time, I left it running overnight. Every unwatched turn did the actual work. The artifact
		writes happened, and the task progressed. And not a single one wrote the daily memory file. The
		protocol worked exactly where I was watching it and stopped working where I wasn't. That's a
		pretty fucking good demonstration of why "the prompt says so" isn't enough.
	</p>

	<p data-voice-index="90">
		The solution wasn't to yell harder at the model, it was to add verification. Now the protocol
		has rules for detecting its own failures. If enough misses accumulate, the model is required to
		tell me that the gate isn't holding.
	</p>

	<p data-voice-index="91">
		That's the part that I think gets missed when people talk about "agentic" systems. The useful
		thing isn't that the model can follow a hundred instructions, it's that the instructions can
		describe a system that <strong>observes whether it is following the instructions</strong>.
	</p>

	<p data-voice-index="92">
		And the really cool part is that the system doesn't have to stay static. I gave the model
		mechanisms for identifying failures and amending its own operating rules, and it started using
		them. The model isn't changing its weights. It's changing the rules that it has to follow,
		effectively making itself smarter in the process.
	</p>

	<p data-voice-index="93">
		So no, I didn't make a small model smart. I made the model's environment increasingly difficult
		to be stupid inside, and it turns out that is a surprisingly powerful thing to do. And
		apparently, once you give the model enough rules, it can start manufacturing improvements to
		those rules that make it even harder for the model to be stupid.
	</p>
</article>
