import express from 'express';
import mongoose from 'mongoose';
import DegreeInformation from '../models/degreeInformation.js';

export const getDegrees = async (req, res) => {
    try {
        const degreeInformation = await DegreeInformation.find();

        res.status(200).json(degreeInformation);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getCourses = async (req, res) => {
    const DegreeName = req.body;
    try {
        console.log(DegreeName)
        const degreeInformation = await DegreeInformation.findOne({DegreeName: DegreeName});

        res.status(200).json(degreeInformation.Courses);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

/*export const searchDegrees = async (req, res) => {
    const degree = req.body;
    try {
        const degreeInformation = await DegreeInformation.find({ "DegreeName": { "$regex": degree, "$options": "i" } });


        res.status(200).json(degreeInformation);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}*/

export const createDegree = async (req, res) => {
    const degree = req.body;

    const newDegree = DegreeInformation(degree);
    
    try {
        await newDegree.save();

        res.status(201).json(newDegree);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateDegree = async (req, res) => {
    const {id: _id } = req.params;
    const degree = req.body;

    console.log(req.body);
    console.log(req.body._id);
    
    if(!mongoose.Types.ObjectId.isValid(req.body._id)) return res.status(404).send('No post with that id');

    console.log("Here");

    const updatedDegree = await DegreeInformation.findByIdAndUpdate(req.body._id, degree, { new: true });

    res.json(updatedDegree);
}

export const deleteDegree = async (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    await DegreeInformation.findByIdAndRemove(_id);
    
    res.json({message: 'Degree deleted successfully'});
}