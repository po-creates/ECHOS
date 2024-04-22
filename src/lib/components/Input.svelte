<script>
	export let title;
	let className = '';
	export let type = 'text';
	export { className as class };
</script>

<div class="flex-1">
	{#if title}
		<p class="font-bold text-foreground">{title}</p>
	{/if}
	<input {...$$restProps} class="input input-bordered w-full {className}" {type} />
</div>
