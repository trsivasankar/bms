const express = require('express');
const router = express.Router();
const Movie = require("../models/movieModel");


router.post('/add-movie', async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      await newMovie.save();
      res.send({
        success: true,
        message: 'New Movie has been added !'
      })
    } catch (error) {
      res.send({
        success: false,
        message: error.message
      })
    }
  });

  
router.get('/get-all-movies', async (req, res) => {

    try {
        const allMovies = await Movie.find();
        res.send({
            success: true,
            message: 'All Movies',
            data: allMovies
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }

})
module.exports = router;