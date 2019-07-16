const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    numShares: {
        type: Number,
        min: 0,
        required: true
    },
    date: {
        type: String,
        required: true
    },

});

const assetSchema = new Schema({
    name: String,
    dateCreated: String,
    symbol: String,
    numShares: {
        type: Number,
        min: 0,
        required: true
    },
    budget: {
        type:Number,
        min: 0,
        required: true
    },
    profit: {
        type: Number,
        required: true
    },
    currentValue: {
        type: Number,
        required: true
    },
    cash: {
        type: Number,
        required: true
    },
    cashToValue: {
        type: Number,
        required: true
    },
    maxTransactionValue: {
        type: Number,
        required: true
    },
    lastSellPrice: {
        type: Number,
        min: 0,
        required: true
    },
    lastBuyPrice: {
        type: Number,
        min: 0
    },
    toSellPrice: {
        type: Number,
        min:0,
        required: true
    },
    toBuyPrice: {
        type: Number,
        min: 0
    },
    transaction: [transactionSchema]
}); 

var Assets = mongoose.model('Asset',assetSchema);

module.exports = Assets;