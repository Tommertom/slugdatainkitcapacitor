<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Demo capacitor app</h1>
Nothing here.... DATA:{data?.cool}

Bad route slug: <a href="/adsdsdasds">No good route</a>
Good route slug: <a href="/hello-world">Good route</a>
