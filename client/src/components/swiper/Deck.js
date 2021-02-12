import React, { useState, useEffect } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import axios from 'axios'

import Card from "./Card";

import "../App.css";

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
  const [newRecipes, setNewRecipes] = useState([{}])
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const [timestamp, setTimestamp] = useState(0);
  const [likeCount, setLikeCount] = useState();
  const [props, set] = useSprings(perStack, (i) => ({ //data.length first arg
    ...to(i),
    from: from(i),
  }));
  
  const importRecipes = async () => {
    const resp = await axios.get('/api/recipe-card')
    console.log(resp.data)
    setNewRecipes(resp.data);
    console.log("recipes gathered")
  };

  const newLike = async (recipeid) => {
    const resp = await axios.post('/api/members-only/addlike', { 
    recipe_id: recipeid
    });
    console.log(resp.data)
    console.log(recipeid)
  }
    
  const createStack = () => {
  const cards = newRecipes.slice(stack*perStack, perStack*(stack+1)).map(r => {
    let cardFormat = {
      id: r.id,
      title: r.title,
      readyInMinutes: r.readyInMinutes,
      image: r.image
    }
    return cardFormat
  });
  setCurrentRecipes(cards)
  console.log("Current recipes updated", cards.length)
  };
  
  const nextStack = (s) => {
    setStack(s+1);
  };

  // const likeCountInc = (like) => {
  //   setLikeCount(like+1)
  // }

  // const prevStack = () => {
  //   stack <= 0 ? setStack(stack-1) : setStack(stack)// set to not go lower than 0
  // };

  useEffect(() => {
    importRecipes();
  }, []);

  useEffect(() => {
    createStack();
    
  }, [newRecipes, stack]);

  // useEffect(() => {
  //   if (currentRecipes && currentRecipes.length) {
  //     console.log("==================")
  //     console.log("active")
  //     let i = 0;
  //     let id = currentRecipes[i].id
  //     newLike(id)
  //     i++
  //     console.log(id)    
  // }   
  // }, [likeCount]);

  useEffect(() => {
    if (timestamp !== 0) {
      nextStack(stack);
      console.log("Next stack", stack)
    }
  }, [timestamp]);

  


  const bind = useGesture(
    ({
      args: [index, id], 
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;
      
      const dir = xDir < 0 ? -1 : 1;
      
      if (!down && trigger) gone.add(index);
      
      set((i) => {
        console.log(id, "=======================")
        if (index !== i) return;
        //swipe left or right fn that identifies direction
        if (!down && dir === 1 && dir !== 0) {
          // console.log(i);
          console.log("====================")
          console.log("swiped right", id);
          newLike(id)
          // console.log(likeCount)
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
