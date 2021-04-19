import Admin from '../models/admin.js';
import jwt from 'jsonwebtoken';
import AdminInformation from '../models/admin.js';


export const authAdmin = async (req, res) => {
    const userData = req.body;

    try {
        const adminInformation = await AdminInformation.countDocuments({email: userData.email});

        res.status(200).json(adminInformation);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createAdmin = async (req, res) => {
    const admin = req.body;

    const newAdmin = AdminInformation(admin);

    try {
        await newAdmin.save();

        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}
