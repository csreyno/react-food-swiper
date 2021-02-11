import React, { useState, useEffect } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import axios from 'axios'

import Card from "./Card";

import "../App.css";

// const newLike = async (recipeid) => {
//   const resp = await axios.post('/api/members-only/addlike', { 
//   recipe_id: {recipeid}
//   });
//   console.log(resp.data)
//   console.log({recipeid})
// }

const to = (i) => ({
  x: 0,
  y: i * -1,
  scale: 1,
  rot: -3 + Math.random() * 6,
  delay: i * 210,
});
const from = (i) => ({ rot: 0, scale: 1, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(12deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [stack, setStack] = useState(0)
  const perStack = 10;
  const [gone] = useState(() => new Set());  
  // const [likedRecipes, setLikedRecipes] = useState([{}])
  const [newRecipes, setNewRecipes] = useState([{}])
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const [timestamp, setTimestamp] = useState(0);
  const [props, set] = useSprings(perStack, (i) => ({ //data.length first arg
    ...to(i),
    from: from(i),
  }));

  console.log(stack)
  
  const importRecipes = async () => {
    const resp = await axios.get('/api/recipe-card')
    console.log(resp.data)
    setNewRecipes(resp.data);
    console.log("recipes gathered")
  };
    
  const createStack = () => {
  const cards = newRecipes.slice(stack*perStack, perStack*(stack+1)).map(r => {
    let cardFormat = {
      title: r.title,
      readyInMinutes: r.readyInMinutes,
      image: r.image
    }
    return cardFormat
  });
  setCurrentRecipes(cards)
  console.log(cards)
  console.log("Current recipes updated", cards.length)
  };
  
  const nextStack = (s) => {
    setStack(s+1);
  }

  const prevStack = () => {
    stack <= 0 ? setStack(stack-1) : setStack(stack)// set to not go lower than 0
  }

  useEffect(() => {
    importRecipes();
  }, []);

  useEffect(() => {
    createStack();
  }, [newRecipes]);

  useEffect(() => {
    nextStack(stack);
    createStack();
    console.log("Next stack", stack)
  }, [timestamp])

  // useEffect(() => {
    // nextStack();
  //   createStack();
  //   console.log("Next stack is loaded")
  // }, [gone]);

  // for (let i=0; i<perStack; i++) {
  //   console.log(cards[i].title)
  //   setLikedRecipes(cards[i].title)
  //   console.log(likedRecipes)
//     // setLikedRecipes(oldStack)
//     // console.log(likedRecipes)
//  }

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;
      
      const dir = xDir < 0 ? -1 : 1;
      // console.log(down, dir)
      // if (!down && dir === 1) {
      //   console.log("swiped right");

      //   // console.log(stackRecipes[i]);
      // }
      // if (!down && dir === -1) {
      //   console.log("swiped left");
      //   // console.log(stackRecipes[i]);
      // }
      
      if (!down && trigger) gone.add(index);
      
      set((i) => {







        if (index !== i) return;
        //swipe left or right fn that identifies direction
        if (!down && dir === 1) {
          // console.log(i);
          console.log("swiped right");
          // console.log(cards[i].id);
          // console.log(stackRecipes[i].id);
          // const id = stackRecipes[i].id;
          // newLike(id)
        }
        if (!down && dir === -1) {
          console.log(i);
          console.log("swiped left");
        }
        
        const isGone = gone.has(index);
        
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
        
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        
        const scale = down ? 1.1 : 1;
        
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 20, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      // function newStackRecipes(){
      //   for (let i=0; i<perStack; i++) {
      //     stackRecipes.push(data[stack*perStack+i])
      //     console.log(stack*perStack+i)}
      //     console.log(stackRecipes ,"new");
      //     console.log(stack);
      //     setCurrentRecipes(stackRecipes);
      // }
      
      if (!down && gone.size === perStack) {  //=== data.length
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
        
        setTimestamp((new Date()).getTime());
        
      }
    }
  );

  return props.map(({ x, y, rot, scale }, i) =>{
   return (
    <Card
      key={i}
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      data={currentRecipes}
      bind={bind}
    />
  )});
}

export default Deck;
