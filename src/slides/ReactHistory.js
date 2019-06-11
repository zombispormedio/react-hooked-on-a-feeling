import React from "react";
import {
  Slide,
  Text,
  Heading,
  Image,
  Notes,
  CodePane,
  Appear,
  List,
  ListItem
} from "spectacle";
import { TwitterTweetEmbed } from "react-twitter-embed";
import {
  facebook2010,
  jordanWalke,
  redux,
  reactNative,
  reactConf
} from "../images";
import { Row } from "../components";

export function ReactHistory() {
  return [
    <Slide transition={["zoom"]}>
      <Heading>Empecemos con un poco de historia...</Heading>
      <Image src="https://media.giphy.com/media/2tLB0mCE3AKUTz64AC/giphy.gif" />
    </Slide>,
    <Slide transition={["zoom"]}>
      <Heading>2010</Heading>
      <Image src={facebook2010} width="20rem" />
      <Text textColor="white">Más de 600 millones de usuarios</Text>
      <Notes>
        Obama todavía era presidente, se estrenaba Toy Story 3, el iPad aparecía
        en nuestras vidas, nacía AngularJS. En un pequeño lugar llamado
        Facebook, con 600 millones de usuarios registrados, lo estaba petando,
        pero cuando lo petas, todo tiene sus consecuencias, tus aplicaciones se
        vuelven más complejas y más difíciles de mantener. Todo mientras te
        piden <i>features</i> como churros.
      </Notes>
    </Slide>,
    <Slide>
      <Heading>XHP</Heading>
      <Appear>
        <div>
          <CodePane
            source={require("../examples/xhp1.txt").default}
            margin="4rem"
            textSize="1.5rem"
            theme="external"
          />
        </div>
      </Appear>
      <Notes>
        Facebook tenía que encontrar una solución a esto. Tenía que mejorar el
        rendimiento de sus aplicaciones y la productividad de sus desarrollados.
        Como hija de su tiempo y Phpera que es, saco lo que se puede llamar el
        padre de React: XHP, HTML en PHP. ¿Cómo? Nacía la convicción de trabajar
        con componentes en React
      </Notes>
    </Slide>,
    <Slide>
      <Heading>2013, Florida</Heading>
      <Image src={jordanWalke} margin="2rem auto" />
    </Slide>,
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
    </Slide>,
    <Slide textColor="white">
      <Heading>2015</Heading>
    </Slide>,
    <Slide textColor="white">
      <Heading lineHeight={2}>Netflix & Airbnb</Heading>
      <Heading>
        <span role="img" aria-labelledBy="love">
          ❤️
        </span>
      </Heading>
      <Heading>React</Heading>
    </Slide>,
    <Slide>
      <Appear>
        <Row style={{ marginBottom: "2rem" }}>
          <TwitterTweetEmbed tweetId="671135846830075904" />
        </Row>
      </Appear>
      <Image src={redux} />¡
      <Notes>
        Un joven, llamado Dan Abramov, lanza Redux, la librería que nos llevaría
        a dar un paso más allá en el desarrollo de aplicaciones con React.
      </Notes>
    </Slide>,
    <Slide>
      <Heading>React Native</Heading>
      <Image src={reactNative} />
      <Notes>
        Se presenta React Native. No les bastaba con petar la web, había que
        hacerlo también en mobile, y nada de aplicaciones híbridas. Aplicaciones
        nativas.
      </Notes>
    </Slide>,
    <Slide>
      <Heading>2018</Heading>
      <Text textColor="secondary">Había que petarlo</Text>
    </Slide>,
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
    </Slide>,
    <Slide>
      <Heading margin="auto auto 2rem auto" textSize="4rem">
        ReactConf 2018 Iceland
      </Heading>
      <Image src={reactConf} width="40rem" />
    </Slide>
  ];
}
