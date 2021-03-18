import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    DepartmentCode: String,
    CourseNumber: Number,
    CourseTitle: String,
    CourseDescription: String,
    MinimumGrade: String,
    CreditHours: Number,
    PreReqs: [String],
    CoReqs: [String]
});

const CourseInformation = mongoose.model('CourseInformation', courseSchema);

export default CourseInformation;