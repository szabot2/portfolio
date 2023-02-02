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
		background-color: black;
      scrollbar-width: none;

      &::-webkit-scrollbar {
         width: 0;
         display: none;
      }
	}
</style>