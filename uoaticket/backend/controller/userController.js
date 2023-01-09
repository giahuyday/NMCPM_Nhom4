import { userModel } from "../models/userModel.js";

export const getUser =  async(req, res) => {
    try{
        const users = await userModel.find()
        console.log('user',users)
        res.status(200).json(users)
        
    }catch(err){
        res.status(500).json({error: err })
    }
};

export const createUser = async(req, res) => {
    try{
        const newUsers = req.body;
        
        const user = new userModel(newUsers);
        await user.save();
        res.send('ok')
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({error: err })
    }
}

export const updateUser =  async(req, res) => {
    try{
        const updateUser = req.body;
        
        const user = await userModel.findOneAndUpdate({_id: updateUser._id}, updateUser, {new: true});
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({error: err })
    }
}
