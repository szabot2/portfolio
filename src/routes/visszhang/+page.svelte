<script>
	import Alkatresz from '$lib/components/Alkatresz.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<main>

	<Title title={'Velleman digitális visszhang generátor'} image={'multivibrator/multivibrator.webp'}></Title>

	<h1 class="text-primary text-center my-3 mb-2 font-semibold text-2xl">Alkatrészek</h1>

	<div class="mb-5">
		<h2 class="text-secondary text-center mb-3 font-semibold text-lg">Ellenállások</h2>
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
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">Diódák</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'5V1'} value={'ZD1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'1N4007'} value={'D1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">IC foglalatok</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'16p'} value={'IC1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'8p'} value={'IC2-IC3'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">Kondenzátorok</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'100nF'} value={'C1-C4'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'39pF'} value={'C5'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'560pF'} value={'C6'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'1nF'} value={'C7'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'6.8nF'} value={'C8-C11'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'33nF'} value={'C12'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'47nF'} value={'C13'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">Kapcsoló</h2>
		<Alkatresz title={'on/off'} value={'SW1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">PCB Pinek</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'Power 2x'} value={'SK1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'Line out 2x'} value={'SK2'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'Speaker 2x'} value={'SK3'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'Line in 2x'} value={'SK4'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">Pin Fejek</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'Input selection'} value={'SK6'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'Output selection'} value={'SK5'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">Elektrolit Kondenzátorok</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'1μF'} value={'C14'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'10μF'} value={'C15-C20 | C22'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'47μF'} value={'C21'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'100μF'} value={'C23 | C24'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">Mikrofon</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'MIC1'} value={'MIC1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">Trimmer</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'22KΩ'} value={'RV1 | RV2'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'47KΩ'} value={'RV3'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'10KΩ'} value={'RV4'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">IC</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'HT8972'} value={'IC1'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'LM358'} value={'IC2'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'LM386'} value={'IC3'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
		<h2 class="text-secondary text-center my-3 font-semibold text-lg">Pin Jumper</h2>
		<div class="flex justify-center items-center flex-wrap gap-5 mx-5">
			<Alkatresz title={'Mikrofon'} value={'Line'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
			<Alkatresz title={'Line'} value={'Mikrofon'} image={'multivibrator/multivibrator.webp'}></Alkatresz>
		</div>
	</div>

</main>