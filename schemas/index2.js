const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb://youhost:dbghtmxm19@114.108.185.227:27017/admin",
  {
    useNewUrlParser: true,
  }
).then(() => console.log("Mongoose Connected"))
 .catch((err) => console.log(err));


 const UserSchema = new mongoose.Schema({
      name: String,
      age: Number,
      saveDate: {
        type: Date,
        default: Date.now,
      },
    });


    const User = mongoose.model("MeasuredRawData_202301", UserSchema);

    const me = new User({
      command: "Mike",
    });

    UserSchema.add({
//    newField4: { type: String, default: 'defaultValue' },
//    newField5: { type: String, default: 'defaultValue' },
//    data: {
//          deviceName3: {type: String, default: 'defaultValue'}
//      },
    });

    User.findOne({ deviceId: '173' }, (err, device) => {
        if (err) {
            console.log(err);
            return;
        }
        // Update the document
        device.deviceName = 'DeviceName';
        device.save((err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Device updated successfully!');
        });
    });


    User.updateMany({}, {
    $set: {
//    newField4: 'newValue',
//    data: {
//        deviceName3: "asdtest2"
//    }
     }
    },






    (err, raw) => {
    if (err) {
    console.log(err);
    }
    console.log(raw);
    });

    me.save()
      .then(() => {
        console.log(me);
      })
      .catch((err) => {
        console.log("Error : " + err);
      });








