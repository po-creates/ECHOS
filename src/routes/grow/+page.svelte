<script>
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';

	let suggestion = '';

	async function submit(e) {
		let formData = new FormData(e.target);

		let res = await fetch('http://localhost:5000/grow', {
			body: JSON.stringify(Object.fromEntries(formData.entries())),
			method: 'POST',

			headers: {
				'Content-Type': 'application/json'
			}
		});

		suggestion = await res.text();

		// console.log(await res.json());
	}
</script>

<Section>
	<div class="p-4 text-lg font-semibold text-center text-foreground">
		Provide the conditions near you and we will recommend you plants!
	</div>
	<form on:submit|preventDefault={submit} class="space-y-4">
		<Input name="rainfall" placeholder="rainfall" value="100" title="Rainfall" />
		<Input name="temperature" placeholder="temperature" value="20" title="Temperatue" />
		<Input name="pH" placeholder="pH" value="7" title="pH" />
		<Input name="humidity" placeholder="humidity" value="100" title="humidity" />
		<Input
			name="nitrogen"
			placeholder="nitrogen"
			value="3"
			title="Ratio of Nitrogen content in soil"
		/>
		<Input
			name="phosphorous"
			placeholder="phosphorous"
			value="4"
			title="Ratio of phosphorous content in soil"
		/>
		<Input
			name="potassium"
			placeholder="potassium"
			value="4"
			title="Ratio of potassium content in soil"
		/>

		<button
			class="btn btn-primary bg-accent border-primary text-primary hover:bg-primary hover:text-accent hover:border-primary p-1 px-4 text-sm"
		>
			Submit
		</button>
	</form>
	<p class="text-center text-2xl">Plant to grow: {suggestion}</p>
</Section>
