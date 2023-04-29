<script>
	export let title;
	export let value;
	export let image;
</script>

	<div class="flex flex-col text-center justify-center items-center">
		<div class="bg-no-repeat bg-center bg-cover aspect-square w-20 rounded-3xl overflow-hidden" style="background-image: url({image});">
			<p class="font-semibold text-tertiary w-full h-full flex justify-center items-center backdrop-brightness-50">{title}</p>
		</div>
		<p class="text-onTertiaryContainer px-2 mt-2 bg-tertiaryContainer rounded-2xl">{value}</p>
	</div>