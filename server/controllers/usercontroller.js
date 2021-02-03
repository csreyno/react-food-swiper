// need to npm i bcryptjs
const bcrypt = require('bcryptjs')
const {layout} = require('../utils')
const {User} = require('../models')

const newUser = (req, res) => {
    res.render('login-form', {
        locals: {
            title: 'Sign up'
        },
        ...layout
    });
};

const processNewUser = async (req, res) => {
    const {username, password} = req.body
    if (username === '' || password === '') {
        console.log('username or password is blank!', req.baseUrl)
        res.redirect(`${req.baseUrl}/new`)
    } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        try {
            const newUser = await User.create({
                username,
                hash
            });
            res.redirect(`${req.baseUrl}/login`)
        } catch (e) {
            if (e.name === "SequelizeUniqueConstraintError") {
                console.log('That username is taken!');
                return res.status(500).send({ success: false, message: 'User already exists!' });
            }
            res.redirect(`${req.baseUrl}/new`)
        }
    }
}

const login = (req, res) => {
    res.render('login-form', {
        locals: {
            title: 'Log in'
        },
        ...layout
    });
};

const processLogin = async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({
        where: {
            username
        }
    })
    if (user) {
        const isValid = bcrypt.compareSync(password, user.hash)
        if (isValid) {
            console.log('Logging in')
            req.session.user = {
                username,
                id: user.id
            };
            req.session.save(() => {
                res.redirect('/members-only')
            });    
        } else {
            console.log('password is incorrect')
            res.redirect(`${req.baseUrl}/login`)
        }
    } else {
        console.log('not a valid user')
        res.redirect(`${req.baseUrl}/login`)
    }
}

const logout = (req, res) => {
    console.log('logging out...')
    req.session.destroy(() => {
        res.redirect('/')
    })
}

module.exports = {
    newUser,
    processNewUser,
    login,
    processLogin,
    logout
}