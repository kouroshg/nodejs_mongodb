import * as express from 'express';
import * as mongo from 'mongodb';

import { MongoHelper } from './mongo.helper';
import { ResponseHelper } from './response.helper';

const userRoutes = express.Router()
const userDB = 'main'
const userCollection = 'users'

const getCollection = () => {
  return MongoHelper.client.db(userDB).collection(userCollection);
}

// create new user
userRoutes.post('/users/new', (req:express.Request, resp: express.Response)=>{

  const {name, email, birth} = req.body;
  const collection = getCollection();

  const user = {
    name,
    email,
    birth,
    "created_at" : new Date().getTime(),
    "updated_at" : new Date().getTime()
  }

  collection.insertOne(user, (err, result)=>{
    
    if(err) {
      resp.json(new ResponseHelper(err.message, null)) 
    } else {
      resp.json(new ResponseHelper(null, result.ops));
    }
    resp.end()

  })
});

// get all users
userRoutes.get('/users', (req:express.Request, resp:express.Response) => {

  const collection = getCollection();

  collection.find({}).toArray((err, items)=>{

    if(err) {
      resp.json(new ResponseHelper(err.message, null));
    } else {
      resp.json(new ResponseHelper(null, items));
    }
    resp.end();

  });
});

// update user
userRoutes.put('/users/:id', (req:express.Request, resp:express.Response)=>{

  const {name, email, birth} = req.body;
  const id = req.params['id'];
  const collection = getCollection();
  
  const user = {
    name,
    email,
    birth,
    "updated_at" : new Date().getTime()
  }

  try {

    collection.findOneAndUpdate({'_id':new mongo.ObjectId(id)}, {$set:user}, (err, result)=>{
    if(err) {
      resp.json(new ResponseHelper(err.message, null));
    } else {
      resp.json(new ResponseHelper(null, result.value));
    }
    resp.end();

    });
  } catch{
    resp.json(new ResponseHelper('Cannot update user', null));
    resp.end();
  }

});

// detele user
userRoutes.delete('/users/:id', (req:express.Request, resp:express.Response)=>{
  const id = req.params['id'];
  const collection = getCollection();

  collection.deleteOne({"_id": new mongo.ObjectId(id)})
  resp.end();

})

export { userRoutes };