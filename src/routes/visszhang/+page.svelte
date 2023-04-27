<script>
	import Alkatresz from '$lib/components/Alkatresz.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<main>

	<Title title={'Velleman digitális visszhang generátor'} image={'multivibrator/multivibrator.webp'}></Title>

	<h2 class="text-secondary text-center mt-5 mb-3 font-semibold text-xl">Ellenállások</h2>
	<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
		<Alkatresz title={'10KΩ'} value={'R1-R4'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'100KΩ'} value={'R5-R7'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'1KΩ'} value={'R8'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'560Ω'} value={'R9'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'330Ω'} value={'R10'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'4K7Ω'} value={'R11-R15'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'3K3Ω'} value={'R16'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'2K7Ω'} value={'R17'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'10Ω'} value={'R18'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
	</div>

	<h2 class="text-secondary text-center my-3 font-semibold text-xl">Diódák</h2>
	<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
		<Alkatresz title={'5V1'} value={'ZD1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'1N4007'} value={'D1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
	</div>

	<h2 class="text-secondary text-center my-3 font-semibold text-xl">IC foglalatok</h2>
	<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
		<Alkatresz title={'16p'} value={'IC1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'8p'} value={'IC2-IC3'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
	</div>

	<h2 class="text-secondary text-center my-3 font-semibold text-xl">Kondenzátorok</h2>
	<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
		<Alkatresz title={'100nF'} value={'C1-C4'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'39pF'} value={'C5'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'560pF'} value={'C6'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'1nF'} value={'C7'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<Alkatresz title={'6.8nF'} value={'C8-C11'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
	</div>

</main>