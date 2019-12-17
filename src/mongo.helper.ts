import * as mongo from 'mongodb';

class MongoHelper {
  public static client:mongo.MongoClient;

  public static connect (url:string)
  {
    return new Promise((resolve, reject) =>{
      mongo.MongoClient.connect(url,{ useUnifiedTopology: true }, (err,client:mongo.MongoClient)=>{
        if (err){
          reject(err);
        } else {
          this.client = client;
          resolve(client);
        }
      });
    });
  }
}

export { MongoHelper };