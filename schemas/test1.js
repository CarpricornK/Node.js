const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://114.108.185.227:27017/admin", {
    useNewUrlParser: true,
    "auth": {
        "authSource": "youhost"
      },
      "user":"youhost",
      "pass":"dbghtmxm19"
}).then(() => console.log(
    'Successfully connected to mongoDB!'
)).catch(e => console.error(e));


const docs = await Character.aggregate([
  {'$match': {
      'dateTime': {
        '$gte': new Date('Fri, 20 Jan 2023 15:00:00 GMT'),
        '$lt': new Date('Wed, 25 Jan 2023 15:00:00 GMT')
      }
    }
  }, {
    '$addFields': {
      'data': {
        'deviceName': 'none'
      }
    }
  }
]);

