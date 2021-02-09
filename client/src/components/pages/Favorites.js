import React from 'react';

import { newLike } from '../swiper/Deck';

const Favorites = () => {
    return (
        <div className="fav-list">
            console.log(newLike);
            {/* <h1 class="fav-recipes">Your Favorite Recipes</h1>
            <ul>
            ${myRecipes.map(r => `
            <li><a href="/favoriterecipes/${r.id}">${r.title}</a></li>
            `).join('')}
            </ul>

            <div class="swipe-button">
            <a class="btn btn-primary" id="swipe" href="/" role="button"
                >Continue Swiping</a>
            </div> */}
        </div>
    )
};
//for an array of strings; check if added item is already in array
// let newItem = "NEW_ITEM_TO_ARRAY";
// let array = ["OLD_ITEM_1", "OLD_ITEM_2"];

// array.indexOf(newItem) === -1 ? array.push(newItem) : console.log("This item already exists");

// console.log(array)

export default Favorites;
