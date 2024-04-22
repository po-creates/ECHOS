<script>
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';

	let charities = [
		{
			name: 'Amazon Conservation Team',
			description:
				'Partners with indigenous and local communities to protect tropical forests and reinforce traditional culture in the Amazon.',
			link: 'https://www.amazonconservation.org/',
			date: '3rd June 2024',
			location: 'Chennai, India'
		},
		{
			name: 'Nature Conservancy',
			description:
				'A global environmental nonprofit working to conserve lands and waters essential for life.',
			link: 'https://www.nature.org/'
			date : '23rd april 2024',
			location : 'navi mumbai'
		},
		{
			name: 'World Resources Institute (WRI)',
			description:
				'A global research organization focusing on climate, energy, food, forests, water, and cities and transport.',
			link: 'https://www.wri.org/'
			date : '31st april 2024',
			location : 'south kerela'
		},
		{
			name: '350.org',
			description:
				'International movement dedicated to ending the use of fossil fuels and transitioning to renewable energy.',
			link: 'https://350.org/'
			date : '9th may 2024',
			location : 'tamil nadu'
		},
		{
			name: 'African Wildlife Foundation',
			description:
				"Focuses on protecting Africa's wildlife and wild lands, as well as empowering the people living alongside these spaces.",
			link: 'https://www.awf.org/'
			date : '5th september 2024',
			location : 'noida'
		},
		{
			name: 'Alaska Conservation Foundation',
			description: "Supports the protection of Alaska's natural environment and diverse cultures.",
			link: 'https://alaskaconservation.org/'
			date : '13th december 2024',
			location : 'Andra Pradesh'
		},
		{
			name: 'American Bird Conservancy',
			description:
				'Dedicated to the conservation of wild birds and their habitats throughout the Americas.',
			link: 'https://abcbirds.org/'
			date : '10th january 2024',
			location : 'navi mumbai'
		},
		{
			name: 'American Forests',
			description:
				'The oldest national conservation organization in the U.S., committed to creating healthy and resilient forests.',
			link: 'https://www.americanforests.org/'
			date : '13th april 2024',
			location : 'navi mumbai'
		},
		{
			name: 'American Rivers',
			description: 'Protects wild rivers, restores damaged rivers, and conserves clean water.',
			link: 'https://www.americanrivers.org/'
			date : '8th feb 2024',
			location : 'pune'
		},
		{
			name: 'Environmental Defense Fund (EDF)',
			description:
				'A global nonprofit organization tackling climate change with innovative solutions.',
			link: 'https://www.edf.org/'
			date : '22nd november 2024',
			location : 'Coimbatore'
		},
		{
			name: 'World Wildlife Fund (WWF)',
			description: 'Works to conserve nature and reduce threats to the diversity of life on Earth.',
			link: 'https://www.worldwildlife.org/'
			date : '21st march 2024',
			location : 'Sikkim'
		},
		{
			name: 'Oceana',
			description:
				"Dedicated to protecting the world's oceans with various campaigns against harmful practices.",
			link: 'https://oceana.org/'
			date : '23rd april 2024',
			location : 'Bengal'
		},
		{
			name: 'The Union of Concerned Scientists',
			description:
				'A non-profit science advocacy organization aiming to make the planet healthier and safer.',
			link: 'https://www.ucsusa.org/'
			date : '6th June 2024',
			location : 'Nagpur'
		},
		{
			name: 'The Rainforest Alliance',
			description: 'Works globally to conserve biodiversity and transform land-use practices.',
			link: 'https://www.rainforest-alliance.org/'
			date : '22nd april 2024',
			location : 'Gujrat'
		},
		{
			name: 'The Natural Resources Defense Council (NRDC)',
			description: 'Focuses on protecting the planet through various environmental programs.',
			link: 'https://www.nrdc.org/'
			date : '17th July 2024',
			location : 'Rajasthan'
		},
		{
			name: 'Trees for the Future',
			description:
				'Plants trees to revitalize soil and improve the livelihoods of impoverished farmers.',
			link: 'https://trees.org/'
			date : '23rd april 2024',
			location : 'J&K'
		},
		{
			name: 'Defenders of Wildlife',
			description:
				'Aims to protect and restore endangered wildlife across North America and beyond.',
			link: 'https://defenders.org/'
			date : '12th april 2024',
			location : 'Madhya Pradesh'
		},
		{
			name: 'Sierra Club',
			description:
				'The largest grassroots environmental organization in the U.S., focused on protecting the planet.',
			link: 'https://www.sierraclub.org/'
			date : '23rd May 2024',
			location : 'Uttar Pradesh'
		},
		{
			name: 'Global Footprint Network',
			description:
				'Helps organizations make sustainable ecological decisions regarding natural resource management.',
			link: 'https://www.footprintnetwork.org/'
			date : '19th August 2024',
			location : 'West Bengal'
		}
	];
</script>

<Section>
	<div class="p-4 text-lg font-semibold text-center text-foreground">
		Plantathons are community gatherings where people come together to get their hands dirty and
		plant trees! These events beautify cities, fight climate change, and promote a connection with
		nature.
	</div>
	<!-- {#each charities as charity} -->
	<!-- 	<div class="p-2"> -->
	<!-- 		<div -->
	<!-- 			class="bg-accent text-black bg-opacity-15 p-4 flex flex-col rounded-2xl border-primary border-2 relative" -->
	<!-- 		> -->
	<!-- 			<div class="text-2xl font-semibold">{charity.name}</div> -->
	<!-- 			<div>{charity.description}</div> -->
	<!-- 			<div -->
	<!-- 				class="mt-2 bg-accent bg-opacity-25 border-2 border-primary w-fit p-2 rounded-xl text-sm font-semibold hover:scale-105 ml-auto" -->
	<!-- 			> -->
	<!-- 				<a href={charity.url}>Read More</a> -->
	<!-- 			</div> -->
	<!-- 		</div> -->
	<!-- 	</div> -->
	<!-- {/each} -->

	{#each charities as charity}
		<div class="flex bg-background text-text m-4 p-4 rounded-lg justify-between items-center">
			<div>
				<div class="text-2xl font-semibold">{charity.name}</div>
				<div>{charity.description}</div>
			</div>
			<p>{charity.location}</p>
			<p>{charity.date}</p>
			<Button href={charity.url}>Join!</Button>
		</div>
	{/each}
</Section>
