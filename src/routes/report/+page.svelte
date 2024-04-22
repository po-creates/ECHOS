<script>
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';
	import Textarea from '../../lib/components/Textarea.svelte';
	import Button from '../../lib/components/Button.svelte';
</script>

<Section>
	<p>
		Find any businesses near you that are violating the green policies? Report them here and we will
		inform the authorities!
	</p>
	<div class="mt-4 space-y-4">
		<Input placeholder="Shop No. 000, locality, City, State" title="Address of Business" />
		<Textarea
			placeholder="Describe how the business failed to adhere to the green policies"
			title="Description of violation"
		/>
		<Input placeholder="example@example.com" title="Email of the business" />
		<Input placeholder="+91 00000 00000" title="Phone number of the business" />
		<Input placeholder="Stays anonymous to the business!" title="Your contact number" />
		<Button>Report</Button>
	</div>
</Section>
