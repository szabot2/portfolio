<script>
	let L;
	let C;
	$: freki = 1 / (2 * Math.PI * Math.sqrt(L * C))
</script>

<main class="flex justify-center items-center">

<div class="text-primary">
	<h1 data-aos="fade-down" data-aos-delay="100" class="w-52 text-center font-semibold text-3xl mb-1">Frekiszámoló</h1>
	<div data-aos="fade-right" data-aos-delay="200" class="h-max w-max">
		<input class="transition-all duration-500 bg-secondaryContainer caret-tertiary text-onSecondaryContainer outline outline-outline w-52 text-center focus:outline-primary focus:placeholder:opacity-0 placeholder:text-center placeholder:text-secondary rounded-2xl my-2 p-3" type="number" placeholder="Induktivitás értéke" bind:value={L}><span data-aos="fade" data-aos-delay="500" class="ml-2 text-tertiary">μH</span>
	</div>
	<div data-aos="fade-left" data-aos-delay="200" class="h-max w-max">
		<input class="transition-all duration-500 bg-secondaryContainer caret-tertiary text-onSecondaryContainer outline outline-outline w-52 text-center focus:outline-primary focus:placeholder:opacity-0 placeholder:text-center placeholder:text-secondary rounded-2xl my-2 p-3" type="number" placeholder="Kapacitás értéke" bind:value={C}><span data-aos="fade" data-aos-delay="500" class="ml-2 text-tertiary">μF</span>
	</div>


	<div data-aos="fade-up" data-aos-delay="100" class="w-52 text-center font-semibold text-xl mt-1">
		{#key freki}
			<div data-aos="fade">
				{#if freki.toString().includes('Infinity')}
					<p>Add meg az értékeket!</p>
				{:else if freki}
					<p>{(freki * 1000000).toFixed(2)} Hz</p>
				{:else}
					<p>Add meg az értékeket!</p>
				{/if}
			</div>
		{/key}
	</div>

</div>

</main>