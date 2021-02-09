require('dotenv').config();
const {Recipe} = require("./models")
let data = require('./data')

const main = async () => {

for (let r of data) {
    let ingredients = r.extendedIngredients.map(i => {
        return (i.original)
    });

    await Recipe.create({
        title: r.title,
        readyInMinutes: r.readyInMinutes,
        ingredients: ingredients,
        preparation: r.instructions,
        image: r.image
    });
}}
main();
