import { writable } from 'svelte/store';

const gdAuthenticated = writable(false);
const gdStorageQuota = writable({
	load: false,
	usage: 0,
	usageInDrive: 0,
	usageInDriveTrash: 0,
	maxSize: 0
});
// OAuth client variables
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/drive.readonly profile';

export { gdAuthenticated, gdStorageQuota, DISCOVERY_DOCS, SCOPES };
