import React from "react";
import { string, number, array } from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  if (data && data.length && data[i]) {
    console.log(data[i])
    const { id, title, readyInMinutes, image } = data[i];
  
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
          {...bind(i, id)}
          style={{
            transform: interpolate([rot, scale], trans),
          }}
        >
          <div className="card">
            <Carousel>
              {/* {pics.map((pic, index) => ( */}
              <img src={image} alt="foodPicture" />
              {/* ))} */}
            </Carousel>
            <h3 className="cardtitle">{title}</h3>
            <h5><i className="far fa-clock"></i> {readyInMinutes} minutes</h5>
          </div>
        </animated.div>
      </animated.div>
    );
  } else {
    return null;
  }
};

Card.propTypes = {
  title: string,
  readyInMinutes: number,
  image: array,
};

export default Card;
