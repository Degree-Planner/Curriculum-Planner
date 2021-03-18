import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    email: String
})

const Adminformation = mongoose.model('AdminInformation', adminSchema);

export default Adminformation;