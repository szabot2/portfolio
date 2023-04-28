<script>
	export let image;
	export let title;
</script>

<div class="flex justify-center items-center mt-5 md:h-[calc(100vh-4rem)] md:mt-0">
	<div class="max-w-screen-2xl">
		<div class="flex justify-center items-center px-5">
			<div class="z-10 mx-5 absolute text-primary font-bold text-3xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-center">
				<h1>{title}</h1>
			</div>
	
			<div class="brightness-50 max-h-[80vh] rounded-full overflow-hidden">
				<img class="w-full h-full" src={image} alt="">
			</div>
		</div>
	</div>
</div>