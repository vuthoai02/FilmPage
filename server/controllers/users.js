import { UserModel } from "../models/UserModel.js";

export const getUser = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await UserModel.findById(userId).select("-password");
    return res.json({ success: true, message: "Lấy thông tin thành công", data: user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Bạn chưa đăng nhập!" });
  }
};

// export const createUser = async (req, res) => {
//   try {
//     const newUser = req.body;

//     console.log(newUser);

//     const user = new UserModel(newUser);
//     await user.save();

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };
