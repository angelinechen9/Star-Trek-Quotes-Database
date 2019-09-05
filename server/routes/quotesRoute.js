const express = require("express");
const _ = require("lodash");
const quotesRoute = express.Router();
const {Quote} = require("../models/quote.js");
quotesRoute.get("/", (req, res) => {
  Quote.find()
  .then(quotes => {
    res.json(quotes);
  })
  .catch(e => {
    res.status(404).send(e);
  })
})
quotesRoute.post("/", (req, res) => {
  const quote = new Quote({
    quote: req.body.quote,
    character: req.body.character,
    tvseriesormovie: req.body.tvseriesormovie
  })
  quote.save()
  .then(quote => {
    res.json(quote);
  })
  .catch(e => {
    res.status(404).send(e);
  })
})
quotesRoute.get("/:id", (req, res) => {
  Quote.find({_id: req.params.id})
  .then(quote => {
    res.json(quote);
  })
  .catch(e => {
    res.status(404).send(e);
  })
})
quotesRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ["quote", "character", "tvseriesormovie"]);
  Quote.findByIdAndUpdate(id, {$set: body}, {new: true})
  .then(quote => {
    res.json(quote);
  })
  .catch(e => {
    res.status(404).send(e);
  })
})
quotesRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  Quote.findByIdAndRemove(id)
  .then(quote => {
    res.json(quote);
  })
  .catch(e => {
    res.status(404).send(e);
  })
})
module.exports = quotesRoute
