const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const assetRouter = express.Router();

const Assets = require('../models/assets');

assetRouter.use(bodyParser.json());

assetRouter.route('/')
.get((req,res,next)=>{
    Assets.find({})
    .then((assets)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.json(assets);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req, res, next) => {
    Assets.create(req.body)
    .then((asset) => {
        console.log('Asset created ', asset);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.json(asset);
    }, (err) => next(err))
        .catch((err) => next(err));
})
.delete( (req, res, next) => {
    Assets.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
});

module.exports = assetRouter;