<script>
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import Button from '$lib/components/Button.svelte';
	import supabase from '$lib/supabase';

	async function submit(e) {
		const form = e.target;
		const formData = new FormData(form);
		const business_name = formData.get('business_name');
		const email = formData.get('email');
		const gstin = formData.get('gstin');
		const activities = formData.get('activities');
		const plantathon = formData.get('plantathon');

		const { data, error } = await supabase
			.from('green')
			.insert([{ business_name, email, gstin, activities, plantathon }]);

		if (error) {
			console.error('Error reporting business:', error.message);
		} else {
			console.log('Business reported successfully:', data);
			form.reset();
		}
	}
</script>

<Section>
	<p>
		Avail green credits by submitting
		<br />
		Increase visibility and reach potential customers.
	</p>

	<div class="mt-4">
		<form on:submit|preventDefault={submit} class="space-y-4">
			<Input placeholder="ABC Company" title="Business Name" name="business_name" />
			<Input placeholder="info@abc.com" title="Email" name="email" />
			<Input placeholder="12ABCDE3456F7ZX" title="GSTIN" name="gstin" />
			<Textarea
				placeholder="Describe your business activities"
				title="Business Activities"
				name="activities"
			/>
			<Textarea
				placeholder="Plantathon..."
				title="Share your businesss's previous plantathon experiences"
				name="plantathon"
			/>
			<button
				class="btn btn-primary bg-accent border-primary text-primary hover:bg-primary hover:text-accent hover:border-primary p-1 px-4 text-sm"
			>
				Avail
			</button>
		</form>
	</div>
</Section>
