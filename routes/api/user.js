const express = require('express')
const router = express.Router()
const User = require('../../database/models/user')
const passport = require('../../passport');


router.post('/', (req, res) => {
    console.log('user signup, router.post on user.js');

    const { username, password, typeUser } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
            return res.json(err);
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                typeUser: typeUser //errored after this was added
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/login', (req, res) => {
    console.log('REQ.BODY: ', req.body);

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ notLoggedIn: err })
        }
        if (!user) {
            console.log(info);
            return res.status(403).json({ notLoggedIn: info })
        }
        console.log('logged in...user.js route, user is: ', user);
        
        req.session.save();
        res.json(user);
    })(req, res);
})
    

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log('This is the req.user in BE user.js route: ', req)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.get('/logout', (req, res) => {
    if (req.user) {
        req.logout();
        req.user= null;
        req.session = null;
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
    console.log('Logged out, BE user.js');
})

module.exports = router
