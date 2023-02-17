<script>
	let L;
	let C;
	$: freki = 1 / (2 * Math.PI * Math.sqrt(L * C))
	$: console.log(freki.toString())
</script>

<main class="flex justify-center items-center">

<div class="text-white">
	<h1 class="w-52 text-center font-semibold text-3xl mb-1">Frekiszámoló</h1>
	<input class="transition-all caret-amber-600 outline w-52 text-center bg-neutral-800 focus:outline-amber-600 focus:placeholder:text-transparent placeholder:text-center placeholder:text-neutral-500 text-white rounded-2xl my-2 p-3" type="number" placeholder="Induktivitás értéke" bind:value={L}><span class="ml-2">μH</span>
	<br>
	<input class="transition-all caret-amber-600 outline w-52 text-center bg-neutral-800 focus:outline-amber-600 focus:placeholder:text-transparent placeholder:text-center placeholder:text-neutral-500 text-white rounded-2xl my-2 p-3" type="number" placeholder="Kapacitás értéke" bind:value={C}><span class="ml-2">μH</span>

	<div class="w-52 text-center font-semibold text-xl mt-1">
		{#if freki.toString().includes('Infinity')}
			<p>Add meg az értékeket!</p>
		{:else if freki}
			<p>{(freki * 1000000).toFixed(2)} Hz</p>
		{:else}
			<p>Add meg az értékeket!</p>
		{/if}
	</div>
</div>

</main>