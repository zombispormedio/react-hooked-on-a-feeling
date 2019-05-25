import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Deck, Slide, Heading } from "spectacle";
import { withProtection } from "./helpers";
import { SpeechPlayground } from "./components";

const ThePainter = forwardRef((props, ref) => {
  const canvasRef = useRef();
  useImperativeHandle(ref, () => {
    const canvas = canvasRef.current;
    const ctx = canvasRef.current.getContext("2d");
    return {
      drawCircle() {
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
      },

      drawRectangle() {
        ctx.rect(20, 20, 150, 100);
        ctx.stroke();
      },

      drawTriangle() {
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 300);
        ctx.lineTo(300, 300);
        ctx.closePath();
        ctx.stroke();
      },

      clean() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  });
  return <canvas {...props} ref={canvasRef} />;
});

const ThePainterPlayground = () => {
  const painterRef = useRef();

  return (
    <div>
      <ThePainter
        ref={painterRef}
        width="200"
        height="100"
        style={{ border: "1px solid #d3d3d3", backgroundColor: "white" }}
      />
      <button
        type="button"
        onClick={() => {
          painterRef.current.clean();
          painterRef.current.drawCircle();
        }}
      >
        Circle
      </button>
      <button
        type="button"
        onClick={() => {
          painterRef.current.clean();
          painterRef.current.drawRectangle();
        }}
      >
        Rectangle
      </button>

      <button
        type="button"
        onClick={() => {
          painterRef.current.clean();
          painterRef.current.drawTriangle();
        }}
      >
        Triangle
      </button>
    </div>
  );
};

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500}>
    <Slide transition={["zoom"]}>
      <Heading>React Hooked On A Feeling</Heading>
    </Slide>
    <Slide>
      <Heading>useSpeechRecognition</Heading>
      <SpeechPlayground />
    </Slide>
    <Slide>
      <Heading>ThePainter</Heading>
      <ThePainterPlayground />
    </Slide>
  </Deck>
);

export default withProtection({
  skip: process.env.NODE_ENV === "development",
  options: {
    deadline: "2019-06-11 19:00",
    password: [86, 73, 82, 85, 83]
  }
})(Presentation);
