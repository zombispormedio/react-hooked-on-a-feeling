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
  Magic
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import styled from "styled-components";
import {
  alicanteFrontendLogo,
  authorImage,
  companyImage,
  twitterLogo,
  codepenEventImage,
  googleVoiceKit,
  gdgAlicanteLogo
} from "./images";
import { withProtection } from "./helpers";
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
        <Slide transition={["fade"]} bgColor="white" progressColor="primary">
          <Image
            src={authorImage}
            width="15rem"
            style={{ borderRadius: "10rem" }}
          />
          <Text margin="2rem auto auto auto">Xavier Serrano</Text>
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
            >
              @Zombispormedio
            </Link>
          </Row>
          <Text textSize="xx-large" margin="2rem auto auto auto">
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
        <Slide bgColor="white" progressColor="primary">
          <Text textSize="x-large">Me recordaréis de...</Text>
          <BlockQuote>
            <Quote textSize="3rem">Hijo de !@#$% !</Quote>
            <Cite textColor="black">Evento del GDG Alicante</Cite>
          </BlockQuote>
          <Image src={googleVoiceKit} width="25rem" />
          <Image src={gdgAlicanteLogo} width="20rem" />
          <Notes>
            También soy la persona que insultó a un asistente de Google, en
            concreto la cajita, durante la primera charla que hicieron en el
            GDG.
          </Notes>
        </Slide>
        <Magic>
          <Slide>
            <Heading>Aviso</Heading>
            <Text textColor="secondary" textSize="1.7rem">
              La siquiente charla puede contener referencias a drogas, chistes
              demasiado malos, referencias demasiado millenials, spoilers a
              Juego de Tronos, desvaríos, injurias a Vue.js y código que puede
              producir
              <i> Grumpy Reactions</i> <sup>*</sup>. Se recomienda permanezcan
              sentados. Y ante todo eviten levantarse, taparse los oídos y
              gritar. Si son obsesos de las clases y sienten molestias,
              angustia, mareos o diarrea. El baño está a la derecha. El ponente
              no se responsabiliza de que el contenido clave de la charla pueda
              producir adicción, paranoia, hipnosis o migraciones de código
              inminente.
            </Text>

            <Text
              textColor="secondary"
              textSize="1.2rem"
              margin="5rem auto auto auto"
            >
              <sup>*</sup>
              <i>Grumpy Reaction</i>, acuñado por el equipo de React, se define
              como la sensación producida en algunos desarrolladores debido al
              visionado de determinados React Hooks.
            </Text>
          </Slide>
        </Magic>
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
