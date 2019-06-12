import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated as Anim } from "react-spring";

const fast = { tension: 1500, friction: 150 };
const slow = { mass: 20, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Container = styled.div`
  .hooks-main {
    width: 100%;
    height: 100%;
    background: lightblue;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .b1,
  .b2,
  .b3 {
    position: absolute;
    will-change: transform;
    border-radius: 50%;

    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }

  .b1 {
    width: 170px;
    height: 170px;
    background: #fad61d;
  }

  .b2 {
    width: 350px;
    height: 350px;
    background: #e19720;
  }

  .b3 {
    width: 200px;
    height: 200px;
    background: #fad61d;
  }

  .b1::after,
  .b2::after,
  .b3::after {
    content: "";
    position: absolute;
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
  }

  .b2::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }

  .b3::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }

  .hooks-filter {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: url("#goo");
    overflow: hidden;
  }
`;

export function Goo() {
  const [{ pos1 }, set] = useSpring({ pos1: [0, 0], config: fast });
  const [{ pos2 }] = useSpring({ pos2: pos1, config: slow });
  const [{ pos3 }] = useSpring({ pos3: pos2, config: slow });
  useEffect(() => {
    const intervalId = setInterval(() => {
      const y = Math.random() * window.innerHeight;
      const x = Math.random() * window.innerWidth;
      set({ pos1: [x, y] });
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Container>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div className="hooks-main">
        <div className="hooks-filter">
          <Anim.div
            class="b1"
            style={{
              transform: pos3.interpolate(trans)
            }}
          />
          <Anim.div
            class="b2"
            style={{
              transform: pos2.interpolate(trans)
            }}
          />
          <Anim.div
            class="b3"
            style={{
              transform: pos1.interpolate(trans)
            }}
          />
        </div>
      </div>
    </Container>
  );
}
