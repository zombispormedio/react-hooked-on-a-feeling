import React from "react";
import { Slide, Heading, Notes, Layout } from "spectacle";
import {
  HugeCodePane,
  LeftCodeFill,
  LeftCodePane,
  RightCodeFill,
  RightCodePane
} from "../components";

export function UseContext() {
  return [
    <Slide>
      <Heading>Context</Heading>
      <HugeCodePane
        margin="4rem"
        lang="jsx"
        source={require("../examples/context.txt").default}
      />
      <Notes>
        Context API te permite pasar datos a través del árbol de componentes.
        Con esto podemos tener una serie de objetos que se pueden acceder desde
        cualquier parte de la aplicación. Nos evita el props drilling (pasar
        props que el componente hijo sólo necesita para pasárselos a su propios
        hijos). Con esto también podemos comunicar información entre componentes
        en diferentes niveles. En el Provider se puede añadir estado y pasar por
        contexto funciones que modifiquen ese estado. Todo controlado claro. Los
        consumidores siempre consumen del Provider más cercano, y un proveedor
        puede ser consumidor. En el ejemplo del tema, al consumir puede mergear
        con un tema que proviene de un padre
      </Notes>
    </Slide>,
    <Slide>
      <Heading margin="-4rem auto 4rem auto">useContext</Heading>
      <Layout>
        <LeftCodeFill style={{ transform: "translateX(-6rem)" }}>
          <LeftCodePane
            style={{ width: "45rem", marginLeft: "-10rem!important" }}
            lang="jsx"
            source={require("../examples/no_use_context.txt").default}
          />
        </LeftCodeFill>
        <RightCodeFill style={{ transform: "translateX(-2rem)" }}>
          <RightCodePane
            lang="jsx"
            source={require("../examples/use_context.txt").default}
          />
        </RightCodeFill>
      </Layout>
    </Slide>,
    <Slide>
      <HugeCodePane
        lang="jsx"
        style={{ transform: "translateY(-5rem)" }}
        source={require("../examples/application_context.txt").default}
      />
      <Notes>
        ¿Cómo sería una aplicación real? Un buen substituto de Redux.
      </Notes>
    </Slide>
  ];
}
