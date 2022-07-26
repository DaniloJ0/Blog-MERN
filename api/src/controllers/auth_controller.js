import User  from '../models/user_model.js'
import bcrypt from 'bcrypt'


export const register = async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username && !email && !password) return res.status(400).json({msg: 'Fields required'})
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt)
    const newUser= await User.create({
        username,
        email,
        password: hashedPass,
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.status(501).json({msg: 'User not registered'}))
}


export const login = async (req, res)=>{
    const {username, password} = req.body;
    if(!username && !password) return res.status(400).json({msg: 'Fields required'})
    const user = await User.findOne({username})
    if(!user) return res.status(404).json({msg: 'Wrong Credentials'})
    const validate = await bcrypt.compare(password, user.password)
    if(!validate) return res.status(404).json({msg: 'Wrong Credentials'})
    res.status(200).json(user)
}