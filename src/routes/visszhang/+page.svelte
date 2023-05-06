<script>
	import Alkatresz from '$lib/components/Alkatresz.svelte';
	import Title from '$lib/components/Title.svelte';
	import Leiras from '$lib/components/Leiras.svelte';
</script>

<main>

	<Title title={'Velleman digitális visszhang generátor'} image={'visszhang/aramkor.webp'}></Title>

	<div data-aos="fade-down">
		<Leiras leiras='Visszhangot generál az áramkör ha belebeszélünk a Mikrofonba.'></Leiras>
	</div>

	<div class="mb-5">
		<div class="flex flex-wrap justify-center items-center gap-5 md:gap-8">

			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Ellenállások</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'10KΩ'} value={'R1-R4'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'100KΩ'} value={'R5-R7'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'1KΩ'} value={'R8'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'560Ω'} value={'R9'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'330Ω'} value={'R10'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'4K7Ω'} value={'R11-R15'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'3K3Ω'} value={'R16'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'2K7Ω'} value={'R17'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'10Ω'} value={'R18'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Kondenzátorok</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'100nF'} value={'C1-C4'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'39pF'} value={'C5'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'560pF'} value={'C6'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'1nF'} value={'C7'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'6.8nF'} value={'C8-C11'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'33nF'} value={'C12'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'47nF'} value={'C13'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>

			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Diódák</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'5V1'} value={'ZD1'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'1N4007'} value={'D1'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">IC foglalatok</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'16p'} value={'IC1'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'8p'} value={'IC2-IC3'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
	
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Kapcsoló</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'on/off'} value={'SW1'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">PCB Pinek</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'Power 2x'} value={'SK1'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'Line out 2x'} value={'SK2'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'Speaker 2x'} value={'SK3'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'Line in 2x'} value={'SK4'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
	
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Pin Fejek</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'Input selection'} value={'SK6'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'Output selection'} value={'SK5'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Elektrolit Kondenzátorok</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'1μF'} value={'C14'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'10μF'} value={'C15-C20 | C22'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'47μF'} value={'C21'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'100μF'} value={'C23 | C24'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
	
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Mikrofon</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'MIC1'} value={'MIC1'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Trimmer</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'22KΩ'} value={'RV1 | RV2'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'47KΩ'} value={'RV3'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'10KΩ'} value={'RV4'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
	
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">IC</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'HT8972'} value={'IC1'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'LM358'} value={'IC2'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'LM386'} value={'IC3'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>
			<div>
				<h2 data-aos="fade-down" class="text-secondary text-center mb-3 font-semibold text-lg">Pin Jumper</h2>
				<div data-aos="fade-down" class="flex justify-center items-center flex-wrap gap-5 rounded-3xl p-2 py-5 md:py-2 outline outline-1 outline-outline">
					<Alkatresz title={'Mikrofon'} value={'Line'} image={'visszhang/5.webp'}></Alkatresz>
					<Alkatresz title={'Line'} value={'Mikrofon'} image={'visszhang/5.webp'}></Alkatresz>
				</div>
			</div>

		</div>
	</div>

</main>