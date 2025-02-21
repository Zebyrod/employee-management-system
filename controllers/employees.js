// DEPENDENCIES
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const User = require("../models/user.js");
// ROUTES : /users/:userId/employees

// INDEX
router.get('/', async (req, res) => {
    try {
        // look up the user from req.session
        const currentUser = await User.findById(req.session.user._id);
        // render index.ejs passing all of the current user's employee data in the context object
        res.render('employees/index.ejs', {
            employees: currentUser.employees,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});
// NEW
router.get('/new', async (req, res) => {
    res.render('employees/new.ejs');
});
// DELETE
router.delete('/:employeeId', async (req, res) => {
    try {
        // look up the user from req.session
        const currentUser = await User.findById(req.session.user._id);
        // use mongoose.deleteOne to delete the employee information using the id supplied from req.params
        currentUser.employees.id(req.params.employeeId).deleteOne();
        // save changes to the user in database
        await currentUser.save();
        // redirect back to the index page
        res.redirect(`/users/${currentUser._id}/employees`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});
// UPDATE
// Got assistance from Winston... was having an error where my ObjectId had whitespace when generated and added a safety check to make sure the id is coverted into a string to match what is in the database

router.put('/:employeeId', async (req, res) => {
    try {
        let employeeId = req.params.employeeId.trim(); // Ensure no leading/trailing spaces


        // Ensure the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(employeeId)) {
            console.log("Invalid Employee ID format:", employeeId);
            return res.redirect(`/users/${req.session.user._id}/employees`);
        }

        // Convert to ObjectId
        const employeeIdObject = new mongoose.Types.ObjectId(employeeId);

        const currentUser = await User.findById(req.session.user._id);
        if (!currentUser) {
            console.log("User not found");
            return res.redirect('/');
        }


        // Find the employee using .equals() for ObjectId comparison
        const employee = currentUser.employees.find(emp => emp._id.equals(employeeIdObject));

        if (!employee) {
            console.log("Employee ID not found:", employeeId);
            return res.redirect(`/users/${currentUser._id}/employees`);
        }

        // Update employee
        employee.set(req.body);
        await currentUser.save();

        res.redirect(`/users/${currentUser._id}/employees/${employeeId}`);
    } catch (error) {
        console.log("Error:", error);
        res.redirect('/');
    }
});
 
// CREATE
router.post('/', async (req, res) => {
    try {
        // look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // push the new form data (req.body) into the employees array
    currentUser.employees.push(req.body);
    // save these changes to the user
    await currentUser.save();
    // redirect back to the index view
    res.redirect(`/users/${currentUser._id}/employees`);
    } catch (error) {
        // log any errors and redirect back to home page
        console.log(error);
        res.redirect('/');
    }
});
// EDIT
router.get('/:employeeId/edit', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const employee = currentUser.employees.id(req.params.employeeId);
        res.render('employees/edit.ejs', {
            employee: employee,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


// SHOW 
router.get('/:employeeId', async (req, res) => {
    try {
        // look up the user from req.session
        const currentUser = await User.findById(req.session.user._id);
        // find the employee by the employeeId supplied from req.params
        const employee = currentUser.employees.id(req.params.employeeId);
        // render the show page, passing the employee data in the context object
        res.render('employees/show.ejs', {
            employee: employee,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;