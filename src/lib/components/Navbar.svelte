<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { argbFromHex, themeFromSourceColor, rgbaFromArgb } from "@material/material-color-utilities";

	$: color = localStorage.getItem('color') || '#DC8ADD';

	// konvertálja a színeket rgba-ra és elrakja localStorage-ba.
	function setColor() {
		let theme = themeFromSourceColor(argbFromHex(color));

		let rgbaTheme = Object.keys(theme.schemes.dark.props).map(x => {
			const property = { // argb --> rgba
				[x]: `rgba(${rgbaFromArgb(theme.schemes.dark.props[x]).r}, ${rgbaFromArgb(theme.schemes.dark.props[x]).g}, ${rgbaFromArgb(theme.schemes.dark.props[x]).b}, ${rgbaFromArgb(theme.schemes.dark.props[x]).a})`
			}

			document.documentElement.style.setProperty(`--${x}`, property[x]) // Update

			return property
		});

		localStorage.setItem('color', color) // elrakja későbbre a beállított színt, hogy meg lehessen mutatni.
		localStorage.setItem('theme', JSON.stringify( rgbaTheme ));
	};

	if (!localStorage.getItem('theme'))
		onMount(async () => {
			setColor()
		})
</script>

<div class="bg-secondaryContainer rounded-b-full p-4 px-10 absolute top-0 w-full h-16 flex items-center justify-between">
	<a href="{base || '/'}" class="w-20 text-onSurface rounded-full p-2 outline hover:text-primary transition-all duration-300 cursor-pointer text-center">Főoldal</a>
	<div class="h-full outline outline-outline rounded-full hover:outline-primary transition-all duration-300" style="background-color: {color};"><input type="color" bind:value={color} on:input={setColor} class="w-20 opacity-0 cursor-pointer"></div>
</div>