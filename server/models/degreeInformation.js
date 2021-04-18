import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    CourseID: String,
    CourseTitle: String,
    CourseDescription: String,
    MinimumGrade: String,
    CreditHours: Number,
    PreReqs: [String],
    CoReqs: [String],
    Term: Number,
});

const degreeSchema = mongoose.Schema({
    DegreeName: String,
    DegreeDescription: String,
    Courses: [courseSchema]
});

const DegreeInformation = mongoose.model('DegreeInformation', degreeSchema);

export default DegreeInformation;