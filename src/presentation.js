import React from "react";
import { BaseStyles } from "@primer/components";
import {
  Deck,
  Slide,
  Text,
  Heading,
  Image,
  Link,
  Quote,
  BlockQuote,
  Cite,
  Notes,
  CodePane,
  Appear,
  List,
  ListItem,
  Layout,
  Fill
} from "spectacle";
import { TwitterTweetEmbed } from "react-twitter-embed";
import createTheme from "spectacle/lib/themes/default";
import styled from "styled-components";
import {
  alicanteFrontendLogo,
  authorImage,
  companyImage,
  twitterLogo,
  codepenEventImage,
  googleVoiceKit,
  gdgAlicanteLogo,
  facebook2010,
  jordanWalke,
  redux,
  reactNative,
  reactConf,
  lolGuy,
  wrapperHell
} from "./images";
import { withProtection } from "./helpers";
import { FiveMinutes } from "./components";
import { withActivity } from "./hooks";

const colors = {
  primary: "#282c34",
  secondary: "#61dafb"
};

const theme = createTheme(colors, {
  primary: "Helvetica",
  secondary: {
    name: "Droid Serif",
    googleFont: true,
    styles: ["400", "700i"]
  }
});

const Row = styled.div`
  display: flex;
  max-height: 10rem;
  align-items: center;
  justify-content: center;
`;

const HugeCodePane = styled(CodePane)`
  font-size: 1.5rem !important;
  padding: 2rem !important;
  ${props => props.dense && "margin-top: -3rem !important;"}
  .prism-code {
    max-height: 50rem;
    overflow-y: auto;
  }
`;

const LeftCodePane = styled(HugeCodePane)`
  width: 47rem;
  margin-left: -8rem !important;
`;
const RightCodePane = styled(HugeCodePane)`
  width: 45rem;
  margin-left: -2rem !important;
`;

