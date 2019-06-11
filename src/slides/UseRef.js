import React from "react";
import { Slide, Heading, Notes } from "spectacle";
import {
  CodeSandboxSlide,
  HugeCodePane,
  CodeSandboxIframe
} from "../components";

export function UseRef() {
  return [
    <Slide>
      <Heading>DOM Ref</Heading>
      <HugeCodePane
        margin="4rem"
        lang="jsx"
        source={require("../examples/ref.txt").default}
      />
      <Notes>
        ¿Cómo se accede a un elemento del DOM en React? No lo he explicado en el
        React en 5 minutos, pero no es esencial. Al menos hasta los Hooks solo
        se usaba en librerías que manipulasen el DOM o que integrasen con
        librerías de terceros.
      </Notes>
    </Slide>,
    <Slide>
      <Heading>useRef</Heading>
      <HugeCodePane
        margin="4rem"
        lang="jsx"
        source={require("../examples/use_ref.txt").default}
      />
      <Notes>
        Ahora los refs son el equivalente al this en las clases, te permiten
        mutar un valor en el ciclo de vida del componente sin que se vuelva a
        renderizar.
      </Notes>
    </Slide>,
    <Slide>
      <Heading margin="-8rem auto 2rem auto">usePrevious</Heading>
      <HugeCodePane
        lang="jsx"
        source={require("../examples/use_previous.txt").default}
      />
    </Slide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/countdown-with-input-and-useprevious-xobu7?fontsize=14&hidenavigation=1&autoresize=1"
        title="Countdown 3"
      />
      <Notes>
        Es una alternativa, pero no es recomendado por la documentación de React
      </Notes>
    </CodeSandboxSlide>
  ];
}
