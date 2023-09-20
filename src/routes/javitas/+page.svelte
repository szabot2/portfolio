
<script>
	import Alkatresz from '$lib/components/Alkatresz.svelte';
	import Title from '$lib/components/Title.svelte';
	import Leiras from '$lib/components/Leiras.svelte';
</script>

<main>

	<Title title={'Tanárúr pls javítsa ki az egyest'} image={'javitas/cat.jpg'}></Title>

	<h1 data-aos="fade-down" class="text-primary font-semibold text-3xl text-center">Az áramkör:</h1>
	<p data-aos="fade-down" class="text-primary font-semibold text-sm text-center">Katt a képre a falstad mentésért.</p>
	<a data-aos="fade-down" href="javitas/circuit-20230919-1505.circuitjs.txt" download>
		<img class="w-full mx-auto rounded-3xl lg:w-8/12 xl:w-7/12" src="javitas/kapcs.avif" alt="">
	</a>

	<h1 data-aos="fade-down" class="text-primary font-semibold text-3xl text-center mb-3 mt-5">Kiszámoltam az eredő ellenállást és feszültséget.</h1>
	<img data-aos="fade-down" class="w-full mx-auto rounded-3xl lg:w-8/12 xl:w-7/12" src="javitas/szamolas0.jpg" alt="">

	<h1 data-aos="fade-down" class="text-primary font-semibold text-3xl text-center mb-3 mt-5">Kiszámoltam a feszültségeket.</h1>
	<img data-aos="fade-down" class="w-full mx-auto rounded-3xl lg:w-8/12 xl:w-7/12" src="javitas/szamolas1.jpg" alt="">

	<h1 data-aos="fade-down" class="text-primary font-semibold text-3xl text-center mb-3 mt-5">Kiszámoltam az áramokat.</h1>
	<img data-aos="fade-down" class="w-full mx-auto rounded-3xl lg:w-8/12 xl:w-7/12" src="javitas/szamolas2.jpg" alt="">

	<h1 data-aos="fade-down" class="text-primary font-semibold text-3xl text-center mb-3 mt-5">És persze a teljesítményeket.</h1>
	<img data-aos="fade-down" class="w-full mx-auto rounded-3xl lg:w-8/12 xl:w-7/12" src="javitas/szamolas3.jpg" alt="">

	<h1 data-aos="fade-down" class="text-primary font-semibold text-3xl text-center mt-5">Hogy hogyan?</h1>

	<div class="mt-4">
		<h1 data-aos="fade-down" class="text-primary font-semibold text-lg text-center">Az áramkör ránézésre elég bonyolult.
			Átrajzoltam egy egyszerű 3 ellenállásból álló áramkörre.
		</h1>
		<p data-aos="fade-down" class="text-primary font-semibold text-sm text-center mt-2">Katt a képre a falstad mentésért.</p>
	</div>

	<a href="javitas/circuit-20230920-1855.circuitjs.txt" download>
		<img data-aos="fade-down" class="w-8/12 mx-auto rounded-3xl md:w-4/12 lg:w-2/12" src="javitas/kapcs1.avif" alt="">
	</a>

	<h1 data-aos="fade-down" class="text-primary font-semibold text-lg text-center mb-2">
		Így kitudtam számolni az eredő ellenállást, és a tápfeszültséget.
	</h1>

</main>