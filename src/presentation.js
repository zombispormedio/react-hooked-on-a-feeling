import React from "react";
import { BaseStyles } from "@primer/components";
import {
  Deck,
  Slide,
  Text,
  Heading,
  Image,
  List,
  ListItem,
  Appear,
  Notes,
  Link
} from "spectacle";
import { alicanteFrontendLogo, rules } from "./images";
import { withProtection } from "./helpers";
import { withActivity } from "./hooks";
import { theme } from "./theme";
import {
  AboutMe,
  ReactHistory,
  ReactInFiveMinutes,
  ReactFuture,
  WhyReactHooks,
  CustomHooks,
  FAQ,
  Optimizations,
  UseContext,
  UseEffect,
  UseImperativeHandle,
  UseRef,
  UseState
} from "./slides";

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
        {AboutMe()}
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
        {ReactHistory()}
        {ReactInFiveMinutes()}
        {WhyReactHooks()}
        {UseState()}
        {UseEffect()}
        <Slide textColor="white">
          <Heading margin="-5rem auto auto auto">Rules of Hooks</Heading>
          <List bulletStyle="greenCheck">
            <Appear>
              <ListItem>Hooks sólo al principio de la función.</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Hooks sólo dentro de componentes o de Custom Hooks
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <i>use</i> is for Hooks
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <Image src={rules} width="40rem" />
          </Appear>
          <Notes>
            Hooks sólo al principio de la función. Nada de dentro de
            condiciones, bucles o funciones internas. Eso permite mantener el
            estado entre las diferentes llamadas. Hooks sólo dentro de
            componentes o de Custom Hooks Poner el prefijo *use* en todas las
            funciones que usen Hooks y no sean un componente
          </Notes>
        </Slide>
        {UseRef()}
        {UseImperativeHandle()}
        {UseContext()}
        {Optimizations()}
        {CustomHooks()}
        {ReactFuture()}
        {FAQ()}
        <Slide>
          <iframe
            width="560"
            height="315"
            title="End"
            src="https://www.youtube.com/embed/pjlAlB3r2f4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Slide>
        <Slide bulletStyle="greenCheck">
          <Text textColor="secondary">Referencias</Text>
          <List bulletStyle="">
            <ListItem>
              <Link
                href="https://www.youtube.com/watch?v=dpw9EHDh2bM"
                textColor="white"
                style={{ textDecoration: "underline" }}
              >
                React Today and Tomorrow and 90% Cleaner React With Hooks
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889"
                textColor="white"
                style={{ textDecoration: "underline" }}
              >
                Making Sense of React Hooks
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://kentcdodds.com/blog/application-state-management-with-react"
                textColor="white"
                style={{ textDecoration: "underline" }}
              >
                Application State Management with React
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://overreacted.io/a-complete-guide-to-useeffect/"
                textColor="white"
                style={{ textDecoration: "underline" }}
              >
                A Complete Guide to useEffect
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/"
                textColor="white"
                style={{ textDecoration: "underline" }}
              >
                The History of React.js on a Timeline
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://kentcdodds.com/blog/usememo-and-usecallback"
                textColor="white"
                style={{ textDecoration: "underline" }}
              >
                When to useMemo and useCallback
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://es.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html"
                textColor="white"
                style={{ textDecoration: "underline" }}
              >
                Mixins Considered Harmful
              </Link>
            </ListItem>
          </List>
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
