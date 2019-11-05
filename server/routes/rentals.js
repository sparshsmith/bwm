const express = require('express');
const router = express.Router();
const rental = require('../model/rental');

router.get('', function (req, res) {
  rental.find({}, function (err, foundRentals) {
      if (err) {}
      return res.json(foundRentals)
  });
});

router.get('/:id', function(req,res){
  const rentalId = req.params.id;
  rental.findById(rentalId,function(err,foundRental){
    if(err){
      res.status(422).send({errors:[{title:'Rental Error', detail : 'Could not find the Rental!!'}]});
    }
    res.json(foundRental);
  });
});

module.exports = router;
