<script>
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';
	import Textarea from '../../lib/components/Textarea.svelte';
	import Button from '../../lib/components/Button.svelte';

	async function submit() {}
</script>

<Section>
	<p>
		Find any businesses near you that are violating the green policies? Report them here and we will
		inform the authorities!
	</p>
	<div class="mt-4 space-y-4">
		<form on:submit|preventDefault={submit}>
			<Input
				name="address"
				placeholder="Shop No. 000, locality, City, State"
				title="Address of Business"
			/>
			<Textarea
				name="description"
				placeholder="Describe how the business failed to adhere to the green policies"
				title="Description of violation"
			/>
			<Input name="email" placeholder="example@example.com" title="Email of the business" />
			<Input name="phone" placeholder="+91 00000 00000" title="Phone number of the business" />
			<Input
				name="peronal_phone"
				placeholder="Stays anonymous to the business!"
				title="Your contact number"
			/>

			<button
				class="btn btn-primary bg-accent border-primary text-primary hover:bg-primary hover:text-accent hover:border-primary p-1 px-4 text-sm"
			>
				Report
			</button>
		</form>
	</div>
</Section>
