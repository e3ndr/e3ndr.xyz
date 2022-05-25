<script>
    import TextSnippet from "../components/TextSnippet.svelte";

    let emojiProvider = "noto-emoji";
</script>

<section id="introduction">
    <h1 class="title">
        <TextSnippet {emojiProvider}>Howdy, I'm Alex 🤠</TextSnippet>
    </h1>
</section>

<br />

<section id="aboutme">
    <p>I'm am 18 year old backend-focused full-stack developer with a passion for building the future of web and desktop applications.</p>
    <p>My current passion project is <a href="https://casterlabs.co" target="_blank">Casterlabs</a>, a StreamElements/Streamlabs like service. For that, I've built:</p>
    <ul>
        <li>
            <a href="https://github.com/Casterlabs/Sora" target="_blank">Sora</a>, a Java API framework for making super clean APIs.
        </li>
        <li>
            <a href="https://github.com/Casterlabs/Rakurai/tree/main/Json" target="_blank">Rson</a>, a Json library for Java, because Gson and Jackson were pissing me off.
        </li>
        <li>
            <a href="https://emoji.casterlabs.co" target="_blank">Emoji for everyone</a>, a handy-dandy helper (like Twemoji) that allows you to use different Emoji providers easily.
        </li>
        <li>
            <a href="https://github.com/Casterlabs/Kaimen" target="_blank">Kaimen</a>, a Java library for building desktop apps that use Webviews for their UI. Similar to Electron.
        </li>
    </ul>

    <br />

    <p>As you can probably tell, I'm well versed in Java (11 is preferred, but 8 just feels like home). When it comes to web development, I prefer the Svelte + custom Java API approach.</p>
    <p>I'm pretty handy with HTML + CSS, and wouldn't mind the occasional work, but I prefer the backend more than anything.</p>

    <br />

    <p>
        So, if you're interested in getting in touch, you can do so by emailing me at <a href="mailto:balexbowles@gmail.com">balexbowles@gmail.com</a>. If you're too hip for email you can always reach me on my <a href="https://twitter.com/ItzLcyx">Twitter</a>, or even pester me on Discord
        <span>
            (
            <pre>Ɇ₦ĐɆⱤV₳₥₱łⱤɆ#9092</pre>
            ).
        </span>
    </p>

    <br />
    <br />

    <span>
        This funny dropdown is silly and <span style="text-decoration: underline;">should</span> be messed with :^) &nbsp;
        <select bind:value={emojiProvider}>
            <option value="twemoji">Twemoji</option>
            <option value="noto-emoji">Noto Emoji</option>
            <option value="openmoji">Openmoji</option>
            <!-- <option value="sensa-emoji">Sensa Emoji</option> -->
        </select>
    </span>

    <br />
    <br />

    <span>
        <a href="https://twitter.com/ItzLcyx">Twitter</a> &bull;
        <a href="https://github.com/e3ndr">Github</a> &bull;
        <a href="https://instagram.com/ItzLcyx">Instagram</a> &bull;
        <a href="/ahegao.zip">"Profile Pictures"</a>
    </span>
</section>

<style>
    pre {
        display: inline-block;
        user-select: all;
    }

    #introduction {
        text-align: center;
        margin: 36px;
    }

    #introduction .title {
        margin: 0;
        font-family: "Smooch", cursive;
        font-size: 72px;
    }

    #introduction .title :global([data-type="emoji"]) {
        vertical-align: sub !important;
    }

    #aboutme {
        font-family: "Raleway", sans-serif;
        font-size: larger;
    }
</style>
