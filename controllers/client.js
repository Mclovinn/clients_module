'use strict'

const ClientCtrl = (Client) => {

	let ClientObj = {}

	ClientObj.getClients = (req, res, next) => {
		Client.find((err, clients) => {
			if (err) {
				res.json({status: 500, error: "Something went wrong"})
				return
			}
			res.json({status: 200, clients: clients})
		})
	}

	return ClientObj

}

module.exports = ClientCtrl