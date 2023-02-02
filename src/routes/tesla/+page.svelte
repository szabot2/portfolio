<main>
	<div class="leiras">
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

	<h1>Mini Tesla transzformátor KIT, BD243C tranzisztorral.</h1>

	<div class="gallery">
		<div class="gallery-cell">
			<img id="tesla1" src="tesla2.jpg" alt="" />
		</div>
		<div class="gallery-cell">
			<img id="tesla2" src="tesla3.jpg" alt="" />
		</div>
	</div>

	<div class="adatok-container">
		<div class="adatok-cell">
			<div class="specs-container">
				<h2>Adatok:</h2>
				<div class="specs-cell">Működési feszültség: 9...12V DC</div>
				<div class="specs-cell">Maximális áramfelvétel: 660mA</div>
				<div class="specs-cell">Elkészítési idő: 15 perc</div>
				<div class="specs-cell">Méretek: 40 x 31 x 49mm</div>
			</div>
		</div>
		<div class="adatok-cell">
			<div class="eszrevetelek-container">
				<h2>Észrevételek:</h2>
				<div class="eszrevetelek-cell">
					A tekercs összerakása egyszerű volt, a réz végét megcinezni és
					helyére forrasztani kicsit trükkös volt, de megbirkóztam vele.
				</div>
				<div class="eszrevetelek-cell">
					Ha a kis lámpát a tekercs közelébe tesszük, az felvillan.
				</div>
				<div class="eszrevetelek-cell">
					A magas frekvenciájú áram miatt a tesla tekercs nem rázott, hanem
					inkább égetett.
				</div>
			</div>
		</div>
	</div>

	<div class="side-by-side">
		<div class="kapcsolas">
			<h2>Kapcsolás:</h2>

			<img src="kapcsolas.jpg" alt="" />
		</div>

		<div class="alkatreszek">
			<h2>Alkatrészek:</h2>

			<img src="alkatreszek.jpg" alt="" />
		</div>
	</div>
</main>

<style lang="scss">
	.leiras {
		background-color: var(--background-color);
		color: rgb(240, 240, 240);
		padding: 2em;
		border-radius: 1em;
		margin: 1em;
	}

	h1 {
		color: white;
		text-align: center;
		font-size: 5ch;
		margin-top: 1em;
	}

	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 50%;
		margin-inline: auto;
		margin-top: 2em;
		margin-bottom: 2em;
		background-color: var(--background-color);
		padding: 1.5em;
		border-radius: 2em;
		gap: 2em;

		.gallery-cell {
			img {
				max-height: 100%;
				max-width: 100%;
				border-radius: 1em;
			}
		}
	}

	h2 {
		color: rgb(240, 240, 240);
		text-align: center;
	}

	.adatok-container {
		display: grid;
		grid-template-columns: auto auto;
		margin-inline: auto;
		width: max-content;
		gap: 2em;
		align-items: center;

		.eszrevetelek-container {
			background-color: var(--background-color);
			padding: 1em;
			border-radius: 2em;
			color: white;

			.eszrevetelek-cell {
				padding: 1em;
				background-color: var(--background-color);
				text-align: center;
				border-bottom: 1px solid rgb(71, 71, 71);

				&:last-of-type {
					border: 0;
				}
			}
		}
	}

	.specs-container {
		background-color: var(--background-color);
		padding: 1em;
		border-radius: 2em;
		color: white;

		.specs-cell {
			padding: 1em;
			background-color: var(--background-color);
			text-align: center;
			border-bottom: 1px solid rgb(71, 71, 71);

			&:last-of-type {
				border: 0;
			}
		}
	}

	.side-by-side {
		width: 60%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 1em 3em;
		border-radius: 2em;
		background-color: var(--background-color);
		align-items: center;
		justify-items: center;
		column-gap: 5%;
		margin: 2em auto;

		img {
			max-height: 100%;
			max-width: 100%;
			margin-top: 0.5em;
			border-radius: 2em;
		}
	}
</style>