const Presentation = () => {
  return (
    <BaseStyles>
      <Deck
        transition={["spin", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Heading>React Hooked on a Feeling</Heading>
          <Text textColor="secondary">By Xavier Serrano</Text>
          <Image src={alicanteFrontendLogo} width="5rem" margin="2rem auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Image
            src={authorImage}
            width="15rem"
            style={{ borderRadius: "10rem" }}
          />
          <Text margin="2rem auto auto auto" textColor="white">
            Xavier Serrano
          </Text>
          <Row>
            <Image
              src={twitterLogo}
              width="5rem"
              height="5rem"
              margin="auto 0 auto 0"
            />
            <Link
              textSize="x-large"
              margin="auto 0 auto 0"
              href="https://twitter.com/zombispormedio"
              textColor="white"
            >
              @Zombispormedio
            </Link>
          </Row>
          <Text
            textSize="xx-large"
            margin="2rem auto auto auto"
            textColor="white"
          >
            Full Stack Engineer en
          </Text>
          <Image src={companyImage} width="12rem" />
          <Notes>
            Soy Full Stack, toco de todo lo que puedas imaginar, me gusta meter
            la nariz en todas partes. Me gusta lo que hago. Actualmente trabajo
            en Suez, el que anteriormente era patrocinador, tiene sus más y sus
            menos, pero se está bastante bien. He aprendido mucho allí, de todo
            lo que puedas imaginar.
          </Notes>
        </Slide>
        <Slide>
          <Text textColor="white" textSize="x-large">
            Me recordaréis de...
          </Text>
          <BlockQuote>
            <Quote
              textColor="secondary"
              textSize="3rem"
              style={{ borderLeft: `1px solid ${colors.secondary}` }}
            >
              Esto es un Bulbasaur
            </Quote>
            <Cite>Evento de Codepen</Cite>
          </BlockQuote>
          <Image src={codepenEventImage} width="30rem" />
          <Notes>
            Me recordaréis como el chaval que durante el evento del Codepen
            señaló a un enorme JSON y dijo “Esto es un Bulbasaur”.
          </Notes>
        </Slide>
        <Slide>
          <Text textSize="x-large" textColor="white">
            Me recordaréis de...
          </Text>
          <BlockQuote>
            <Quote
              textSize="3rem"
              textColor="secondary"
              style={{ borderLeft: `1px solid ${colors.secondary}` }}
            >
              Hijo de !@#$% !
            </Quote>
            <Cite>Evento del GDG Alicante</Cite>
          </BlockQuote>
          <Image src={googleVoiceKit} width="25rem" />
          <Image src={gdgAlicanteLogo} width="20rem" />
          <Notes>
            También soy la persona que insultó a un asistente de Google, en
            concreto la cajita, durante la primera charla que hicieron en el
            GDG.
          </Notes>
        </Slide>
        <Slide>
          <Heading>Aviso</Heading>
          <Text textColor="secondary" textSize="1.7rem">
            La siquiente charla puede contener referencias a drogas, chistes
            demasiado malos, referencias demasiado millenials, spoilers a Juego
            de Tronos, desvaríos, injurias a Vue.js y código que puede producir
            <i> Grumpy Reactions</i> <sup>*</sup>. Se recomienda permanezcan
            sentados. Y ante todo eviten levantarse, taparse los oídos y gritar.
            Si son obsesos de las clases y sienten molestias, angustia, mareos o
            diarrea. El baño está a la derecha. El ponente no se responsabiliza
            de que el contenido clave de la charla pueda producir adicción,
            paranoia, hipnosis o migraciones de código inminente.
          </Text>

          <Text
            textColor="secondary"
            textSize="1.5rem"
            margin="5rem auto auto auto"
          >
            <sup>*</sup>
            <i>Grumpy Reaction</i>, acuñado por el equipo de React, se define
            como la sensación producida en algunos desarrolladores debido al
            visionado de determinados React Hooks.
          </Text>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading>Empecemos con un poco de historia...</Heading>
          <Image src="https://media.giphy.com/media/2tLB0mCE3AKUTz64AC/giphy.gif" />
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading>2010</Heading>
          <Image src={facebook2010} width="20rem" />
          <Text textColor="white">Más de 600 millones de usuarios</Text>
          <Notes>
            Obama todavía era presidente, se estrenaba Toy Story 3, el iPad
            aparecía en nuestras vidas, nacía AngularJS. En un pequeño lugar
            llamado Facebook, con 600 millones de usuarios registrados, lo
            estaba petando, pero cuando lo petas, todo tiene sus consecuencias,
            tus aplicaciones se vuelven más complejas y más difíciles de
            mantener. Todo mientras te piden <i>features</i> como churros.
          </Notes>
        </Slide>
        <Slide>
          <Heading>XHP</Heading>
          <Appear>
            <div>
              <CodePane
                source={require("./examples/xhp1.txt").default}
                margin="4rem"
                textSize="1.5rem"
              />
            </div>
          </Appear>
          <Notes>
            Facebook tenía que encontrar una solución a esto. Tenía que mejorar
            el rendimiento de sus aplicaciones y la productividad de sus
            desarrollados. Como hija de su tiempo y Phpera que es, saco lo que
            se puede llamar el padre de React: XHP, HTML en PHP. ¿Cómo? Nacía la
            convicción de trabajar con componentes en React
          </Notes>
        </Slide>
        <Slide>
          <Heading>2013, Florida</Heading>
          <Image src={jordanWalke} margin="2rem auto" />
        </Slide>
        <Slide textColor="white">
          <List bulletStyle="greenCheck">
            <Appear>
              <ListItem>Componentes</ListItem>
            </Appear>
            <Appear>
              <ListItem>One Directional Data Binding</ListItem>
            </Appear>
            <Appear>
              <ListItem>JSX</ListItem>
            </Appear>
            <Appear>
              <ListItem>Más Reconciliación y menos mutación</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide textColor="white">
          <Heading>2015</Heading>
        </Slide>
        <Slide textColor="white">
          <Heading lineHeight={2}>Netflix & Airbnb</Heading>
          <Heading>
            <span role="img" aria-labelledBy="love">
              ❤️
            </span>
          </Heading>
          <Heading>React</Heading>
        </Slide>
        <Slide>
          <Appear>
            <Row style={{ marginBottom: "2rem" }}>
              <TwitterTweetEmbed tweetId="671135846830075904" />
            </Row>
          </Appear>
          <Image src={redux} />¡
          <Notes>
            Un joven, llamado Dan Abramov, lanza Redux, la librería que nos
            llevaría a dar un paso más allá en el desarrollo de aplicaciones con
            React.
          </Notes>
        </Slide>
        <Slide>
          <Heading>React Native</Heading>
          <Image src={reactNative} />
          <Notes>
            Se presenta React Native. No les bastaba con petar la web, había que
            hacerlo también en mobile, y nada de aplicaciones híbridas.
            Aplicaciones nativas.
          </Notes>
        </Slide>
        <Slide>
          <Heading>2018</Heading>
          <Text textColor="secondary">Había que petarlo</Text>
        </Slide>
        <Slide>
          <Appear>
            <Image
              src="https://media.giphy.com/media/UMxaEzlomrkTm/giphy.gif"
              width="50rem"
            />
          </Appear>
          <Image
            src="https://media.giphy.com/media/3oxHQpJKupQXsmU1JS/giphy.gif"
            width="50rem"
          />
        </Slide>
        <Slide>
          <Heading margin="auto auto 2rem auto" textSize="4rem">
            ReactConf 2018 Iceland
          </Heading>
          <Image src={reactConf} width="40rem" />
        </Slide>
        <Slide>
          <Heading>Pero antes...</Heading>
        </Slide>
        <Slide>
          <Heading>React en 5 minutos</Heading>
        </Slide>
        <Slide transition={["zoom"]}>
          <Image src={lolGuy} />
          <audio autoPlay>
            <source src="1minute.mp3" type="audio/mpeg" />
            <track kind="captions" />
          </audio>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                lang="jsx"
                source={require("./examples/greetings1.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles>
                <FiveMinutes.Greetings1 />
              </FiveMinutes.Styles>
            </Fill>
          </Layout>
          <Notes>
            Hablando con conocidos y amigos muchos no conocen nada de React,
            viene de Angular.js, Jquery, Vue.js. Así que les he preparado esto.
            Esto es un componente. Una función algo sencillo. Cuando instancias
            un componente se llama elemento. En el caso de una web para
            renderizar una web, se usa React Dom, que se le pasa por parámetro
            el componente Root y el contendor del DOM donde se va a montar toda
            la aplicación. La librería de React es independiente de donde se
            dibuje.
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                lang="jsx"
                source={require("./examples/greetings2.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles>
                <FiveMinutes.Greetings2 name="Alicante Frontend" />
              </FiveMinutes.Styles>
            </Fill>
          </Layout>
          <Notes>
            Un componente recibe props por parámetros y a partir de ellos puedes
            hacer los que quieras. Lo que importa es que devuelvas algo que
            React pueda pintar: un string, un número, null, un elemento, y un
            array de todas esas cosas. No acepta objetos, ni boolenos, ni
            fechas.
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                lang="jsx"
                source={require("./examples/greetings3.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles>
                <FiveMinutes.Greetings3 name="Alicante Frontend">
                  <h2>¿Cómo vais?</h2>
                </FiveMinutes.Greetings3>
              </FiveMinutes.Styles>
            </Fill>
          </Layout>
          <Notes>
            Entre las props también viene el campo children, que ya veis que es.
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                lang="jsx"
                source={require("./examples/greetings4.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles>
                <FiveMinutes.Greetings4 name="Alicante Frontend">
                  {({ polite }) => polite && <h2>Un placer conocerlos</h2>}
                </FiveMinutes.Greetings4>
              </FiveMinutes.Styles>
            </Fill>
          </Layout>
          <Notes>
            Al ser un prop puede ser todo lo que quieras, no necesariamente algo
            que sea dibujable. Puede ser una función. Esto se llama render
            props.
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                lang="jsx"
                source={require("./examples/greetings1_class.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles>
                <FiveMinutes.Greetings2 name="Alicante Frontend" />
              </FiveMinutes.Styles>
            </Fill>
          </Layout>
          <Notes>
            Un componente puede ser una función y puede ser una clase
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                dense
                lang="jsx"
                source={require("./examples/greetings5.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles dense>
                <FiveMinutes.Greetings5 />
              </FiveMinutes.Styles>
            </Fill>
          </Layout>
          <Notes>
            A todo esto, esto es muy estático, cómo gestiono un formulario, por
            ejemplo?
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                dense
                lang="jsx"
                source={require("./examples/greetings6.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles dense>
                <FiveMinutes.Greetings6 />
              </FiveMinutes.Styles>
            </Fill>
            <Notes>
              Y ahora cómo hago un fetch, como cargo datos? Qué exigentes, mira
              que pedis. El componentDidMount se ejecuta después de que el
              componente se haya renderizado por primera vez, es el mejor
              momento para cargar datos o subscribirse a eventos.
            </Notes>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                dense
                lang="jsx"
                source={require("./examples/greetings7.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles dense>
                <FiveMinutes.Greetings7 />
              </FiveMinutes.Styles>
            </Fill>
          </Layout>
          <Notes>
            Y qué pasa si en el fetch recibo parámetros que cambian según un
            input? El componentDidUpdate siempre ejecuta cuando se vuelve a
            renderizar el componente (cambian las props o el estado)
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                dense
                lang="jsx"
                source={require("./examples/greetings8.txt").default}
              />
            </Fill>
            <Fill>
              <FiveMinutes.Styles dense>
                <FiveMinutes.Greetings8 />
              </FiveMinutes.Styles>
            </Fill>
          </Layout>
          <Notes>
            Y si me subscribo al algo como un evento del dom y quiero
            desubscribirme?
          </Notes>
        </Slide>
        <Slide textColor="white">
          <Heading margin="auto auto 2rem auto">¿Por qué React Hooks?</Heading>
          <List bulletStyle="greenCheck">
            <Appear>
              <ListItem>Componentes enormes</ListItem>
            </Appear>
            <Appear>
              <ListItem>Lógica duplicada</ListItem>
            </Appear>
            <Appear>
              <ListItem>High Order Components y render props</ListItem>
            </Appear>
          </List>
          <Notes>
            Componentes enormes. Difíciles de entender, refactorizar y testear
            Lógica duplicada entre diferentes componentes y ciclo de vida
            Patrones complejos High Order Components y render props (Añaden
            complejidad al componente cuando lo que quieres es refactorizar)
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "3rem"
              }}
            >
              <Heading>Wrapper Hell</Heading>
            </Fill>
            <Fill>
              <Image src={wrapperHell} />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                dense
                style={{ width: "45rem", marginLeft: "-10rem!important" }}
                lang="jsx"
                source={require("./examples/hooks.txt").default}
              />
            </Fill>
            <Fill>
              <RightCodePane
                dense
                lang="jsx"
                source={require("./examples/greetings8.txt").default}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Row>
            <TwitterTweetEmbed tweetId="1056960391543062528" />
          </Row>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <LeftCodePane
                dense
                lang="jsx"
                source={require("./examples/mixins.txt").default}
              />
            </Fill>
            <Fill>
              <Heading>React Mixins</Heading>
              <Appear>
                <Text textColor="secondary">Descartados en 2016.</Text>
              </Appear>
            </Fill>
          </Layout>
          <Notes>
            ¿Pero no hay una solución para las clases? Colisionan los métodos,
            pierdes la trazabilidad del método. Diamond Problem
          </Notes>
        </Slide>
        <Slide>
          <Heading>¿Breakings changes?</Heading>
          <Appear>
            <Text textColor="secondary">No.</Text>
          </Appear>
          <Notes>
            No hay breakings changes. Puedes continuar trabajando con Classes
            sin problemas. Facebook tiene montones de componentes hechos con
            clases y no recomiendan no migrarlos. Pero si que es verdad que si
            empiezas algo nuevo, recomiendan usar hooks.
          </Notes>
        </Slide>
      </Deck>
    </BaseStyles>
  );
};

export default withProtection({
  skip: process.env.NODE_ENV === "development",
  options: {
    deadline: "2019-06-13 19:00",
    password: [86, 73, 82, 85, 83]
  }
})(withActivity(Presentation));
