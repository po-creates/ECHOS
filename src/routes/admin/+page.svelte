<script>
	import { onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';
	import supabase from '$lib/supabase';

	let loading = true;
	let green = [];
	let sponsors = [];
	let reports = [];

	onMount(async () => {
		const d = await supabase.from('green').select();
		green = d.data;

		const d1 = await supabase.from('sponsors').select();
		sponsors = d1.data;

		const d2 = await supabase.from('reports').select();
		reports = d2.data;

		loading = false;
	});

	async function remove(table, id) {
		if (!confirm('Are you sure you want to delete this record?')) return;
		await supabase.from(table).delete().eq('id', id);
		location.reload();
	}
</script>

<Loading {loading}>
	<div class="space-y-4 p-8">
		<div>
			<div class="mb-4">
				<h2 class="text-background text-4xl">Green credit claims</h2>
				<hr class="border-background" />
			</div>
			{#if green.length === 0}
				<p>No applications for green credit yet.</p>
			{:else}
				<div class="flex space-x-4 overflow-x-scroll">
					{#each green as business}
						<div class="bg-background rounded-lg p-4 min-w-32 max-w-xl">
							<div class="flex justify-between">
								<h3 class="text-2xl">{business.business_name}</h3>
								<button on:click={() => remove('green', business.id)}>X</button>
							</div>
							<p>Email: {business.email}</p>
							<p>GSTIN: {business.gstin}</p>
							<p>Activities: {business.activities}</p>
							<p>Plantathons: {business.plantathon}</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div>
			<div class="mb-4">
				<h2 class="text-background text-4xl">Plantathon sponsorships</h2>
				<hr class="border-background" />
			</div>
			{#if sponsors.length === 0}
				<p>No applications for sponsorships.</p>
			{:else}
				<div class="flex space-x-4 overflow-x-scroll">
					{#each sponsors as business}
						<div class="bg-background rounded-lg p-4 min-w-32 max-w-xl">
							<div class="flex justify-between">
								<h3 class="text-2xl">{business.name}</h3>
								<button on:click={() => remove('sponsors', business.id)}>X</button>
							</div>
							<p>{business.provide_description}</p>
							<p>{business.outcome_description}</p>
							<p>{business.position}</p>
							<p>{business.email}</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div>
			<div class="mb-4">
				<h2 class="text-background text-4xl">Reports</h2>
				<hr class="border-background" />
			</div>
			{#if sponsors.length === 0}
				<p>No reports.</p>
			{:else}
				<div class="flex space-x-4 overflow-x-scroll">
					{#each reports as business}
						<div class="bg-background rounded-lg p-4 min-w-32 max-w-xl">
							<div class="flex justify-between">
								<h3 class="text-2xl">{business.address}</h3>
								<button on:click={() => remove('reports', business.id)}>X</button>
							</div>
							<p>{business.description}</p>
							<p>{business.email}</p>
							<p>{business.phone}</p>
							<p>{business.personal_phone}</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</Loading>
