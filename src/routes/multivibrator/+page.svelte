<main class="font-serif">
	<div class="bg-secondaryContainer text-onSecondaryContainer m-4 mb-0 rounded-3xl p-7 text-white">
		A billenőkörök pozitívan visszacsatolt univerzális digitális áramkörök,
		melyeket négyszögjelek előállítására használunk. Kimeneti feszültségük nem
		folytonosan változik, hanem két, az áramköri paraméterek által
		meghatározott értéket vehet fel. Az egyes állapotok közötti átbillenés
		több különböző módon is történhet; ezek szerint létezik:
		<ul>
			<li>• bistabil multivibrátor --- mint a neve is mutatja, mindkét állapota stabil. A kimeneti
				 jelszint csak akkor változik, ha az átbillenési folyamatot egy bemeneti jel kiváltja.</li>
			<li>• monostabil multivibrátor --- csak egy stabil állapota van. A másik (instabil) állapotát egy
				 bemeneti jellel válthatjuk ki, és az csak az alkatrészek értékei által meghatározott ideig
				 marad fenn. Ezen idő eltelte után az áramkör automatikusan visszabillen a stabil
				 állapotába.</li>
			<li>• astabil multivibrátor --- nincs stabil állapota. Külső vezérlés nélkül, periodikusan
				 változtatja kimeneti feszültségszintjét, „billeg” a két állapota között</li>
	  </ul>
  
	</div>

	<h1 class="text-center my-8 text-primary text-4xl font-semibold">Astabil Multivibrátor</h1>

	<div class="flex justify-center">
		<div class="mx-5 grid grid-cols-2 max-w-screen-2xl bg-secondaryContainer p-6 rounded-3xl gap-8">
			<div>
				<img class="max-h-full max-w-full rounded-2xl" src="multivibrator/multivibrator.jpg" alt="" />
			</div>
			<div>
				<img class="max-h-full max-w-full rounded-2xl" src="multivibrator/multivibrator.gif" alt="">
			</div>
		</div>
	</div>

	<div class="flex justify-center">
		<div class="grid gap-8 grid-flow-col text-onTertiaryContainer mt-16 mb-10 items-center max-w-fit mx-5">
			<div class="bg-tertiaryContainer rounded-3xl p-4">
				<h2 class="text-center text-2xl font-semibold">Alkatrészek:</h2>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">4db ellenállás</div>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">2db Kondenzátor</div>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">2db transistor</div>
				<div class="text-center pt-4">2db LED</div>
		
			</div>
			<div class="bg-tertiaryContainer text-onTertiaryContainer rounded-3xl p-4">
				<h2 class="text-center text-2xl font-semibold">Alkatrészek adatai</h2>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">R1 = 675 ohm</div>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">R2 = 670 ohm</div>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">R3 = 29.62 ohm</div>
				<div class="text-center p-4 border-b border-solid border-white border-opacity-20">R4 = 29.52 ohm</div>
				<div class="text-center pt-4 ">2* 47 microfarad</div>
			</div>
		</div>
	</div>

	<h1 class="text-2xl font-semibold text-center text-tertiary">Kapcsolási rajz</h1>
	<div class="flex justify-center">
		<div class="bg-secondaryContainer rounded-3xl p-4 max-w-fit mx-5 mb-5">
			<img class="rounded-3xl w-96" src="multivibrator/astabilRajz.png" alt="">
		</div>
	</div>
</main>
