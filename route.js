
var express = require('express');
var router = express.Router();
var Movie = require('./models/movie');

//to get data
router.get("/movies",async(req,res)=>{
   const imovie = await movie.find();
   res.send(imovie);
   console.log(imovie);
})

//to post data
router.post("/movies",async(req,res)=>{
   const imovie = new Movie({
      name:req.body.name,
      rating:req.body.rating
   })

   await imovie.save((err,msg)=>{
      if(err){
         res.status(500).json({
            "error":err
         })
      }
      else{
         res.status(200).json({
            "message":msg
         })
      }
   })
});

//to update data
router.patch('/movies/:id',async(req,res)=>{
   const imovie = await Movie.findOne({_id:req.params.id})
   imovie.name = req.body.name
   imovie.rating = req.body.rating

   await imovie.save((err,msg)=>{
      if(err){
         res.status(500).json({
            error:err
         })
      }
      else{
         res.status(200).json({
            msg:msg
         })
      }
   })
})

//to delete data
router.delete('/movies/:name',async(req,res)=>{
   await Movie.deleteOne({name:req.params.name},
      (err,msg)=>{
         if(err){
            res.status(500).json({
               error:err
            })
         }
         else{
            res.status(200).json({
               msg:msg
            })
         }
      })
})
 
module.exports = router