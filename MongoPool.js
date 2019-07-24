var MongoClient = require('mongodb').MongoClient;

var pooled;

function MongoPool(){}

function createPool(mongoURI, options){
  MongoClient.connect(mongoURI, options, (err, db) => {
    if (err) throw err;
    pooled = db;
  });
  return MongoPool;
}

MongoPool.createPool = createPool;

function getInstance(callback){
  if(!pooled){
    throw new Error('MongoDB ever initialised. Please call createPool first');
  }
  else{
    if(callback && typeof(callback) == 'function')
      cb(pooled);
  }
}
MongoPool.getInstance = getInstance;

module.exports = MongoPool;


/*

Usage:
let MongoPool = require('mongopooler');

In Server Init:
var options = { numberOfRetries : 60, auto_reconnect: true, poolSize : 40, connectTimeoutMS: 30000 };
var uri = "mongoURI"
MongoPool.createPool(uri, options);

When accessing DB:

MongoPool.getInstance((client) => {
  
  })

*/