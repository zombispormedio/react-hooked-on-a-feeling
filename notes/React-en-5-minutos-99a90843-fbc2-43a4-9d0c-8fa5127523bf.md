# React en 5 minutos

Hablando con conocidos y amigos  muchos no conocen nada de React, viene de Angular.js, Jquery, Vue.js. Así que les he preparado esto. 

Esto es un componente. Una función algo sencillo. Cuando instancias un componente se llama elemento. En el caso de una web para renderizar una web, se usa React Dom, que se le pasa por parámetro el componente Root y el contendor del DOM donde se va a montar toda la aplicación.

La librería de React es independiente de donde se dibuje.

    function Greetings() {
      return (
        <div>
          <h1>Hello, World</h1>
        </div>
      );
    }
    
    ReactDOM.render(<Greetings />, document.getElementById("root"));

Un componente recibe props por parámetros y a partir de ellos puedes hacer los que quieras. Lo que importa es que devuelvas algo que React pueda pintar: un string, un número, null, un elemento, y un array de todas esas cosas. No acepta objetos, ni boolenos, ni fechas.

    function Greetings(props) {
      return (
        <div>
          <h1>Hello, {props.name}</h1>
        </div>
      );
    }
    
    ReactDOM.render(
      <Greetings name="Alicante Frontend" />,
      document.getElementById("root")
    );

Entre las props también viene el campo children, que ya veis que es. 

    function Greetings(props) {
      return (
        <div>
          <h1>Hello, {props.name}</h1>
          {props.children}
        </div>
      );
    }
    
    ReactDOM.render(
      <Greetings name="Alicante Frontend">
        <h2>Un placer conocerlos</h2>
      </Greetings>,
      document.getElementById("root")
    );

Al ser un prop puede ser todo lo que quieras, no necesariamente algo que sea dibujable. Puede ser una función. Esto se llama render props.

    function Greetings(props) {
      return (
        <div>
          <h1>Hello, {props.name}</h1>
          {props.children({ polite: true })}
        </div>
      );
    }
    
    ReactDOM.render(
      <Greetings name="Alicante Frontend">
        {({ polite }) => polite && <h2>Un placer conocerlos</h2>}
      </Greetings>,
      document.getElementById("root")
    );

Un componente puede ser una función y puede ser una clase

    class Greetings extends Component {
      render() {
        return (
          <div>
            <h1>Hello, {this.props.name}</h1>
          </div>
        );
      }
    }
    
    ReactDOM.render(
      <Greetings name="Alicante Frontend" />,
      document.getElementById("root")
    );

A todo esto, esto es muy estático, cómo gestiono un formulario, por ejemplo? 

    class Greetings extends Component {
      constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
        this.onChange = this.onChange.bind(this);
      }
    
      onChange(evt) {
        this.setState({
          name: evt.target.value
        });
      }
      render() {
        return (
          <div>
            <h1>Hello, {this.state.name}</h1>
            <input type="text" onChange={this.onChange} value={this.state.name} />
          </div>
        );
      }
    }

Y ahora cómo hago un fetch, como cargo datos? Qué exigentes, mira que pedis. El componentDidMount se ejecuta después de que el componente se haya renderizado por primera vez, es el mejor momento para cargar datos o subscribirse a eventos.

    class Greetings extends Component {
      constructor(props) {
        super(props);
        this.state = {
          name: "",
          quote: ""
        };
        this.onChange = this.onChange.bind(this);
      }
    
      componentDidMount() {
        fetch("https://api.chucknorris.io/jokes/random")
          .then(res => res.json())
          .then(res => {
            this.setState({
              quote: res.value
            });
          });
      }
    
      onChange(evt) {
        this.setState({
          name: evt.target.value
        });
      }
      render() {
        return (
          <div>
            <h1>Hello, {this.state.name}</h1>
            <input type="text" onChange={this.onChange} value={this.state.name} />
            <div>{this.state.quote}</div>
          </div>
        );
      }
    }

Y qué pasa si en el fetch recibo parámetros que cambian según un input? El componentDidUpdate siempre ejecuta cuando se vuelve a renderizar el componente (cambian las props o el estado)

    class Greetings extends Component {
      constructor(props) {
        super(props);
        this.state = {
          name: "",
          quote: "",
          searchResult: []
        };
        this.onChange = this.onChange.bind(this);
      }
    
      componentDidMount() {
        fetch("https://api.chucknorris.io/jokes/random")
          .then(res => res.json())
          .then(res => {
            this.setState({
              quote: res.value
            });
          });
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) {
          fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.name}`)
            .then(res => res.json())
            .then(res => {
              this.setState({
                searchResult: res.result.map(item => item.value)
              });
            });
        }
      }
    
      onChange(evt) {
        this.setState({
          name: evt.target.value
        });
      }
      render() {
        return (
          <div>
            <h1>Hello, {this.state.name}</h1>
            <input type="text" onChange={this.onChange} value={this.state.name} />
            <div style={{ marginTop: "2rem" }}>{this.state.quote}</div>
            <ul>
              {this.state.searchResult.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      }
    }

Y si me subscribo al algo como un evento del dom y quiero desubscribirme?

    class Greetings extends Component {
      constructor(props) {
        super(props);
        this.state = {
          name: "",
          quote: "",
          searchResult: [],
          windowWidth: window.innerWidth
        };
        this.onChange = this.onChange.bind(this);
        this.updateWidth = this.updateWidth.bind(this);
      }
    
      updateWidth() {
        this.setState({
          windowWidth: window.innerWidth
        });
      }
    
      componentDidMount() {
        fetch("https://api.chucknorris.io/jokes/random")
          .then(res => res.json())
          .then(res => {
            this.setState({
              quote: res.value
            });
          });
        window.addEventListener("resize", this.updateWidth);
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) {
          fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.name}`)
            .then(res => res.json())
            .then(res => {
              this.setState({
                searchResult: res.result.map(item => item.value)
              });
            });
        }
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
      }
    
      onChange(evt) {
        this.setState({
          name: evt.target.value
        });
      }
      render() {
        return (
          <div>
            <div>Window width: {this.state.windowWidth}</div>
            <h1>Hell
    
    o, {this.state.name}</h1>
            <input type="text" onChange={this.onChange} value={this.state.name} />
            <div style={{ marginTop: "2rem" }}>{this.state.quote}</div>
            <ul>
              {this.state.searchResult.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      }
    }

[https://codesandbox.io/s/react-in-5-min-ssgsp](https://codesandbox.io/s/react-in-5-min-ssgsp)