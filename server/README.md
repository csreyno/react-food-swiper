# Food-Finder

Tinder like app to find great food and prepare some awesome meals.

User Story

As a user I may feel adventurous and try something new. The Food Finder app allows me to swipe throw pictures of meals until I find the right meal for to cook. Once I like a meal it will give me the recipe and can start prepairing my meal.

Models
npx sequelize-cli model:generate --name "users" --attributes 'username:string, hash:string'

npx sequelize-cli model:generate --name "recipes" --attributes 'title:string, desc:string, preparation:string, category:string, ingredients:string, image:string'

npx sequelize-cli model:generate --name "likes" --attributes 'recipe_id:integer, user_id:integer, likeCount:integer'
