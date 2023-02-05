<script>
	import "../app.css";
	import { fade } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import { navigating } from '$app/stores';

</script>

{#key $navigating}
	<div in:fade={{easing: circOut, duration: 650}}>
		<slot />
	</div>
{/key}

<style lang="postcss">
   :global(*) {
      margin: 0;
      padding: 0;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
   }

	:global(body) {
		background-color: #0f0f0f;
      scrollbar-width: none;

		--background-color: #272727;
	}
</style>