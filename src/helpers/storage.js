const getCurrentStorage = async () => {
	const response = await gapi.client.drive.about.get({ fields: '*' });

	return JSON.parse(response.body);
};

export { getCurrentStorage };
