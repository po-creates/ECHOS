<script>
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import Button from '$lib/components/Button.svelte';
	import supabase from '$lib/supabase';

	async function submit(e) {
		const form = e.target;
		const formData = new FormData(form);

		const provide_description = formData.get('provide_description');
		const company_name = formData.get('company_name');
		const outcome_description = formData.get('outcome_description');
		const position = formData.get('position');
		const name = formData.get('name');
		const email = formData.get('email');

		const { data, error } = await supabase
			.from('sponsors')
			.insert([{ provide_description, company_name, outcome_description, position, name, email }]);

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
		Get your company recognised by <b>hundreds of planters</b> around.
		<br />
		Sponsor a <b>plantathon</b> and be part of a <b>sustainable future</b>.
	</p>
	<div class="mt-4">
		<form on:submit|preventDefault={submit} class="space-y-4">
			<Input placeholder="Tesla" title="Company name" name="company_name" />
			<Textarea
				placeholder="Include quantity of each as well"
				title="Describe the materials your company can provide"
				name="provide_description"
			/>
			<Textarea
				placeholder="Mention places your company would like to advertise"
				title="Share your expected outcome"
				name="outcome_description"
			/>
			<Input placeholder="CEO" title="Your post in the company" name="position" />
			<Input placeholder="Elon Musk" title="Your name" name="name" />
			<Input placeholder="elon@tesla.com" title="Your email" name="email" />

			<button
				class="btn btn-primary bg-accent border-primary text-primary hover:bg-primary hover:text-accent hover:border-primary p-1 px-4 text-sm"
			>
				Submit
			</button>
		</form>
	</div>
</Section>
