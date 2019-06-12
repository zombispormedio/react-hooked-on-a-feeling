import React from "react";
import { Slide, Heading, Image, Notes, Layout } from "spectacle";
import { lolGuy } from "../images";
import {
  LeftCodePane,
  FiveMinutes,
  LeftCodeFill,
  RightCodeFill
} from "../components";

export function ReactInFiveMinutes() {
  console.log(window.location.href.includes("presenter"));
  return [
    <Slide>
      <Heading>Pero antes...</Heading>
    </Slide>,
    <Slide>
      <Heading>React en 5 minutos</Heading>
    </Slide>,
    <Slide transition={["zoom"]}>
      <Image src={lolGuy} />
      <audio autoPlay>
        <source src="1minute.mp3" type="audio/mpeg" />
        <track kind="captions" />
      </audio>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings1.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles>
            <FiveMinutes.Greetings1 />
          </FiveMinutes.Styles>
        </RightCodeFill>
      </Layout>
      <Notes>
        Hablando con conocidos y amigos muchos no conocen nada de React, viene
        de Angular.js, Jquery, Vue.js. Así que les he preparado esto. Esto es un
        componente. Una función algo sencillo. Cuando instancias un componente
        se llama elemento. En el caso de una web para renderizar una web, se usa
        React Dom, que se le pasa por parámetro el componente Root y el
        contendor del DOM donde se va a montar toda la aplicación. La librería
        de React es independiente de donde se dibuje.
      </Notes>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings2.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles>
            <FiveMinutes.Greetings2 name="Alicante Frontend" />
          </FiveMinutes.Styles>
        </RightCodeFill>
      </Layout>
      <Notes>
        Un componente recibe props por parámetros y a partir de ellos puedes
        hacer los que quieras. Lo que importa es que devuelvas algo que React
        pueda pintar: un string, un número, null, un elemento, y un array de
        todas esas cosas. No acepta objetos, ni boolenos, ni fechas.
      </Notes>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings3.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles>
            <FiveMinutes.Greetings3 name="Alicante Frontend">
              <h2>¿Cómo vais?</h2>
            </FiveMinutes.Greetings3>
          </FiveMinutes.Styles>
        </RightCodeFill>
      </Layout>
      <Notes>
        Entre las props también viene el campo children, que ya veis que es.
      </Notes>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings4.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles>
            <FiveMinutes.Greetings4 name="Alicante Frontend">
              {({ polite }) => polite && <h2>Un placer conocerlos</h2>}
            </FiveMinutes.Greetings4>
          </FiveMinutes.Styles>
        </RightCodeFill>
      </Layout>
      <Notes>
        Al ser un prop puede ser todo lo que quieras, no necesariamente algo que
        sea dibujable. Puede ser una función. Esto se llama render props.
      </Notes>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings1_class.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles>
            <FiveMinutes.Greetings2 name="Alicante Frontend" />
          </FiveMinutes.Styles>
        </RightCodeFill>
      </Layout>
      <Notes>Un componente puede ser una función y puede ser una clase</Notes>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill dense>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings5.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles dense>
            <FiveMinutes.Greetings5 />
          </FiveMinutes.Styles>
        </RightCodeFill>
      </Layout>
      <Notes>
        A todo esto, esto es muy estático, cómo gestiono un formulario, por
        ejemplo?
      </Notes>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill dense>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings6.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles dense>
            <FiveMinutes.Greetings6 />
          </FiveMinutes.Styles>
        </RightCodeFill>
        <Notes>
          Y ahora cómo hago un fetch, como cargo datos? Qué exigentes, mira que
          pedis. El componentDidMount se ejecuta después de que el componente se
          haya renderizado por primera vez, es el mejor momento para cargar
          datos o subscribirse a eventos.
        </Notes>
      </Layout>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill dense>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings7.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles dense>
            <FiveMinutes.Greetings7 />
          </FiveMinutes.Styles>
        </RightCodeFill>
      </Layout>
      <Notes>
        Y qué pasa si en el fetch recibo parámetros que cambian según un input?
        El componentDidUpdate siempre ejecuta cuando se vuelve a renderizar el
        componente (cambian las props o el estado)
      </Notes>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill dense>
          <LeftCodePane
            lang="jsx"
            source={require("../examples/greetings8.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill>
          <FiveMinutes.Styles dense>
            <FiveMinutes.Greetings8 />
          </FiveMinutes.Styles>
        </RightCodeFill>
      </Layout>
      <Notes>
        Y si me subscribo al algo como un evento del dom y quiero
        desubscribirme?
      </Notes>
    </Slide>
  ];
}
