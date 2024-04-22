<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<!-- <div class="flex flex-col bg-accent bg-opacity-15"> -->
<div class="flex flex-col">
	<Navbar />
	<div class="w-full mt-14">
		<slot />
	</div>
</div>
