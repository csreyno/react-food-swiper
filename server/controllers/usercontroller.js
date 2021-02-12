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
    // const {username, password} = req.body
    const username = req.body.usernameReg;
    const password = req.body.passwordReg;
    if (username === '' || password === '') {
        console.log('username or password is blank!', req.baseUrl)
        res.status(400).json({
            message: "Username or password is blank"
        });
    } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        try {
            const newUser = await User.create({
                username,
                hash
            });
            res.status(200).json({
                message: "Success"
            });
        } catch (e) {
            if (e.name === "SequelizeUniqueConstraintError") {
                console.log('That username is taken!');
            }
            console.log("API: username already taken");
            res.status(400).json({
                message: "Username is already taken"
            });      
        }
    }
};

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
                console.log("API: login successful");
                res.status(200).json({
                    message: "Login successful",
                    id: user.id,
                });
                return;
            });    
        } else {
            console.log('password is incorrect');
            res.status(400).json({
                message: "Invalid username or password",
              });
              return;
        }
    } else {
        console.log('not a valid user')
        console.log("API: invalid username");
        res.status(400).json({
            message: "Invalid username or password",
        });
        return;
    }
}

const logout = (req, res) => {
    console.log('logging out...')
    req.session.destroy(() => {
        console.log("API: invalid username");
        res.status(200).json({
            message: "Logout successful",
        });
        return;
    })
}

const loginStatus = (req, res) => {
    console.log("API: checking login status");
    if (req.session.user) {
      res.status(200).json({
        status: "OK"
      });
    } else {
      res.status(400).json({
        status: "no active session"
      });
    }
  
  };

module.exports = {
    newUser,
    processNewUser,
    login,
    processLogin,
    logout,
    loginStatus
}