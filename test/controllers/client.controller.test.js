"use strict"

const should = require('should'),
	  sinon = require('sinon'),
	  mongoose = require('mongoose')

require('sinon-mongoose')

const ClientModel = require('../../models/client')

describe('ClientController test', () => {

    describe('Get all Clients test',  () => {
		it('Should call find once',  (done) => {
			let ClientMock = sinon.mock(ClientModel)
			ClientMock
			    .expects('find')
			    .yields(null, 'CLIENTS')

			ClientModel.find((err, result) => {
				ClientMock.verify()
				ClientMock.restore()
				should.equal('CLIENTS', result, "Test fails due to unexpected result")
				done()
			})
		})
	})
	
})