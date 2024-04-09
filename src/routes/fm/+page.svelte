<script>
	import Alkatresz from '$lib/components/Alkatresz.svelte';
	import Title from '$lib/components/Title.svelte';
	import Leiras from '$lib/components/Leiras.svelte';
</script>

<main>

	<Title title={'Primitív Frekvencia Modulációs Rádió'} image={'/fm/fm2.webp'}></Title>

	<h1 data-aos="fade-down" class="text-primary font-semibold text-3xl text-center">Az áramkör:</h1>
	<img data-aos="fade-down" class="w-full mx-auto lg:w-8/12 xl:w-7/12" src="/fm/kapcs.webp" alt="">

	<div class="flex justify-center my-20">
		<div class="flex text-onSecondaryContainer text-2xl font-semibold justify-center items-center bg-secondaryContainer p-6 w-8/12 rounded-full">
			<img src="/fm/trans.webp" alt="">
			<img src="/fm/LC.webp" alt="">
			<p class="ml-10">Az áramkör lényegében egy LC rezonátorból, és egy tranzisztorból áll.</p>
		</div>
	</div>

	<div class="flex justify-center my-20 mx-24">
		<div class="flex text-secondary text-2xl font-semibold justify-center items-center w-10/12">
			<img src="/fm/divider.webp" alt="">
			<p class="ml-14">Az R1, R2 és R3 ellenállások segítségével beállítjuk a tranzisztor munkapontját.</p>
		</div>
	</div>

	<div class="flex justify-center my-20 mx-24">
		<div class="flex text-secondary text-2xl font-semibold justify-center items-center w-10/12">
			<img src="/fm/inout.webp" alt="">
			<p class="ml-14">Ha az IN és OUT pontokra egy váltakozó feszültségű forrást kapcsolunk (mikrofon, aux kábel, stb.) a tranzisztor annak függvényében növeli és csökkenti az RC körön átfolyó áramot.</p>
		</div>
	</div>

	<p class="text-primary text-2xl font-semibold text-center mb-20">Ennek hatására a rezgőkör megváltoztatja a frekvenciáját, így belemoduláltuk a frekvenciájába a beérkező jelünket.</p>

</main>