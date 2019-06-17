# useRef

1. Background

    ¿Cómo se accede a un elemento del DOM en React? No lo he explicado en el React en 5 minutos, pero no es esencial. Al menos hasta los Hooks solo se usaba en librerías que manipulasen el DOM o que integrasen con librerías de terceros.

        class MyComponent extends React.Component {
          constructor(props) {
            super(props);
            this.myRef = React.createRef();
          }
          render() {
            return <div ref={this.myRef} />;
          }
        }
        
        // this.myRef.current is the DOM element

2. useRef

    Ahora los refs son el equivalente al this en las clases, te permiten mutar un valor en el ciclo de vida del componente sin que se vuelva a renderizar.

        const ref = useRef(false);
        
         useEffect(() => {
        		if(ref.current){
        			console.log("This is componentDidUpdate")
        		}else{
        			console.log("This is componentDidMount");
        			ref.current = true;
        		} 
         });
         

3. usePrevious

        function usePrevious(value) {
          const ref = useRef();
          useEffect(() => {
            ref.current = value;
          });
          return ref.current;
        }
         
        
        /* 
        	ComponentDidMount
        	value = "something1" 
        	previous = null
        
        	Next ComponentDidUpdate
        	value = "something2"
        	previous = "something2"
         */

Demostración

Es una alternativa, pero no es recomendado por la documentación de React

    const Countdown = ({ date }) => {
      const [
        {
          expired,
          values: { days, hours, minutes, seconds }
        },
        setResult
      ] = useState(() => calculateCountdownFromNow(date));
    
      const previousDate = usePrevious(date);
    
      useEffect(() => {
        if (expired) {
          if (date !== previousDate) {
            setResult(calculateCountdownFromNow(date));
          }
          return;
        }
        const intervalId = setInterval(() => {
          console.log("Calculating countdown");
          setResult(calculateCountdownFromNow(date));
        }, 1000);
        return () => {
          clearInterval(intervalId);
        };
      }, [expired, date]);
    
      return expired
        ? "It's the time"
        : `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    
    function App() {
      const [date, setDate] = useState("2019-06-08T17:00");
      return (
        <div>
            <Heading>
              <Countdown date={date} />
            </Heading>
            <TextInput
              type="datetime-local"
              value={date}
              onChange={evt => setDate(evt.target.value)}
            />
        </div>
      );
    }
    
    // https://codesandbox.io/s/countdown-with-input-and-useprevious-xobu7