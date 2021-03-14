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
