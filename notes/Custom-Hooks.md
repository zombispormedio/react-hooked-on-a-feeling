# Custom Hooks

- ¿Qué es un custom hook?

    Es una función que lleva el prefijo *use* y hace uso de React Hooks. Muy útil para compartir código

        const pancakes = usePancakes(); // 🥞

1. Presentar un hook muy especial

        const useSpeechRecognition = () => {
          const [transcript, setTranscript] = useState();
          const [recognizing, setRecognizing] = useState(false);
          const [error, setError] = useState();
          const recognitionRef = useRef();
        
          useEffect(() => {
            const recognition = new window.SpeechRecognition();
            recognition.lang = "es-ES";
            recognition.onresult = event => {
              const last = event.results.length - 1;
              setTranscript(event.results[last][0].transcript);
            };
            recognition.onerror = event => setError(event);
            recognition.onstart = () => setRecognizing(true);
            recognition.onend = () => setRecognizing(false);
            recognition.onspeechend = () => recognition.stop();
            recognitionRef.current = recognition;
          }, []);

2. Combinar los anteriores hooks en algo todavía más especial

    Los Custom Hooks pueden pasarse variables entre ellos.

        function App() {
          const painterRef = useRef();
          useWindowResize(() => {
            painterRef.current.resize(
              window.innerWidth - CANVAS_MARGIN,
              window.innerHeight - CANVAS_MARGIN
            );
          });
          const { recognizing, start, transcript } = useSpeechRecognition();
          const { pokemonName, error: detectionError } = usePokemonDetector(transcript);
          const { loading, data, error } = usePokemon(pokemonName);
        
          useEffect(() => {
            if (!data) return;
            painterRef.current.clean();
            painterRef.current.imageFromUrl(data.sprites.front_default);
          }, [data]);
        
          return (
            <div>
                {recognizing ? (
                  <Heading>Recognizing...</Heading>
                ) : (
                  <CircleOcticon
                    icon={Play}
                    size={32}
                    onClick={start}
                  />
                )}
                {detectionError}
                {error && `${pokemonName} is not a Pokémon`}
                {loading && "Loading..."}
                <Painter
                  ref={painterRef}
                  width={window.innerWidth - CANVAS_MARGIN}
                  height={window.innerHeight - CANVAS_MARGIN}
                />
              </div>
        );
        }