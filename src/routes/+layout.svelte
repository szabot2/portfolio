<script>
	import "../app.css";
	import { fade } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';

	// Theme színek localStorage-ból
	if (localStorage.getItem('theme')) {
		JSON.parse(localStorage.getItem('theme')).forEach(x => {
			document.documentElement.style.setProperty(`--${Object.keys(x)}`, x[Object.keys(x)])
		});
	}

</script>

<Navbar />
{#key $page.url.href}
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
		background-color: var(--background);
      scrollbar-width: none;

	}

	:global(main) {
		margin-top: 5rem;
		height: calc(100vh - 5rem);
	}
</style>