import { app } from './app';
import * as http from 'http';
import { MongoHelper } from './mongo.helper';

const PORT = 8080;
const server = http.createServer(app);
server.listen(PORT);
server.on("listening", async ()=>{
  console.info(`Server listening on port ${PORT}..`);
  try{
    await MongoHelper.connect('mongodb+srv://inspired:1234@cluster0-ludv5.mongodb.net/test?retryWrites=true&w=majority')
    console.log("Connected to MongoDB");
  } catch (err)
  {
    console.error(err);
  }
})