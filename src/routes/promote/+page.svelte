<script>
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';
	import Textarea from '../../lib/components/Textarea.svelte';
	import Button from '../../lib/components/Button.svelte';
</script>

<Section>
	<p>
		Get your company recognised by <b>hundreds of planters</b> around.
		<br />
		Sponsor a <b>plantathon</b> and be part of a <b>sustainable future</b>.
	</p>
	<div class="mt-4 space-y-4">
		<Input placeholder="Tesla" title="Company name" />
		<Textarea
			placeholder="Include quantity of each as well"
			title="Describe the materials your company can provide"
		/>
		<Textarea
			placeholder="Mention places your company would like to advertise"
			title="Share your expected outcome"
		/>
		<Input placeholder="CEO" title="Your post in the company" />
		<Input placeholder="Elon Musk" title="Your name" />
		<Input placeholder="elon@tesla.com" title="Your email" />

		<Button onclick="alert('Report successfully submitted!')">Submit</Button>
	</div>
</Section>
