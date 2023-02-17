<script>
	import "../app.css";
	import { fade } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import { navigating } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';

</script>
<Navbar />
{#key $navigating}
	<div in:fade={{easing: circOut, duration: 650}}>
		<slot />
	</div>
{/key}

<style lang="postcss">
   :global(*) {
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
   }

	:global(body) {
		background-color: rgb(15, 15, 15);
      scrollbar-width: none;

		--background-color: rgb(28, 28, 28);
	}

	:global(main) {
		margin-top: 5rem;
		height: calc(100vh - 5rem);
	}
</style>