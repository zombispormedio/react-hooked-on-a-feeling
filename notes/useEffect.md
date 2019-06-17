# useEffect

1. Explicación

    Esto es lo que vas querer usar el 99 %. Ejecuta seguidamente después de el componente se renderize y te asegura que no va a bloquear el browser painting. Mientras que el componentDidMount y componentDidUpdate se ejecuta de forma síncrona después del renderizado.

2. Demostración 1: Fetch

    Se hace la llamada al cuando el componente se monta, se maneja el loading y los errores, también el caso de que se desmonte. Si no se hiciese podría provocar un posible memory leak.

        function Pikachu() {
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState();
          const [data, setData] = useState();
        
          useEffect(() => {
            let mounted = true;
            fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
              .then(res => res.json())
              .then(data => mounted && setData(data))
              .catch(error => mounted && setError(error))
              .finally(() => mounted && setLoading(false));
            return () => {
              mounted = false;
            };
          }, []);
        
          return (
            <div>
               {error && !loading && <div>Something it's wrong...</div>}
               {loading ? <Loading /> : <PokemonDetail {...data} />}
            </div>
          );
        }
        // https://codesandbox.io/s/fetch-pikachu-bc42n

3. Demostración 2: Fetch with input

    Si el valor del input cambia mientras se está cargando el anterior, la anterior petición tiene que ser cancelada o evitar que cambie el estado. Si cambia el valor que se ha hecho submit, se llama al componentWillUnmount. Cuando cambia un valor del array, se llama al callback del componenWillUnmount.  Se evita que se ejecute en el componentDidMount porque no hay valor.

        function Pokedex() {
          const [pokemon, setPokemon] = useState();
          const [inputSearch, setInputSearch] = useState("");
          const [loading, setLoading] = useState(false);
          const [error, setError] = useState();
          const [data, setData] = useState();
        
          useEffect(() => {
        		if (!pokemon) return;
            let isCancelled = true;
            setLoading(true);
            setError(undefined);
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
              .then(res => res.json())
              .then(data => isCancelled && setData(data))
              .catch(error => isCancelled && setError(error))
              .finally(() => isCancelled && setLoading(false));
            return () => {
              isCancelled = false;
            };
          }, [pokemon]);
        
          const onSearchSubmit = ev => {
            setPokemon(inputSearch);
            ev.preventDefault();
          };
        
          return (
            <div>
                {loading &&  <Loading /> }
                {!loading &&
                  (!data || error ? <PokemonEmpty /> : <PokemonDetail {...data} />)}
                <form onSubmit={onSearchSubmit}>
                    <TextInput
                      aria-label="pokemon search"
                      name="pokemon-search"
                      placeholder="Search pokémon"
                      value={inputSearch}
        							required
                      onChange={ev => setInputSearch(ev.target.value)}
                    />
                    <Button type="submit">Search</Button>
                </form>
            </div>
          );
        }
        // https://codesandbox.io/s/fetch-pokemon-p2xs9

4. Demostración 3: Interval

    Cuando el valor de expired cambia, se hace un clearInterval. Expired en un principio será false o true, y pasará de true a false, nunca iremos atrás en el tiempo

        const countdownDate = new Date("2019-07-05 17:00");
        
        function CountDown() {
          const [
            {
              expired,
              values: { days, hours, minutes, seconds }
            },
            setResult
          ] = useState(() => calculateCountdownFromNow(countdownDate));
        
          useEffect(() => {
            if (expired) return undefined;
            const intervalId = setInterval(
              () => setResult(calculateCountdownFromNow(countdownDate)),
              1000
            );
            return () => {
              clearInterval(intervalId);
            };
          }, [expired]);
          return (
              <Heading>
                 {expired
                    ? "It's the time"
                    : `${days}d ${hours}h ${minutes}m ${seconds}s`}
              </Heading>
          );
        }
        
        // https://codesandbox.io/s/countdown-s2wb7

5. Demostración 4: Using Key

    ¿Qué pasa si la fecha que se introduce expira y cambias a otra que no está expirada? ¿Cómo reseteamos el estado? Usando la prop *key,* reinstancia el componente y por lo tanto se resetea el estado. ¿Se puede hacer de otra manera? Sí, si supieras la fecha anterior antes de que se ejecutase el useEffect, podrías detectar qué ha cambiado, pero ¿cómo consigues eso? Lo veremos en el siguiente Hook. 

        const Countdown = ({ date }) => {
          const [
            {
              expired,
              values: { days, hours, minutes, seconds }
            },
            setResult
          ] = useState(() => calculateCountdownFromNow(date));
        
          useEffect(() => {
            if (expired) return;
            const intervalId = setInterval(
              () => setResult(calculateCountdownFromNow(date)),
              1000
            );
            return () => {
              clearInterval(intervalId);
            };
          }, [expired, date]);
        
          return expired
            ? "It's the time"
            : `${days}d ${hours}h ${minutes}m ${seconds}s`;
        };
        
        function App() {
          const [date, setDate] = useState("2019-07-05T17:00");
          return (
            <div>
                <Heading>
                  <Countdown date={date} key={date} />
                </Heading>
                <TextInput
                  type="datetime-local"
                  value={date}
                  onChange={evt => setDate(evt.target.value)}
                />
            </div>
          );
        }
        // https://codesandbox.io/s/countdown-with-input-using-key-iyvep

6. Breve comentario sobre useLayoutEffect

    Se ejecuta después de realizarse las mutaciones del DOM. Puede ser útil para medir elementos del DOM.

[https://overreacted.io/a-complete-guide-to-useeffect/](https://overreacted.io/a-complete-guide-to-useeffect/)

[https://kentcdodds.com/blog/useeffect-vs-uselayouteffect](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)