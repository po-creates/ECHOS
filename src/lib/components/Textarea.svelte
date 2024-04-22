<script>
	export let title;
	let className = '';
	export { className as class };
</script>

<div>
	{#if title}
		<p class="font-bold text-foreground">{title}</p>
	{/if}
	<textarea {...$$restProps} class="textarea textarea-bordered w-full {className}" />
</div>
