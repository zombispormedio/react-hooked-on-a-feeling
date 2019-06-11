import React from "react";
import { Slide, Heading, Notes } from "spectacle";
import {
  CodeSandboxSlide,
  CodeSandboxIframe,
  HugeCodePane
} from "../components";

export function UseEffect() {
  return [
    <Slide>
      <Heading>useEffect</Heading>
      <HugeCodePane
        margin="4rem"
        lang="jsx"
        source={require("../examples/use_effect.txt").default}
      />
      <Notes>
        Esto es lo que vas querer usar el 99 %. Ejecuta seguidamente después de
        el componente se renderize y te asegura que no va a bloquear el browser
        painting. Mientras que el componentDidMount y componentDidUpdate se
        ejecuta de forma síncrona después del renderizado.
      </Notes>
    </Slide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/fetch-pikachu-bc42n?fontsize=14&hidenavigation=1&autoresize=1"
        title="Fetch 1"
      />
      <Notes>
        Se hace la llamada al cuando el componente se monta, se maneja el
        loading y los errores, también el caso de que se desmonte. Si no se
        hiciese podría provocar un posible memory leak.
      </Notes>
    </CodeSandboxSlide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/fetch-pokemon-p2xs9?fontsize=14&hidenavigation=1&autoresize=1"
        title="Fetch 2"
      />
      <Notes>
        Si el valor del input cambia mientras se está cargando el anterior, la
        anterior petición tiene que ser cancelada o evitar que cambie el estado.
        Si cambia el valor que se ha hecho submit, se llama al
        componentWillUnmount. Cuando cambia un valor del array, se llama al
        callback del componenWillUnmount. Se evita que se ejecute en el
        componentDidMount porque no hay valor.
      </Notes>
    </CodeSandboxSlide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/countdown-s2wb7?fontsize=14&hidenavigation=1&autoresize=1"
        title="CountDown 1"
      />
      <Notes>
        Cuando el valor de expired cambia, se hace un clearInterval. Expired en
        un principio será false o true, y pasará de true a false, nunca iremos
        atrás en el tiempo
      </Notes>
    </CodeSandboxSlide>,

    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/countdown-with-input-using-key-iyvep?fontsize=14&hidenavigation=1&autoresize=1"
        title="Countdown 2"
      />
      <Notes>
        ¿Qué pasa si la fecha que se introduce expira y cambias a otra que no
        está expirada? ¿Cómo reseteamos el estado? Usando la prop key,
        reinstancia el componente y por lo tanto se resetea el estado. ¿Se puede
        hacer de otra manera? Sí, si supieras la fecha anterior antes de que se
        ejecutase el useEffect, podrías detectar qué ha cambiado, pero ¿cómo
        consigues eso? Lo veremos en el siguiente Hook.
      </Notes>
    </CodeSandboxSlide>
  ];
}
