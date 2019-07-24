# MongoPooler
NodeJS package to manage MongoDB connections

# Installation
To install this package, navigate to your project root and run:<br>
```npm install --save mongopooler```

# Usage
Import the pooler wherever it needs to be used <br>
```let MongoPool = require('mongopooler');```

Setup the pool in your main server file <br>
```
var options = { numberOfRetries : 5, auto_reconnect: true, poolSize : 40, connectTimeoutMS: 500 };
var uri = "mongoURI"
MongoPool.createPool(uri, options);
```

Access the pool from wherever required, to make calls to your MongoDB <br>
```
MongoPool.getInstance(function(client){
  // Perform DB operations here
})
```

Notes: 
- The getInstance function returns a MongoDB client object, you still have to call client.db on it to pick a database <br>
- getInstance will fail if it's called before createPool() is <br>

# Misc
This package is inspired by [Yaki Klein's](https://stackoverflow.com/users/2859248/yaki-klein) answer on [this](https://stackoverflow.com/questions/10656574/how-do-i-manage-mongodb-connections-in-a-node-js-web-application) StackOverflow post.


