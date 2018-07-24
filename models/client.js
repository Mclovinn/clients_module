const mongoose = require('mongoose')
const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId
const Provider = require('./provider.js')

const ClientSchema = Schema({
    id: {
        type: ObjectId
    },
    name: {
        type: String
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    // providers: [
    //     Provider
    // ]
})

const ClientModel = mongoose.model('Client', ClientSchema)

module.exports = ClientModel