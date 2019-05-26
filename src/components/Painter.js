import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Painter = forwardRef((props, ref) => {
  const canvasRef = useRef();
  useImperativeHandle(ref, () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const size = 250;
    const dsize = size / 2;
    return {
      drawCircle() {
        const { height, width } = canvas;
        const radius = size / 3.25;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2 + dsize - radius, radius, 0, 2 * Math.PI);
        ctx.stroke();
      },

      drawSquare() {
        const { height, width } = canvas;
        ctx.beginPath();
        ctx.rect(width / 2 - dsize, height / 2 - dsize, size, size);
        ctx.stroke();
      },

      drawTriangle() {
        const { height, width } = canvas;
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2 - dsize);
        ctx.lineTo(width / 2 - dsize, height / 2 + dsize);
        ctx.lineTo(width / 2 + dsize, height / 2 + dsize);
        ctx.closePath();
        ctx.stroke();
      },

      drawLine() {
        const { height, width } = canvas;
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2 - dsize);
        ctx.lineTo(width / 2, height / 2 + dsize);
        ctx.closePath();
        ctx.stroke();
      },

      drawImageFromUrl(url) {
        const { height, width } = canvas;
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(
            img,
            width / 2 - img.width / 2,
            height / 2 - img.height / 2
          );
        };
        img.src = url;
      },

      clean() {
        const { height, width } = canvas;
        ctx.clearRect(0, 0, width, height);
      }
    };
  });
  return <canvas {...props} ref={canvasRef} />;
});

export const PainterPlayground = () => {
  const painterRef = useRef();
  return (
    <div>
      <Painter
        ref={painterRef}
        width="1024"
        height="300"
        style={{ border: "1px solid #d3d3d3", backgroundColor: "white" }}
      />
      <button
        type="button"
        onClick={() => {
          painterRef.current.drawCircle();
        }}
      >
        Circle
      </button>
      <button
        type="button"
        onClick={() => {
          painterRef.current.drawSquare();
        }}
      >
        Square
      </button>

      <button
        type="button"
        onClick={() => {
          painterRef.current.drawTriangle();
        }}
      >
        Triangle
      </button>

      <button
        type="button"
        onClick={() => {
          painterRef.current.drawLine();
        }}
      >
        Line
      </button>
      <button
        type="button"
        onClick={() => {
          painterRef.current.drawImageFromUrl(
            "https://vignette.wikia.nocookie.net/digimon/images/0/02/Kabuterimon.gif/revision/latest?cb=20091231004037&path-prefix=es"
          );
        }}
      >
        Kabuterimon
      </button>
      <button
        type="button"
        onClick={() => {
          painterRef.current.clean();
        }}
      >
        Clean
      </button>
    </div>
  );
};
