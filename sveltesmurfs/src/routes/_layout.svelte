<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
	display:flex;
	justify-content: center;
		background-color: #9CF8ED;
		box-sizing: border-box;
	}




</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>