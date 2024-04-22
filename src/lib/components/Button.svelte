<!-- <button -->
<!-- 	class="btn btn-primary bg-accent border-primary text-primary hover:bg-primary hover:text-accent hover:border-primary p-1 px-4 text-sm" -->
<!-- 	><a href="/investments">Get Started</a></button -->
<!-- > -->
<script>
	export let href;
	let className = '';
	export { className as class };
</script>

<a
	{href}
	{...$$restProps}
	class="btn btn-primary bg-accent border-primary text-primary hover:bg-primary hover:text-accent hover:border-primary p-1 px-4 text-sm {className}"
>
	<slot />
</a>
