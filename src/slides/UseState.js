import React from "react";
import { Slide, Heading, Notes, Text, Appear } from "spectacle";
import {
  CodeSandboxSlide,
  HugeCodePane,
  CodeSandboxIframe
} from "../components";

export function UseState() {
  return [
    <Slide>
      <Heading>useState</Heading>
      <HugeCodePane
        margin="4rem"
        lang="jsx"
        source={require("../examples/use_state.txt").default}
      />
      <Notes>
        El hooks más sencillo. Substituye al this.setState. Permite
        contextualizar y fragmentar el estado como se necesite. Te permite poner
        el nombre de variable que quieras. Está formado por un array de dos
        elementos: el estado actual y la función de asignación, que acepta un
        valor o una función que como parámetro es el estado anterior.
      </Notes>
    </Slide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/classic-usestate-fsvc3?fontsize=14&hidenavigation=1&autoresize=1"
        title="useState1"
      />
    </CodeSandboxSlide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/comic-books-wishlist-zmlb9?fontsize=14&hidenavigation=1&autoresize=1"
        title="useState 2"
      />
    </CodeSandboxSlide>,
    <Slide>
      <Heading margin="-8rem auto 4rem auto">useReducer</Heading>
      <HugeCodePane
        lang="jsx"
        source={require("../examples/use_reducer.txt").default}
      />
      <Notes>
        Quién sepa algo de Redux, seguro que recordará los Reducers. En Redux
        existen 3 elementos clave, el estado, las acciones y los reducers
      </Notes>
    </Slide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/comic-books-wishlist-with-usereducer-ur0sz?fontsize=14&hidenavigation=1&autoresize=1"
        title="useReducer"
      />
    </CodeSandboxSlide>,
    <Slide>
      <Text textColor="secondary">useState es internamente...</Text>
      <Appear>
        <Heading>useReducer</Heading>
      </Appear>
      <Appear>
        <div>
          <HugeCodePane
            margin="4rem"
            lang="jsx"
            source={require("../examples/use_state_internal.txt").default}
          />
        </div>
      </Appear>
    </Slide>
  ];
}
