'use strict';

const GitHubApi = require('github');
const github = new GitHubApi();

const user = 'ibm-cloud-solutions';
const repo = 'cloudbot';
const tag_name = 'v' + process.argv[2];

// TODO Need an access token for running this
github.authenticate({
	type: 'oauth',
	token: ''
});

github.repos.createRelease({
	user,
	repo,
	tag_name
}, (err, release) => {
	if (!err) {
		console.log(`Created a release for ${tag_name}`);
		github.repos.uploadAsset({
			user,
			repo,
			id: release.id,
			filePath: __dirname + '/cloudbot.zip',
			name: 'cloudbot.zip'
		}, (err, asset) => {
			if (!err) {
				console.log(`Asset can be downloaded from ${asset.browser_download_url}`);
			}
			else {
				console.error(err);
			}
		});
	}
	else {
		console.error(err);
	}
});