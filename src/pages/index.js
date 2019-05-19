import React from "react"
import { Deck, Slide, Heading, Text, Notes } from "spectacle"
import { CountDownSlide } from "../slides"

const IndexPage = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500}>
    <Slide transition={["zoom"]}>
      <Heading>React Hooked On A Feeling</Heading>
      <Text>Welcome</Text>
      <Notes>Something</Notes>
    </Slide>
    <CountDownSlide />
  </Deck>
)

export default IndexPage
