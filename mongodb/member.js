const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    exp: Number,
    type: String,
    qualification: String
});

module.exports = mongoose.model('FacultyMember', facultySchema);
const express = require('express');
const FacultyMember = require('../models/FacultyMember');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const facultyMembers = await FacultyMember.find();
        res.json(facultyMembers);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching faculty members' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newFacultyMember = new FacultyMember(req.body);
        await newFacultyMember.save();
        res.status(201).json(newFacultyMember);
    } catch (err) {
        res.status(400).json({ message: 'Error adding faculty member' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await FacultyMember.findByIdAndDelete(id);
        res.json({ message: 'Faculty member deleted successfully' });
    } catch (err) {
        res.status(404).json({ message: 'Faculty member not found' });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const facultyMember = await FacultyMember.findByIdAndUpdate(id, updates, { new: true });
        if (!facultyMember) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.json(facultyMember);
    } catch (err) {
        res.status(500).json({ message: 'Error updating faculty member' });
    }
});

module.exports = router;