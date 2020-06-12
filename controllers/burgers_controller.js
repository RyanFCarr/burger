const express = require("express");
const burger = require('../models/burger');

// Routes
const router = express.Router();

router.get('/api/burgers', async (req, res) => {
    res.send(await burger.selectAll());
})

router.post('/api/burgers', async (req, res) => {
    res.send(await burger.insertOne(req.body.burger_name))
})

router.put('/api/burgers/:id', async (req, res) => {
    res.send(await burger.updateOne(req.params.id, req.body.devoured))
})

router.delete('/api/burgers', async (req, res) => {
    res.send(await burger.clearPlate());
})

router.get('/', async (req, res) => {
    const burgers = await burger.selectAll();
    res.render("index", { burgers })
  })

module.exports = router;