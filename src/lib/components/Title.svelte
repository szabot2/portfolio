<script>
	export let image;
	export let title;
</script>

<div class="flex justify-center items-center mx-8 mt-8 md:mx-16 md:h-[calc(100vh-4rem)] md:mt-0">
	<div class="max-w-screen-2xl">
		<div class="flex justify-center items-center relative">
			<div class="z-10 px-3 absolute text-primary font-bold text-3xl sm:text-4xl md:px-5 md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9rem] text-center">
				<h1>{title}</h1>
			</div>
	
			<div class="brightness-50 min-w-[calc(100vw-8rem)] md:h-[calc(100vh-4rem-8rem)] rounded-full overflow-hidden">
				<img class="w-full h-full object-cover" src={image} alt="">
			</div>
		</div>
	</div>
</div>