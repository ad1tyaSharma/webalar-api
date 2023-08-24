const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  //console.log(req.body);
  const { name, email, password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  try {
    const response = await User.create({
      name,
      email,
      password: hashedPwd,
      profilePic
    });
    //console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.status(400).json({
        error: "User Alreasy Exists",
      });
    }
    throw error;
  }
res.json({
    msg: "Account has been created",
  });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
    
        if (!user || !await bcrypt.compare(password, user.password)) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const token = await jwt.sign(
                    {
                      id: user._id,
                      email: user.email,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      image: user.profilePic,
                    },
                    process.env.JWT_SECRET
                  );
                  console.log(token);
        res.status(200).json({ token });
      } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
      }
};


//   async (err, data) => {
//     console.log(data);
//     if (err) {
//       console.log(err);
//     }
//     if (!data) {
//       return res.status(401).json({
//         error: "User not found",
//       });
//     }
//     if (data && (await bcrypt.compare(password, data.password))) {
//       // the username, password combination is successful
//       console.log("correct credentials");
//       const token = await jwt.sign(
//         {
//           id: data._id,
//           email: data.email,
//           name: data.name,
//           role: data.role,
//           image: data.profilePic,
//         },
//         process.env.JWT_SECRET
//       );
//       console.log(token);
//       if (!req.session.user) {
//         req.session.user = {
//           id: data._id,
//           email: data.email,
//           name: data.name,
//           role: data.role,
//           image: data.profilePic,
//         };
//       }
//       res.status(201).cookie("token", token, {
//         expires: new Date(Date.now() + 24 * 3600000 * 30), // cookie will be removed after 30 days
//       });
//     } else {
//       return res.status(401).json({
//         error: "Invalid Credentials",
//       });
//     }
//   }
exports.getUser = async(req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user details' });
  }
};
