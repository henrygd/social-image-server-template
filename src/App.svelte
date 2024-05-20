<script lang="ts">
	const urlparams = new URLSearchParams(window.location.search)

	const title = urlparams.get('title') || 'No title'
	const subhead = urlparams.get('subhead')
	const author = urlparams.get('author')
	const date = urlparams.get('date')
	const logo = urlparams.get('logo') || '/logo.svg'
	const img = urlparams.get('img')
</script>

<div class="h-screen w-screen relative flex flex-col items-center bg-zinc-950">
	{#if img}
		<!-- background image -->
		<img class="absolute right-0 h-full w-[61%] object-cover object-[40%_50%]" src={img} alt="" />
	{/if}
	<!-- gradient -->
	<div
		class="absolute inset-0 w-full h-full bg-gradient-70deg from-zinc-950 from-[50%] to-zinc-950/10"
	></div>
	<main class="relative w-[90%] grow flex flex-col items-start pb-2">
		<!-- logo -->
		<img src={logo} alt="" class="h-7 mt-14" />
		<!-- content -->
		<div class="grid place-content-center grow gap-7 text-balance" class:w-[80%]={img}>
			{#if title}
				<h1 class="font-bold text-white leading-[1.05] w-full" style="--chars: {title.length}">
					{title}
				</h1>
			{/if}
			{#if subhead}
				<p class="text-3xl font-semibold text-[#f58220] w-4/5 leading-[1.3]">
					{subhead}
				</p>
			{/if}
			{#if author && date}
				<p class="text-2xl font-normal text-white/80">
					By {author} • {date}
				</p>
			{/if}
		</div>
	</main>
</div>

<style>
	h1 {
		font-size: clamp(5.5vw, calc(360vw / var(--chars)), 9vw);
	}
</style>
