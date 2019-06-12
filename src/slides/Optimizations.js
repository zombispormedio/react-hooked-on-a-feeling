import React from "react";
import { Slide, Heading, Notes } from "spectacle";
import { HugeCodePane } from "../components";

export function Optimizations() {
  return [
    <Slide>
      <Heading lineHeight={1.2}>
        useCallback like a fool{" "}
        <span role="img" aria-labelledBy="joke">
          🤡
        </span>
      </Heading>
      <HugeCodePane
        margin="4rem"
        lang="jsx"
        source={require("../examples/use_callback.txt").default}
      />
      <Notes>
        Tengo que disculparme con vosotros y con mis compañeros de trabajo, he
        abusado del useCallback sin entenderlo del todo bien, pensando que lo
        que hacía era una buena práctica, pero no. El useCallback persiste un
        inline function entre los renders del componente No ahorras memoria por
        usarlo, al contrario, persistes esa función y haces el doble de cosas.
        ¿Para qué sirve entonces? Para Reference Equality. Recordad ejemplo que
        teníamos antes con el canvas, si vuelve a renderizar, el canvas se
        vuelve a crear y se borra. No nos interesa que si cambia una función
        tenga que volver a renderizar. ¿Pero y si quiero eso en todos? No es
        necesario, React es super rápido como para que realmente las veces que
        un componente se renderize, afecte a tu performance. Digamos que usando
        el useCallback haríamos más trabajo, instanciamos una función, un array
        y llamamos una función, mientras que con una inline function solo
        creamos una nueva función y la anterior seré recogida por el garbage
        collector.
      </Notes>
    </Slide>,
    <Slide>
      <Heading>useMemo</Heading>
      <HugeCodePane
        margin="4rem"
        lang="jsx"
        source={require("../examples/use_memo.txt").default}
      />
      <Notes>
        El useMemo del mismo modo que el useCallback se puede usar para
        Reference Equality y cálculos complejos. Performance Inline Functions
        ¿Pero crear tantas cosas no afecta a la performance? En los navegadores
        actuales, el coste es poco significativo. Es mucho más costoso
        instancias clases y el binding event handlers en el constructor.
        https://www.notion.so/zombispormedio/Optimizaciones-useMemo-useCallback-0ad6e29a515b4921be7bc3c1aed86cf8#002aebf8f5834f7caad23c931d0c27b2
      </Notes>
    </Slide>,
    <Slide>
      <Heading>
        Usar React Hooks mejora tu Rendimiento{" "}
        <span role="img" aria-labelledBy="grinning">
          😬
        </span>
      </Heading>
    </Slide>
  ];
}
