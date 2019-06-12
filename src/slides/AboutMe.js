import React from "react";
import {
  Slide,
  Text,
  Image,
  Link,
  Quote,
  BlockQuote,
  Cite,
  Notes
} from "spectacle";
import {
  authorImage,
  companyImage,
  twitterLogo,
  codepenEventImage,
  googleVoiceKit,
  gdgAlicanteLogo
} from "../images";
import { Row } from "../components";
import { colors } from "../theme";

export function AboutMe() {
  return [
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
          margin="auto 0 auto 0"
          href="https://twitter.com/zombispormedio"
          textColor="white"
        >
          @Zombispormedio
        </Link>
      </Row>
      <Text margin="2rem auto auto auto" textColor="white">
        Full Stack Engineer en
      </Text>
      <Image src={companyImage} width="12rem" />
      <Notes>
        Soy Full Stack, toco de todo lo que puedas imaginar, me gusta meter la
        nariz en todas partes. Me gusta lo que hago. Actualmente trabajo en
        Suez, el que anteriormente era patrocinador, tiene sus más y sus menos,
        pero se está bastante bien. He aprendido mucho allí, de todo lo que
        puedas imaginar.
      </Notes>
    </Slide>,
    <Slide>
      <Text textColor="white">Me recordaréis de...</Text>
      <BlockQuote>
        <Quote
          textColor="secondary"
          style={{ borderLeft: `1px solid ${colors.secondary}` }}
        >
          Esto es un Bulbasaur
        </Quote>
        <Cite>Evento de Codepen</Cite>
      </BlockQuote>
      <Image src={codepenEventImage} width="30rem" />
      <Notes>
        Me recordaréis como el chaval que durante el evento del Codepen señaló a
        un enorme JSON y dijo “Esto es un Bulbasaur”.
      </Notes>
    </Slide>,
    <Slide>
      <Text textColor="white">Me recordaréis de...</Text>
      <BlockQuote>
        <Quote
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
        También soy la persona que insultó a un asistente de Google, en concreto
        la cajita, durante la primera charla que hicieron en el GDG.
      </Notes>
    </Slide>
  ];
}
