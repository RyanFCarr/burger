const express = require("express");
const burger = require('../models/burger');

// Routes
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(await burger.selectAll())
})

router.post('/', async (req, res) => {
    res.send(await burger.insertOne(req.body))
})

router.put('/:id', async (req, res) => {
    res.send(await burger.updateOne(req.params.id, req.body))
})

module.exports = router;