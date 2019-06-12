import React from "react";
import { Slide, Heading, Text } from "spectacle";

export function FAQ() {
  return [
    <Slide>
      <Heading>¿Preguntas?</Heading>
    </Slide>,
    <Slide>
      <Heading>¿Lo migro todo ya?</Heading>
      <Text textColor="secondary">
        No es necesario que migres, todavía hay soporte para las clases y lo
        seguirá habiendo.
      </Text>
    </Slide>,
    <Slide>
      <Heading>No me enteré de nada</Heading>
      <Text textColor="secondary">
        <span role="img" aria-labelledBy="woman">
          🤷🏻‍♀
        </span>
        Es mi primerita charla.
      </Text>
    </Slide>,
    <Slide>
      <Heading>Testing</Heading>
    </Slide>,
    <Slide>
      <Heading>Virus en páginas web hechas con Wix</Heading>
    </Slide>
  ];
}
