class Carousel {
  constructor(element) {
    this.board = element;

    // add first two cards programmatically
    // this.push()
    // this.push()

    // handle gestures
    // this.handle()
  }

  handle() {
    // list all cards
    this.cards = this.board.querySelectorAll(".card");

    // get top card
    this.topCard = this.cards[this.cards.length - 1];

    // get next card
    this.nextCard = this.cards[this.cards.length - 2];

    // if at least one card is present
    if (this.cards.length > 0) {
      // set default top card position and scale
      this.topCard.style.transform =
        "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";

      // destroy previous Hammer instance, if present
      if (this.hammer) this.hammer.destroy();

      // listen for tap and pan gestures on top card
      this.hammer = new Hammer(this.topCard);
      this.hammer.add(new Hammer.Tap());
      this.hammer.add(
        new Hammer.Pan({
          position: Hammer.position_ALL,
          threshold: 0,
        })
      );

      // pass events data to custom callbacks
      this.hammer.on("tap", (e) => {
        this.onTap(e);
      });
      this.hammer.on("pan", (e) => {
        this.onPan(e);
      });
    }
  }

  onTap(e) {
    console.log({e})
    // get finger position on top card
    let propX =
      (e.center.x - e.target.getBoundingClientRect().left) /
      e.target.clientWidth;

    // get rotation degrees around Y axis (+/- 15) based on finger position
    let rotateY = 15 * (propX < 0.05 ? -1 : 1);

    // enable transform transition
    this.topCard.style.transition = "transform 100ms ease-out";

    // apply rotation around Y axis
    this.topCard.style.transform =
      "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(" +
      rotateY +
      "deg) scale(1)";

    // wait for transition end
    setTimeout(() => {
      // reset transform properties
      this.topCard.style.transform =
        "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";
    }, 100);
  }

  onPan(e) {
    if (!this.isPanning) {
      this.isPanning = true;

      // remove transition properties
      this.topCard.style.transition = null;
      if (this.nextCard) this.nextCard.style.transition = null;

      // get top card coordinates in pixels
      let style = window.getComputedStyle(this.topCard);
      let mx = style.transform.match(/^matrix\((.+)\)$/);
      this.startPosX = mx ? parseFloat(mx[1].split(", ")[4]) : 0;
      this.startPosY = mx ? parseFloat(mx[1].split(", ")[5]) : 0;

      // get top card bounds
      let bounds = this.topCard.getBoundingClientRect();

      // get finger position on top card, top (1) or bottom (-1)
      this.isDraggingFrom =
        e.center.y - bounds.top > this.topCard.clientHeight / 2 ? -1 : 1;
    }

    // get new coordinates
    let posX = e.deltaX + this.startPosX;
    let posY = e.deltaY + this.startPosY;

    // get ratio between swiped pixels and the axes
    let propX = e.deltaX / this.board.clientWidth;
    let propY = e.deltaY / this.board.clientHeight;

    // get swipe direction, left (-1) or right (1)
    let dirX = e.deltaX < 0 ? -1 : 1;

    // get degrees of rotation, between 0 and +/- 45
    let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45;

    // get scale ratio, between .95 and 1
    let scale = (95 + 5 * Math.abs(propX)) / 100;

    // move and rotate top card
    this.topCard.style.transform =
      "translateX(" +
      posX +
      "px) translateY(" +
      posY +
      "px) rotate(" +
      deg +
      "deg) rotateY(0deg) scale(1)";

    // scale up next card
    if (this.nextCard)
      this.nextCard.style.transform =
        "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(" +
        scale +
        ")";

    if (e.isFinal) {
      this.isPanning = false;

      let successful = false;

      // set back transition properties
      this.topCard.style.transition = "transform 200ms ease-out";
      if (this.nextCard)
        this.nextCard.style.transition = "transform 100ms linear";

      // check threshold and movement direction
      if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {
        console.log("swiped right");
        console.log(e.target);
        console.log(e.currentTarget);
        const id = e.target.getAttribute("data-recipe-id")
        newLike(id)
        successful = true;
        // get right border position
        posX = this.board.clientWidth;
      } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {
        console.log("swiped left");
        successful = true;
        // get left border position
        posX = -(this.board.clientWidth + this.topCard.clientWidth);
      } else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) {
        successful = true;
        // get top border position
        posY = -(this.board.clientHeight + this.topCard.clientHeight);
      }

      if (successful) {
        // throw card in the chosen direction
        this.topCard.style.transform =
          "translateX(" +
          posX +
          "px) translateY(" +
          posY +
          "px) rotate(" +
          deg +
          "deg)";

        // wait transition end
        setTimeout(() => {
          // remove swiped card
          this.board.removeChild(this.topCard);
          // add new card
          // this.push()
          // // handle gestures on new top card
          this.handle();
        }, 200);
      } else {
        // reset cards position and size
        this.topCard.style.transform =
          "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";
        if (this.nextCard)
          this.nextCard.style.transform =
            "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)";
      }
    }
  }

  push(img, cardTitle, id) {
    let card = document.createElement("div");
    let image = document.createElement("div");
    let title = document.createElement("div");
    let likes = document.createElement("div");

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(likes);
    card.classList.add("card");
    image.classList.add("image");
    title.classList.add("title");
    likes.classList.add("likes");

    card.setAttribute("data-recipe-id", id)

    let picture = document.createElement("img");
    picture.setAttribute("alt", "food");
    picture.setAttribute("src", img);
    picture.setAttribute("data-recipe-id", id)
    image.appendChild(picture);

    let recipeTitle = document.createElement("h2")
    title.appendChild(recipeTitle)
    recipeTitle.append(cardTitle)
    this.board.appendChild(card);
  }
}


let board = document.querySelector('#board')

let carousel = new Carousel(board)
console.log('hey');

recipeData.forEach(r => {
  carousel.push(r.image, r.title, r.id)
  console.log(r.id) 
})

// for (let i = 1; i < 10; i++) { 
//     carousel.push(`./images/image0${i}.jpg`);
// }

carousel.handle();

//modify push to accept more info
//backend route to render recipe titles from database
// ${arr.map().join("")}

//create a template with two form tags that send different information
//like route form
//swipe left, post to likes page
//dislike route form
//swipe right post to dislikes?(or just go to next image)
console.log(recipeData)