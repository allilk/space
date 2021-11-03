<script>
	import Storage from './Storage.svelte';
	import { gdAuthenticated, gdStorageQuota } from '../stores';
	import { getCurrentStorage } from '../helpers/storage';

	gdAuthenticated.subscribe((auth) => {
		if (auth) {
			getCurrentStorage().then((about) => {
				const { storageQuota: quota } = about;
				gdStorageQuota.set({
					load: true,
					title: 'My Drive',
					usage: parseInt(quota.usage),
					usageInDrive: parseInt(quota.usageInDrive),
					usageInDriveTrash: parseInt(quota.usageInDriveTrash),
					maxSize: parseInt(quota.limit ? quota.limit : 1125899906842624)
				});
			});
		} else {
			gdStorageQuota.set({
				load: false,
				usage: 0,
				usageInDrive: 0,
				usageInDriveTrash: 0,
				maxSize: 0
			});
		}
	});
</script>

{#if $gdAuthenticated && $gdStorageQuota.load}
	<Storage storageObject={$gdStorageQuota} />
{/if}
