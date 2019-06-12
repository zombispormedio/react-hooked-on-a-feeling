import React from "react";
import {
  Slide,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  Image,
  Layout,
  Fill,
  Appear
} from "spectacle";
import styled from "styled-components";
import { HugeCodePane } from "../components";
import { wiz, malware } from "../images";

const WordArt = styled.div`
  font-family: Arial, sans-serif;
  font-size: 4em;
  font-weight: bold;
  position: relative;
  z-index: 1;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    font-family: Impact, sans-serif;
    color: #24c0fd;
    -webkit-text-stroke: 0.01em #0000aa;
    filter: progid:DXImageTransform.Microsoft.Glow(Color=#0000aa,Strength=1);
    text-shadow: 0.13em -0.13em 0px #0000aa;
    letter-spacing: -0.05em;
  }
`;

export function FAQ() {
  return [
    <Slide>
      <Heading>¿Preguntas?</Heading>
    </Slide>,
    <Slide>
      <Heading>¿Lo migro todo ya?</Heading>
      <Text textColor="secondary" margin="2rem">
        No es necesario que migres, todavía hay soporte para las clases y lo
        seguirá habiendo.
      </Text>
    </Slide>,
    <Slide>
      <Heading>No me enteré de nada</Heading>
      <Text textColor="secondary" margin="2rem">
        <span role="img" aria-labelledBy="woman">
          🤷🏻‍♀{" "}
        </span>
        Es mi primerita charla.
      </Text>
    </Slide>,
    <Slide>
      <Heading margin="-2rem auto 2rem auto">Testing</Heading>
      <HugeCodePane
        lang="jsx"
        source={require("../examples/hooks_testing.txt").default}
      />
    </Slide>,
    <Slide>
      <Heading>React Hooks Under The Hood</Heading>
      <List>
        <ListItem>
          <Link
            href="https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e"
            textColor="white"
            style={{ textDecoration: "underline" }}
          >
            React hooks: not magic, just arrays
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884"
            textColor="white"
            style={{ textDecoration: "underline" }}
          >
            RFC: React Hooks
          </Link>
        </ListItem>
      </List>
    </Slide>,
    <Slide>
      <Appear>
        <WordArt style={{ marginTop: "-6rem", marginBottom: "2rem" }}>
          <Heading>Virus en páginas web hechas con Wix</Heading>
        </WordArt>
      </Appear>
      <Layout>
        <Fill>
          <Appear>
            <Image
              src={wiz}
              width="40rem"
              margin="auto -8rem"
              style={{ maxWidth: "inherit" }}
            />
          </Appear>
        </Fill>

        <Fill>
          <Appear>
            <Image
              src={malware}
              width="40rem"
              margin="auto 8rem"
              style={{ maxWidth: "inherit" }}
            />
          </Appear>
        </Fill>
      </Layout>
      <Appear>
        <Image
          src="https://media.giphy.com/media/fJKG1UTK7k64w/giphy.gif"
          margin="-8rem auto -3rem auto"
        />
      </Appear>
    </Slide>
  ];
}
