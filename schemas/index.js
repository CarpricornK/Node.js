const mongoose = require("mongoose");

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



const exampleSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Example = mongoose.model('measuredrawdata_tests', exampleSchema);

// Add a new field to the schema
exampleSchema.add({ occupation: String, deviceName: String });

Example.findOne({ age: '25' }, (err, device) => {
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


const example = new Example({ name: 'John', age: 25, occupation: 'DeveloperT' });
example.save((err) => {
  if (err) return handleError(err);
  // saved!
});