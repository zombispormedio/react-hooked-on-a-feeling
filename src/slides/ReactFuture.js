import React from "react";
import { Slide, Heading, Notes } from "spectacle";
import { CodeSandboxSlide, CodeSandboxIframe, Goo } from "../components";

export function ReactFuture() {
  return [
    <Slide bgColor="secondary">
      <Goo />
      <Heading style={{ zIndex: 10, position: "absolute" }}>
        El futuro de React
      </Heading>
      <Notes>
        Todavía quedan una serie de métodos de las clases por implementar en
        Hooks, pero no es algo que nos quite el sueño a la hora de usarlos. -
        componentDidCatch, getSnapshotBeforeUpdate. React Router: La próxima
        versión tendrá un lavado de cara importante, sin breaking changes,
        soportando hooks. Ryan Florence usará lo aprendido en Reach Router para
        aplicarlo a React router.
        https://reacttraining.com/blog/reach-react-router-future/ Apollo Client:
        Están en ello, pero extra oficialmente existe una librería que los
        integra. https://github.com/trojanowski/react-apollo-hooks *-hook Booom:
        actualmente se están haciendo muchas librerías con el sufijo -hook que
        integran hooks con toda clase de cosas. Vue.js: Existe una propuesta
        para incluir Hooks en Vue.js, en la próxima versión seguramente los
        incluya Adiós a las clases, el equipo de React se concentrará en los
        Hooks, pero aún seguirán ahí como Legacy. 1. Concurrent Mode: permitirá
        a los componentes renderizar sin bloquear el main thread 2. Suspense for
        Data Fetching: permitirá asociar de forma más fácil el code splitting
        con el Data Fetching y además incluirá caché.
      </Notes>
    </Slide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/react-hooks-in-libraries-react-spring-qsw6f?fontsize=14&hidenavigation=1&autoresize=1"
        title="Painter"
      />
    </CodeSandboxSlide>
  ];
}
