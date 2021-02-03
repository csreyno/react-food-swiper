const {memberLayout} = require('../utils')
const {likes} = require('../models')
const {recipes} = require('../models')

const membersOnly = async (req, res) => {
    const { username } = req.session.user;
    const allRecipes = await recipes.findAll()

    res.render('members-only', {
        locals: {
            username,
            allRecipes
        },
        ...memberLayout
    })
};

const addLike = async (req, res) => {
    const { id } = req.session.user
    const { recipeid } = req.body;

    const newLike = await likes.create({
        recipe_id: recipeid,
        user_id: id,
    });
    //console.log(newLike)
    // res.redirect('/members-only')
    res.json({status: 'ok'})
}

// const newLike = (id, recipeid) => {
//     console.log(id);
//     console.log(recipeid)
//         fetch('members-only/addlike', { 
//     method: 'POST',
//     headers: {
//     //   'Content-Type': 'application/json'
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify({
//         recipeid,
//         id
//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error => {
//         console.error('Error:', error)
//     }));
// }

module.exports = {
    membersOnly,
    addLike
};