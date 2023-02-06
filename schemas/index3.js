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

    export default Post;

    const me = new User({
      command: "Mike",
    });

    me.save()
      .then(() => {
        console.log(me);
      })
      .catch((err) => {
        console.log("Error : " + err);
      });








