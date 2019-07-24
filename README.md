# MongoPooler
NodeJS package to manage MongoDB connections

# Usage

Import the pooler wherever it needs to be used
```let MongoPool = require('mongopooler');```

Setup the pool in your main server file
```
var options = { numberOfRetries : 5, auto_reconnect: true, poolSize : 40, connectTimeoutMS: 500 };
var uri = "mongoURI"
MongoPool.createPool(uri, options);
```

Access the pool from wherever required, to make calls to your MongoDB
```
MongoPool.getInstance(function(client){
  // Perform DB operations here
})
```

Notes: 
- The getInstance function returns a MongoDB client object, you still have to call client.db on it to pick a database
- getInstance will fail if it's called before createPool() is

# Misc
This package is inspired by [Yaki Klein's](https://stackoverflow.com/users/2859248/yaki-klein) answer on [this](https://stackoverflow.com/questions/10656574/how-do-i-manage-mongodb-connections-in-a-node-js-web-application) StackOverflow post.


