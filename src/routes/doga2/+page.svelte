<script>
	import { fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing'

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
	<h1 data-aos="zoom-out" data-aos-delay="500" class="text-center text-primary font-semibold text-2xl m-2">Vegyes kapcsolás paramétereinek számítása</h1>

	<div data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-out-cubic">
		<span class="mx-5">Add meg mikor születtél:</span>
		<input bind:value={date} type="date" class="focus:outline-primary bg-secondary text-onSecondary rounded-2xl p-3 outline outline-outline mt-5">
	</div>

	<div class="flex flex-wrap my-5">
		{#key date}
			<div class="flex flex-col mt-10 mx-5">
				<p in:fly={{delay: 25, easing:sineOut, y: -25}} class="pl-3">Adatok:</p>
				<p in:fly={{delay: 50, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> UXY = {U} V </p>
				<p in:fly={{delay: 70, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> R1 = R2 = R3 = {R1} Ω </p>
				<p in:fly={{delay: 100, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> R4 = {R4} Ω </p>
			</div>
		{/key}

		<div class="flex flex-col mt-10 mx-5">
			{#key date}
				<p in:fly={{delay: 125, easing:sineOut, y: -25}} class="pl-3">Az eredő ellenállás számítása:</p>
				<p in:fly={{delay: 150, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> Re = ( R1 x R4 ) + R2 </p>
				<p in:fly={{delay: 175, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> Re = {Re.toFixed(2)} Ω</p>
			{/key}
		</div>

		<div class="flex flex-col mt-10 mx-5">
			{#key date}
				<p in:fly={{delay: 200, easing:sineOut, y: -25}} class="pl-3">Az áramkörben folyó összes áramerősség értéke:</p>
				<p in:fly={{delay: 225, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> I = U / Re</p>
				<p in:fly={{delay: 250, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> I = {I.toFixed(2)} A</p>
			{/key}
		</div>

		<div class="flex flex-col mt-10 mx-5">
			{#key date}
				<p in:fly={{delay: 275, easing:sineOut, y: -25}} class="pl-3">Az R2 ellenálláson eső feszültség:</p>
				<p in:fly={{delay: 300, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> UR2 = R2 * I </p>
				<p in:fly={{delay: 325, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> UR2 = {UR2.toFixed(2)} V </p>
			{/key}
		</div>

		<div class="flex flex-col mt-10 mx-5">
			{#key date}
				<p in:fly={{delay: 350, easing:sineOut, y: -25}} class="pl-3">Az R1 és R4 ellenálláson eső feszültség:</p>
				<p in:fly={{delay: 375, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> UR14 = U - UR2 </p>
				<p in:fly={{delay: 400, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> UR14 = {UR14.toFixed(2)} V </p>
			{/key}
		</div>

		<div class="flex flex-col mt-10 mx-5">
			{#key date}
				<p in:fly={{delay: 425, easing:sineOut, y: -25}} class="pl-3">Az R1 ellenálláson átfolyó áramerősség értéke:</p>
				<p in:fly={{delay: 450, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> I1 = UR14 / R1 </p>
				<p in:fly={{delay: 475, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> I1 = {I1.toFixed(2)} A </p>
			{/key}
		</div>

		<div class="flex flex-col mt-10 mx-5">
			{#key date}
				<p in:fly={{delay: 500, easing:sineOut, y: -25}} class="pl-3">Az R4 ellenálláson átfolyó áramerősség értéke:</p>
				<p in:fly={{delay: 525, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> I4 = UR14 / R1 </p>
				<p in:fly={{delay: 550, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> I4 = {I4.toFixed(2)} A </p>
			{/key}
		</div>

		<div class="flex flex-col mt-10 mx-5">
			{#key date}
				<p in:fly={{delay: 575, easing:sineOut, y: -25}} class="pl-3">A teljesítmények számítása!</p>
				<p in:fly={{delay: 600, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> P = U * I </p>
				<p in:fly={{delay: 625, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> P1 = UR14 * I1 </p>
				<p in:fly={{delay: 650, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> P2 = UR2 * I </p>
				<p in:fly={{delay: 675, easing:sineOut, y: -25}} class="bg-secondaryContainer rounded-full w-max p-3 my-1"> P4 = UR14 * I4 </p>
				<p in:fly={{delay: 700, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> P = {P.toFixed(2)} W</p>
				<p in:fly={{delay: 725, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> P1 = {P1.toFixed(2)} W</p>
				<p in:fly={{delay: 750, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> P2 = {P2.toFixed(2)} W</p>
				<p in:fly={{delay: 775, easing:sineOut, y: -25}} class="bg-tertiaryContainer rounded-full w-max p-3 my-1"> P4 = {P4.toFixed(2)} W</p>
			{/key}
		</div>

	</div>

	<div class="w-6/12 p-3 max-w-xs rounded-3xl fixed bottom-5 right-5">
		<img class="max-h-full max-w-full rounded-2xl outline outline-tertiary" src="doga2/kapcs.webp" alt="">
	</div>

</div>

</main>

