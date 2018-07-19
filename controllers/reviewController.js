const Review = require("../database/models/review");

module.exports = {
    findAll: function(req, res) {
        Review
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findByAddress: function(req, res) {
        console.log("findOne hit in controller: ", req.body)
        Review
          .find(req.body)
          .then(reviewDocs => res.json(reviewDocs))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        console.log("create hit in controller: ",  req.body)
        Review
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        Review
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        Review
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }  

};