import React from "react";
import {
  Slide,
  Heading,
  Image,
  Notes,
  Layout,
  Fill,
  List,
  Appear,
  ListItem,
  Text
} from "spectacle";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { wrapperHell } from "../images";
import {
  LeftCodePane,
  RightCodePane,
  Row,
  LeftCodeFill,
  RightCodeFill
} from "../components";

export function WhyReactHooks() {
  return [
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
        Lógica duplicada entre diferentes componentes y ciclo de vida Patrones
        complejos High Order Components y render props (Añaden complejidad al
        componente cuando lo que quieres es refactorizar)
      </Notes>
    </Slide>,
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
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill dense style={{ transform: "translate(-6rem,-4rem)" }}>
          <LeftCodePane
            style={{ width: "45rem", marginLeft: "-10rem!important" }}
            lang="jsx"
            source={require("../examples/hooks.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill dense style={{ transform: "translate(-2rem,-4rem)" }}>
          <RightCodePane
            lang="jsx"
            source={require("../examples/greetings8.txt").default}
          />
        </RightCodeFill>
      </Layout>
    </Slide>,
    <Slide>
      <Row>
        <TwitterTweetEmbed tweetId="1056960391543062528" />
      </Row>
    </Slide>,
    <Slide>
      <Layout>
        <LeftCodeFill dense>
          <LeftCodePane
            dense
            lang="jsx"
            source={require("../examples/mixins.txt").default}
          />
        </LeftCodeFill>
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
    </Slide>,
    <Slide>
      <Heading>¿Breakings changes?</Heading>
      <Appear>
        <Text textColor="secondary">No.</Text>
      </Appear>
      <Notes>
        No hay breakings changes. Puedes continuar trabajando con Classes sin
        problemas. Facebook tiene montones de componentes hechos con clases y no
        recomiendan no migrarlos. Pero si que es verdad que si empiezas algo
        nuevo, recomiendan usar hooks.
      </Notes>
    </Slide>
  ];
}
