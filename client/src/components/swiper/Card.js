import React from "react";
import { string, number, array } from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { title, readyInMinutes, cuisines, image } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        <div className="card">
          <Carousel>
            {/* {pics.map((pic, index) => ( */}
            <img src={image} alt="profilePicture" />
            {/* ))} */}
          </Carousel>
          <h3 className="cardtitle">{title}</h3>
          <h5><i class="far fa-clock"></i> {readyInMinutes} minutes</h5>
          <h4>{cuisines}</h4>
        </div>
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  title: string,
  readyInMinutes: number,
  cuisines: array,
  image: array,
};

export default Card;
