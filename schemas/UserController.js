// postController.js
import User from "../schemas/index3";
...
export const upload = async (req, res) => {
  const { title, description } = req.body;
  const User = new User({
    title: title,
    description: description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  await User.save();
  return res.redirect("/");
};



