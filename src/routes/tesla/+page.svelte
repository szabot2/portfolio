<script>
	import { base } from "$app/paths";
</script>

<main class="font-serif">
	<div class="bg-secondaryContainer text-onSecondaryContainer m-4 mb-0 rounded-3xl p-7 text-white">
		Nikola Tesla 1891-ben építette meg a róla elnevezett Tesla-tekercset. A
		Tesla-tekercs legalább két légmagos tekercsből áll, ami nagyfeszültséget
		állít elő nagyfrekvencián. A nagyfeszültség 10 000 V-tól akár 10 000 000
		V-ig terjedhet, a frekvencia pedig több MHz is lehet, általában 25 kHz és
		2 MHz között mozog. A Tesla-tekercs abban különbözik a transzformátortól,
		hogy a primer és szekunder áramköre is rezonanciában van az üzemi
		frekvenciával, a bevezetett feszültség frekvenciáját megváltoztatja,
		valamint abban, hogy légmagos kialakítású. A tekercsek tápellátását
		célszerűen transzformátor biztosíthatja. Tesla volt az első, aki az
		elektromos rezonancia jelenségét a gyakorlatban is megvalósította és
		felhasználta.
	</div>

	<h1 class="text-center my-8 text-primary text-4xl font-semibold">Mini Tesla transzformátor KIT, BD243C tranzisztorral.</h1>

	<div class="flex justify-center">
		<div class="grid grid-cols-2 max-w-screen-lg mx-5 bg-secondaryContainer p-6 rounded-3xl gap-8">
			<div>
				<img class="max-h-full max-w-full rounded-2xl" src="{base}/tesla/tesla2.webp" alt="" />
			</div>
			<div>
				<img class="max-h-full max-w-full rounded-2xl" src="{base}/tesla/tesla3.webp" alt="" />
			</div>
		</div>
	</div>

	<div class="flex justify-center">
		<div class="grid gap-8 grid-flow-col text-onTertiaryContainer my-16 items-center max-w-fit mx-5">
			<div class="bg-tertiaryContainer rounded-3xl p-4">
				<h2 class="text-center text-2xl font-semibold">Adatok:</h2>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">Működési feszültség: 9...12V DC</div>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">Maximális áramfelvétel: 660mA</div>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">Elkészítési idő: 15 perc</div>
				<div class="text-center pt-4">Méretek: 40 x 31 x 49mm</div>
		
			</div>
			<div class="bg-tertiaryContainer rounded-3xl p-4">
				<h2 class="text-center text-2xl font-semibold">Észrevételek:</h2>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">
					A tekercs összerakása egyszerű volt, a réz végét megcinezni és
					helyére forrasztani kicsit trükkös volt, de megbirkóztam vele.
				</div>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">
					Ha a kis lámpát a tekercs közelébe tesszük, az felvillan.
				</div>
				<div class="text-center pt-4 ">
					A magas frekvenciájú áram miatt a tesla tekercs nem rázott, hanem
					inkább égetett.
				</div>
			</div>
		</div>
	</div>

	<div class="flex justify-center">
		<div class="grid grid-cols-2 max-w-screen-lg mx-5 bg-secondaryContainer text-onSecondaryContainer p-6 mb-5 rounded-3xl gap-8">
			<div>
				<p class="text-center text-white font-semibold">Kapcsolás</p>
				<img class="max-h-full max-w-full rounded-2xl" src="{base}/tesla/kapcsolas.jpg" alt="" />
			</div>
			<div>
				<p class="text-center text-white font-semibold">Alkatrészek</p>
				<img class="max-h-full max-w-full rounded-2xl" src="{base}/tesla/alkatreszek.jpg" alt="" />
			</div>
		</div>
	</div>
</main>
