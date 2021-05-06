const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // SHOW ALL

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // SHOW BY ID 

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  //  CREATE 
  router.post("/", (req, res)=>{

    const newData = req.body;
    collection.insertOne(newData)
    .then((result)=>{
      res.json(result.ops[0]); 
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });

  });

  //  UPDATE
  // put is unique because it requires the id and the body in order to update
  router.put('/:id', (req, res)=>{

    const id =  req.params.id;
    const updatedData = req.body;

    collection.updateOne({
       _id: ObjectID(id)},
     {$set: updatedData }) 
     .then((result)=>{
        res.json(result); 
     })
     .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });

  });

  // DELETE - by id i.e one item
  router.delete("/:id", (req, res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    collection.deleteOne({ _id: ObjectID(id)})
    .then((result)=>{
      return res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });

  });



  return router;
};

module.exports = createRouter;
