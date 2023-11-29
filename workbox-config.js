module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,html,json,jpeg,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};