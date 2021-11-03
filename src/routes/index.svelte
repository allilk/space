<script>
	import { onMount } from 'svelte';
	import { gdAuthenticated } from '../stores';

	import gdClient from '../helpers/authenticate';

	import MyDrive from '../components/MyDrive.svelte';

	const gd_client = new gdClient();

	onMount(() => {
		gd_client.initiate();
	});
</script>

<div id="title">space</div>
<div id="button-container">
	<button id="authButton">
		{$gdAuthenticated ? 'Logout' : 'Authenticate'}
	</button>
</div>

<MyDrive />

<br />
<br />
<div style="text-align: center;">
	Swimming in milk 🥛
	<br />
	<br />
	<a href="https://github.com/allilk/space">@allilk</a>
</div>
