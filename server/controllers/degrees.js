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
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedDegree = await DegreeMessage.findByIdAndUpdate(_id, degree, { new: true });

    res.json(updatedDegree);
}

