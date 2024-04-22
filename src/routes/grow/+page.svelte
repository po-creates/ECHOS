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
	<form on:submit|preventDefault={submit}>
		<Input name="rainfall" placeholder="rainfall" value="100" />
		<Input name="temperature" placeholder="temperature" value="20" />
		<Input name="pH" placeholder="pH" value="7" />
		<Input name="humidity" placeholder="humidity" value="100" />
		<Input name="nitrogen" placeholder="nitrogen" value="3" />
		<Input name="phosphorous" placeholder="phosphorous" value="4" />
		<Input name="potassium" placeholder="potassium" value="4" />

		<button
			class="btn btn-primary bg-accent border-primary text-primary hover:bg-primary hover:text-accent hover:border-primary p-1 px-4 text-sm"
		>
			Submit
		</button>
	</form>
	<p>Crop to grow: {suggestion}</p>
</Section>
