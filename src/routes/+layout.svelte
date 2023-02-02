<slot/>

<style lang="scss">
   :global(*) {
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
   }

	:global(body) {
		background-color: #0f0f0f;
      scrollbar-width: none;

		--background-color: #272727;

      &::-webkit-scrollbar {
         width: 0;
         display: none;
      }
	}
</style>