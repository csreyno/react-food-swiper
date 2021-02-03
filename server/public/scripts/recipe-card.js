const generateRecipeCard = () => {
    let card = document.createElement("div");
    let title = document.createElement("div");
    let description = document.createElement("div");
    let image = document.createElement("div");
    let ingredients = document.createElement("div");
    let prep = document.createElement("div");

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(image);
    card.appendChild(ingredients);
    card.appendChild(prep);

    card.classList.add("card");
    title.classList.add("title");
    description.classList.add("description")
    image.classList.add("image");
    ingredietns.classList.add("ingredients");
    prep.classList.add("prep");

    let picture = document.createElement("img");
    picture.setAttribute("alt", "food");
    picture.setAttribute("src", img);
    image.appendChild(picture);
    board.appendChild(card);
    };

let board = document.querySelector('#board')