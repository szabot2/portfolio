<script>
	export let image;
	export let title;
</script>

<div class="flex justify-center items-center md:mx-16 h-[calc(100vh-4rem)] mt-0">
	<div>
		<div class="flex justify-center items-center relative">
			<div class="z-10 leading-[1.2] px-10 absolute text-primary font-bold text-6xl md:px-5 md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9rem] text-center">
				<h1>{title}</h1>
			</div>
	
			<div class="brightness-50 min-w-[calc(100vw-8rem)] h-[calc(100vh-4rem-8rem)] md:h-[calc(100vh-4rem-8rem)] rounded-full overflow-hidden">
				<img class="w-full h-full object-cover" src={image} alt="">
			</div>
		</div>
	</div>
</div>