<script>
	export let loading;
</script>

{#if loading}
	<div class="flex w-full flex-col gap-4">
		<div class="flex items-center gap-4">
			<div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
			<div class="flex flex-col gap-4">
				<div class="skeleton h-4 w-20"></div>
				<div class="skeleton h-4 w-28"></div>
			</div>
		</div>
		<div class="skeleton h-32 w-full"></div>
	</div>
{:else}
	<slot />
{/if}
