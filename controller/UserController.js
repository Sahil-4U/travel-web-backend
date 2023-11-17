import { User } from "../modals/UserSingupModal.js";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();

export const UserController = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(401).json({ error: 'Unauthorized - Missing credentials' });
    }
    const hashedPassword = await bcrypt.hash(password, Number(process.env.saltRounds));
    const userdb = new User({ username, email, password: hashedPassword });
    try {
        await userdb.save();
        console.log(userdb)
        return res.status(201).json("User created successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const singin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json('Invalid credentials');
    }
    const Finduser = await User.findOne({ email });
    if (!Finduser) return res.status(401).json('User not exist please singup first');
    const match = await bcrypt.compare(password, Finduser.password);
    if (!match) return res.status(400).json("Invalid password");
    return res.status(201).json('user valid');
}