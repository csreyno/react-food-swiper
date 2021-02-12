const {memberLayout} = require('../utils')
const {Like} = require('../models/')
const {recipe} = require('../models')

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
    const { recipe_id } = req.body;
    console.log(recipe_id)

    const oldLike = await Like.findOne({
        where: {
            user_id:id,
            recipe_id
        },
        recipe_id,
        user_id: id
    });

    if (oldLike) {
        oldLike.like_count++
        await oldLike.save()
    } else {
    const newLike = await Like.create({
        recipe_id: recipe_id,
        user_id: id,
        like_count: 1
    })
        console.log(newLike)
    } 
        return res.status(200).json({
        message: "Success"
    });
}

module.exports = {
    membersOnly,
    addLike
};