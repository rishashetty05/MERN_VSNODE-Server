
import { request, response } from 'express';
import User from '../schema/user-schema.js'; 

export const addUser = async (request, response) => {
    const user = request.body;

    const newUser = new User(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message});
    }
}

export const getUsers =  async (request, response) => {

    try {
        const users = await User.find({});
        //console.log(response); 
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message});
    }
}

export const getUser = async (request, response) => {
        console.log(request.params.id);
    try {
        // const user = await User.find({userId: request.params.id}); //mthd 1
        
        //const user = await User.findById(request.params.id); //mthd 2 results in error saying "http://localhost:8000/1  404 (Not Found)" when refreshing edit/{id} url 

        const user = await User.findOne({userId: request.params.id}); //mth3
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message: error.message});
    }
}

export const editUser = async (request, response) => {
    let user = request.body;
    const editedUser = new User(user);

    try {
        await User.updateOne({ userId : request.params.id}, editedUser);
        response.status(201).json(editedUser);
    } catch (error) {
        response.status(409).json({ message: error.message});
    }
}

export const deleteUser = async(request, response) => {
    try{
        await User.deleteOne({userId : request.params.id});
        response.status(200).json({message : 'User deleted successfully'});
    } catch (error){
        response.status(409).json({ message : error.message})
    }
}