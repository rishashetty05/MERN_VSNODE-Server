
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
        const user = await User.find({});
        //const user = await User.findById({userId: request.params.id});
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message: error.message});
    }
}
