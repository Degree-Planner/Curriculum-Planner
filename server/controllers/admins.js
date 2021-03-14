import Admin from '../models/admin.js';
import jwt from 'jsonwebtoken';
import AdminInformation from '../models/admin.js';


export const authAdmin = async (req, res) => {
    const userEmail = req.body.email;
    try {
        const adminInformation = await AdminInformation.countDocuments({email: userEmail});

        res.status(200).json(adminInformation);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
