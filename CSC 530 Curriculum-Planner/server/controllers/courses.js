import express from 'express';
import mongoose from 'mongoose';
import CourseInformation from '../models/courseInformation.js';

export const getCourses = async (req, res) => {
    try {
        const courseInformation = await CourseInformation.find();

        res.status(200).json(courseInformation);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createCourses = async (req, res) => {
    const course = req.body;

    const newCourse = CourseInformation(course);

    try {
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export const updateCourse = async (req, res) => {
    const { id: _id } = req.params;
    const course =  req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedCourse = await CourseMessage.findByIdAndUpdate(_id, course, { new: true });

    res.json(updatedCourse);
}