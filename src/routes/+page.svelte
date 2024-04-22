<script>
	import Button from '../lib/components/Button.svelte';
</script>

<img
	class="absolute -top-10 h-auto w-screen left-0 -z-20 brightness-[75%]"
	src="https://backyardforkids.com/wp-content/uploads/2018/05/Kids-Plant-The-Tree.jpg"
/>
<div class="absolute top-0 hero h-screen -z-10">
	<div class="hero-overlay bg-opacity-25 bg-primary"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-2xl">
			<h1 class="mb-5 text-7xl font-Lato text-text font-black">E.C.H.O.S</h1>
			<p class="mb-5 text-text text-2xl">Connecting plants to people.</p>
			<p class="mb-5 text-text text-xl">
				Join millions of people across the globe in plantathons and be a part of the sustainable
				future.
			</p>
			<Button href="/grow">Get Started</Button>
		</div>
	</div>
</div>
