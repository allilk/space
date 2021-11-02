<script>
	import { onMount } from 'svelte';
	import { isAuthenticated, gdStorageQuota } from '../stores';

	import gdClient from '../helpers/authenticate';
	import { getCurrentStorage } from '../helpers/storage';
	import { formatBytes, getPercentage } from '../helpers/format';

	const client = new gdClient();

	onMount(() => {
		client.initiate();
	});

	isAuthenticated.subscribe((auth) => {
		if (auth) {
			getCurrentStorage().then((about) => {
				const { storageQuota: quota } = about;
				gdStorageQuota.set({
					usage: parseInt(quota.usage),
					usageInDrive: parseInt(quota.usageInDrive),
					usageInDriveTrash: parseInt(quota.usageInDriveTrash),
					maxSize: parseInt(quota.limit ? quota.limit : 1125899906842624)
				});
			});
		} else {
			gdStorageQuota.set({
				usage: 0,
				usageInDrive: 0,
				usageInDriveTrash: 0,
				maxSize: 0
			});
		}
	});
</script>

<div id="title">space</div>
<div id="button-container">
	<button id="authButton">
		{$isAuthenticated ? 'Logout' : 'Authenticate'}
	</button>
</div>

<section>
	<div>
		<span id="source-title">My Drive</span>
		<div id="percentage">
			{$isAuthenticated ? getPercentage($gdStorageQuota.usage, $gdStorageQuota.maxSize) : 0}
			<span id="percent-sign">%</span>
		</div>
	</div>
	<div class="storage-container">
		<div
			class="storage"
			style={'width:' +
				getPercentage($gdStorageQuota.usage, $gdStorageQuota.maxSize).toString() +
				'%'}
		>
			&nbsp;
		</div>
	</div>
	<div id="space-used">
		{formatBytes($gdStorageQuota.usage)} / {formatBytes($gdStorageQuota.maxSize)}
	</div>
</section>

<br />
<br />
<div style="text-align: center;">
	Swimming in milk 🥛
	<br />
	<br />
	<a href="https://github.com/allilk/space">@allilk</a>
</div>
