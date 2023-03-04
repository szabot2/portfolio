<script>
	$: date = '2004-03-14';
	$: [ year, month, day] = date.split('-').map(x => { return parseInt(x) });

	$: U = year / 100;
	$: [ R1, R2, R3 ] = [ day, day, day ];
	$: R4 = month;

	$: R14 = (R1 * R4) / (R1 + R4);
	$: Re = R14 + R2;

	$: I = U / Re;

	$: UR2 = R2 * I;
	$: UR14 = U - UR2;

	$: I1 = UR14 / R1;
	$: I4 = UR14 / R4;

	$: P = U * I;
	$: P1 = UR14 * I1;
   $: P2 = UR2 * I;
   $: P4 = UR14 * I4;
</script>

<main>

<div class="text-secondary">
	<h1 class="text-center text-primary font-semibold text-2xl m-2">Vegyes kapcsolás paramétereinek számítása</h1>

	<span class="mx-5">Add meg mikor születtél:</span><input bind:value={date} type="date" class="focus:outline-primary bg-secondary text-onSecondary rounded-2xl p-3 outline outline-outline mt-5">

	<div class="flex flex-wrap my-5">

		<div class="flex flex-col mt-10 mx-5">
			<p class="pl-3">Adatok:</p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> UXY = {U} V </p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> R1 = R2 = R3 = {R1} Ω </p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> R4 = {R4} Ω </p>
		</div>

		<div class="flex flex-col mt-10 mx-5">
			<p class="pl-3">Az eredő ellenállás számítása:</p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> Re = ( R1 x R4 ) + R2 </p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> Re = {Re.toFixed(2)} Ω</p>
		</div>

		<div class="flex flex-col mt-10 mx-5">
			<p class="pl-3">Az áramkörben folyó összes áramerősség értéke:</p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> I = U / Re</p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> I = {I.toFixed(2)} A</p>
		</div>

		<div class="flex flex-col mt-10 mx-5">
			<p class="pl-3">Az R2 ellenálláson eső feszültség:</p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> UR2 = R2 * I </p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> UR2 = {UR2.toFixed(2)} V </p>
		</div>

		<div class="flex flex-col mt-10 mx-5">
			<p class="pl-3">Az R1 és R4 ellenálláson eső feszültség:</p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> UR14 = U - UR2 </p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> UR14 = {UR14.toFixed(2)} V </p>
		</div>

		<div class="flex flex-col mt-10 mx-5">
			<p class="pl-3">Az R1 ellenálláson átfolyó áramerősség értéke:</p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> I1 = UR14 / R1 </p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> I1 = {I1.toFixed(2)} A </p>
		</div>

		<div class="flex flex-col mt-10 mx-5">
			<p class="pl-3">Az R4 ellenálláson átfolyó áramerősség értéke:</p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> I4 = UR14 / R1 </p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> I4 = {I4.toFixed(2)} A </p>
		</div>

		<div class="flex flex-col mt-10 mx-5">
			<p class="pl-3">A teljesítmények számítása!</p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> P = U * I </p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> P1 = UR14 * I1 </p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> P2 = UR2 * I </p>
			<p class="bg-secondaryContainer rounded-full w-max p-3 my-1"> P4 = UR14 * I4 </p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> P = {P.toFixed(2)} W</p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> P1 = {P1.toFixed(2)} W</p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> P2 = {P2.toFixed(2)} W</p>
			<p class="bg-tertiaryContainer rounded-full w-max p-3 my-1 border-b"> P4 = {P4.toFixed(2)} W</p>
		</div>

	</div>

	<div class="w-6/12 p-3 max-w-xs rounded-3xl fixed bottom-5 right-5">
		<img class="max-h-full max-w-full rounded-2xl outline outline-tertiary" src="doga2/doga2.jpg" alt="">
	</div>

</div>

</main>

