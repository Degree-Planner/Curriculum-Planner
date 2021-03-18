import mongoose from 'mongoose';

const degreeSchema = mongoose.Schema({
    DegreeName: String,
    DegreeDescription: String
});

const DegreeInformation = mongoose.model('DegreeInformation', degreeSchema);

export default DegreeInformation;