const {memberLayout} = require('../utils')
const {Like} = require('../models/')
const {recipe} = require('../models')

const membersOnly = async (req, res) => {
    const { username } = req.session.user;
    const allRecipes = await recipe.findAll()

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

    const newLike = await Like.create({
        recipe_id: recipeid,
        user_id: id,
        like_count: 0
    })
        return res.status(200).json({
        message: "Success"
    });
    
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