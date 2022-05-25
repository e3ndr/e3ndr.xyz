<script>
    export let emojiProvider;

    let slotElement;
    let text;
    let content;

    function render() {
        if (typeof window == "undefined") {
            return;
        }

        if (emojiProvider == "system") {
            content = text;
            return;
        }

        fetch(`https://api.casterlabs.co/v3/emojis/detect?provider=${emojiProvider}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                responseFormat: "HTML"
            })
        })
            .then((response) => response.text())
            .then((formatted) => {
                content = formatted;
            });
    }

    $: slotElement, (text = slotElement?.innerText);

    // Rerender on emoji provider change
    $: emojiProvider, render();
    $: text, render();
</script>

<!-- Yoink the text value from svelte -->
<span bind:this={slotElement} style={content ? "display: none;" : ""}>
    <slot />
</span>

{#if content}
    {@html content}
{/if}
