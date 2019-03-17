const contentful = require('contentful')
const defaultConfig = {
	host: 'preview.contentful.com',
	space: process.env.CTF_SPACE_ID,
	accessToken: process.env.CTF_CPA_TOKEN
}
const client = contentful.createClient(defaultConfig)

module.exports = client

// production env using Content Delivery API
/* if (process.env.NODE_ENV === 'production') {
	options.host = 'cdn.contentful.com',
	options.accessToken = config.CTF_CDA_TOKEN
} */