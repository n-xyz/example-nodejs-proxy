const express = require('express')
const proxy = require('express-http-proxy');

const app = express()
const port = 3000

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})

app.use('/web3-api/', proxy('https://api.n.xyz', {
	proxyReqPathResolver: function (req) {
		var parts = req.url.split('?');
		var updatedPath = "/api" + parts[0]
		console.log(updatedPath)
		var queryString = parts[1];
		return updatedPath + `?apikey=${process.env.NXYZ_API_KEY}${queryString ? "&" + queryString : ""}`
	}
}));

