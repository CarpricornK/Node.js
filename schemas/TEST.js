    const mongoose = require("mongoose");
    const { Schema } = mongoose;

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



    const sampleSchema = new mongoose.Schema({
        _id: {
            type: Schema.Types.ObjectId,
        },
        command: {
            type: String,
        },
        companyId: {
            type: String,
        },
        data: {
            deviceName: String,
            deviceId: String,
            channelCount: Number,
            channel: [
                {
                    channelId: String,
                    pointCount: Number,
                    pointId: String,
                    value: String,
                    values: [
                        {
                            pointId: String,
                            value: Number,
                        },
                    ],
                },
            ],
        },
        dateTime: {
            type: Date,
        },
        engineId: {
            type: String,
        },
    });


    //Aggregate
    const Sample = mongoose.model('measuredrawdata_202301', sampleSchema);
    Sample.aggregate([
        { $match:
                {
                    'dateTime': {
                        '$gte': new Date('Fri, 20 Jan 2023 15:00:00 GMT'),
                        '$lt': new Date('Wed, 25 Jan 2023 15:00:00 GMT')
                    }
                }
        },
        { $addFields: {
                'data': {
                    'deviceName': 'SU'
                }
            }
        }
    ])
      .exec((err, result) => {
      if (err) console.error(err);
      console.log(result);
      Sample.updateMany(
      {
      'dateTime': {
      '$gte': new Date('Fri, 20 Jan 2023 15:00:00 GMT'),
      '$lt': new Date('Wed, 25 Jan 2023 15:00:00 GMT')
      }
      },
      { $set: { 'data.deviceName': 'SU' } },
      { multi: true },
      (error, data) => {
      if (error) console.error(error);
      console.log(data);
      }
      );
      });

      Sample.find({}, { "data.deviceId": 1 }, function(err, docs) {
        if (!err) {
          let deviceIdArray = docs.map(doc => doc.data.deviceId);
          console.log(deviceIdArray);

    // 여기서부터 mysql
    const mysql = require('mysql2');

    const connection = mysql.createConnection({
      host: '114.108.185.227',
      user: 'root',
      password: 'dbghtmxm1!',
      database: 'Factory_busungcord'
    });


    connection.connect(function(err) {
      if (err) throw err;
      console.log('Connected to MySQL!');
    });
    const str1 = deviceIdArray;

    const powerQuery =
            `SELECT name FROM Device WHERE id IN (`+deviceIdArray+`)`;

    connection.query(powerQuery, function (error, results, fields) {
      if (error) throw error;

      // results 변수에 테이블 데이터가 담깁니다.
      const tableData = results;

      console.log('powerQuery : ');
      console.log(powerQuery);
      console.log('tableData : ');
      console.log(tableData);
    });

    connection.end();


        } else {
          console.log(err);
        }
      });

