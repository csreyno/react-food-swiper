import React, { useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";

import Card from "./Card";
import data from "../recipes";

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
  let stack = 0;
  let perStack = 10;
  const [gone] = useState(() => new Set());
  let stackRecipes = [];
  for (let i=0; i<perStack; i++) {
     stackRecipes.push(data[stack+i])
  }
  const [currentRecipes, setCurrentRecipes] = useState([data[stack*perStack],data[stack*perStack+1],data[stack*perStack+2],data[stack*perStack+3],data[stack*perStack+4],data[stack*perStack+5],data[stack*perStack+6],data[stack*perStack+7],data[stack*perStack+8],data[stack*perStack+9]]);
  const [props, set] = useSprings(perStack, (i) => ({ //data.length first arg
    ...to(i),
    from: from(i),
  }));

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
          console.log(stackRecipes[i]);
          console.log(stackRecipes[i].id);
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
      // function deleteStackRecipes(){
      //   for (let i=0; i<perStack; i++) {
      //     stackRecipes.pop(i)
      //     }
      //     console.log(stackRecipes);
      //     console.log(stack);
      // }
      // function newStackRecipes(){
      //   for (let i=0; i<perStack; i++) {
      //     stackRecipes.push(data[stack*perStack+i])
      //     console.log(stack*perStack+i)}
      //     console.log(stackRecipes ,"new");
      //     console.log(stack);
      //     setCurrentRecipes(stackRecipes);
      // }
      if (!down && gone.size === perStack){  //=== data.length
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
        // deleteStackRecipes();
        stack++;
        // newStackRecipes();
        setCurrentRecipes([data[stack*perStack],data[stack*perStack+1],data[stack*perStack+2],data[stack*perStack+3],data[stack*perStack+4],data[stack*perStack+5],data[stack*perStack+6],data[stack*perStack+7],data[stack*perStack+8],data[stack*perStack+9]]);}
    }
  );

  return props.map(({ x, y, rot, scale }, i) =>{
    console.log(i)
    console.log(currentRecipes);
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
