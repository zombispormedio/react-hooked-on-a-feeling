import React, { Fragment } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Image, Text } from "spectacle";
import { BaseStyles, Flex, CircleOcticon, Box } from "@primer/components";
import { Play } from "@githubprimer/octicons-react";
import { useSpeechRecognition } from "../hooks";

function TranscriptResult({ transcript }) {
  if (!transcript) return null;
  if (/fresita/i.test(transcript))
    return (
      <Text textSize="8em">
        <span role="img" aria-labelledby={transcript}>
          🍓
        </span>
      </Text>
    );
  if (/cacahuete/i.test(transcript))
    return (
      <Text textSize="8em">
        <span role="img" aria-labelledby={transcript}>
          🥜
        </span>
      </Text>
    );
  if (/pollito/i.test(transcript))
    return (
      <Text textSize="8em">
        <span role="img" aria-labelledby={transcript}>
          🐥
        </span>
      </Text>
    );

  if (/larga vida a la reina de invernalia/i.test(transcript))
    return (
      <Image
        width="40rem"
        src="https://media.giphy.com/media/PnNqLgP0hZWyDoowBZ/giphy.gif"
      />
    );
  if (/^she can't see.+/.test(transcript))
    return (
      <Fragment>
        <Text>
          ¿Quisiste decir: <i>Sicansíos</i>?
        </Text>
        <TwitterTweetEmbed tweetId="1123356471813726211" />
      </Fragment>
    );
  return (
    <Text>
      ¿Qué quisiste decir con: <i>{transcript}</i>?
    </Text>
  );
}

export const SpeechPlayground = () => {
  const { recognizing, start, transcript } = useSpeechRecognition();
  return (
    <BaseStyles>
      <Flex alignItems="center" flexDirection="column" height="100vh">
        <Box>
          {recognizing ? (
            <Text>Recognizing...</Text>
          ) : (
            <CircleOcticon
              icon={Play}
              size={32}
              bg="green.5"
              color="white"
              style={{ cursor: "pointer" }}
              onClick={start}
            />
          )}
        </Box>

        <Box marginTop="3rem">
          <TranscriptResult transcript={transcript} />
        </Box>
      </Flex>
    </BaseStyles>
  );
};
