const mongoose = require('mongoose');
const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;
const Client = require('./client.js')

const ProviderSchema = Schema({
    id: {
        type: ObjectId
    },
    name: {
        type: String,
    },
    clients: [
        Client
    ]
});

const ProviderModel = mongoose.model('Provider', ProviderSchema);

module.exports = ProviderModel;