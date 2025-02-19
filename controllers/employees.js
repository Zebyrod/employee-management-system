// DEPENDENCIES
const express = require("express");
const router = express.Router();

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

// UPDATE

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

// SHOW 


module.exports = router;