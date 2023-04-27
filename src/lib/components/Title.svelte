<script>
	export let image;
	export let title;
</script>

<div class="flex justify-center items-center mt-5">
	<div class="max-w-screen-2xl">
		<div class="flex justify-center items-center px-5">
			<div class="z-10 mx-5 absolute text-primary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center">
				<h1>{title}</h1>
			</div>
	
			<div class="brightness-50 h-4/5 rounded-full overflow-hidden">
				<img class="w-full h-full" src={image} alt="">
			</div>
		</div>
	</div>
</div>