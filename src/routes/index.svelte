<script>
	import { gdAuthenticated } from '../stores';
	import { writable } from 'svelte/store';

	import MyDrive from '../components/MyDrive.svelte';
	import { onMount } from 'svelte';

	const driveStatus = writable();

	const getDriveStatus = () => {
		const status = localStorage.getItem('driveStatus');
		return JSON.parse(status);
	};
	const setDriveStatus = () => {
		let status = true;
		if (getDriveStatus()) {
			status = false;
		}
		localStorage.setItem('driveStatus', status);
		driveStatus.set(getDriveStatus());
	};
	onMount(() => {
		driveStatus.set(getDriveStatus());
	});
</script>

<div id="title">space</div>

<div id="button-container">
	<button on:click={setDriveStatus}>
		<img width="18px" height="16px" src="drive.png" alt="" />
	</button>
</div>
{#if $driveStatus !== undefined && $driveStatus === true}
	<div id="button-container">
		<button id="authButton">
			{$gdAuthenticated ? 'Logout' : 'Authenticate'}
		</button>
	</div>
	<MyDrive />
{/if}
<br />
<br />
<div style="text-align: center;">
	Swimming in milk 🥛
	<br />
	<br />
	<a href="https://github.com/allilk/space">@allilk</a>
</div>
