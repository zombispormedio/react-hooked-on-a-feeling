# La Historia de los React Hooks

- 2010

    Obama todavía era presidente, se estrenaba Toy Story 3, el iPad aparecía en nuestras vidas, nacía AngularJS. 

    ![](https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg)

    ![](http://newmediarockstars.com/wp-content/uploads/2012/11/ObamaGlasses.jpg)

    ![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/1024px-AngularJS_logo.svg.png)

    En un pequeño lugar llamado Facebook, con 600 millones de usuarios registrados, lo estaba petando, pero cuando lo petas, todo tiene sus consecuencias, tus aplicaciones se vuelven más complejas y más difíciles de mantener. Todo mientras te piden "features" como churros.

    ![](https://keolahealth.files.wordpress.com/2010/12/facebook-logo-4.jpg)

    Facebook tenía que encontrar una solución a esto. Tenía que mejorar el rendimiento de sus aplicaciones y la productividad de sus desarrollados. Como hija de su tiempo y Phpera que es, saco lo que se puede llamar el padre de React: XHP, HTML en PHP. ¿Cómo? 

        <?php
        $post =
          <div class="post">
            <h2>{$post}</h2>
            <p><span>Hey there.</span></p>
            <a href={$like_link}>Like</a>
          </div>;

    Nacía la convicción de trabajar con componentes en React

        <?php
        class :fb:thing extends :x:element {
          attribute
            string title = "No Title",
            enum { "cool", "lame" } type;
        
        	protected function render() {
            return <div class="thing">thing</div>;
          }
        }

- 2011

    Jordan Walke, Software Engineer, crea el primer prototipo de React, llamado FaxJS

        var MainComponent = exports.MainComponent = F.Componentize({
          structure : function() {
            return Div({
              firstPerson: PersonDisplayer({
                name: 'Joe Johnson', age: 31,
                interests: 'hacking, eating, sleeping'
              }),
        
              secondPerson: PersonDisplayer({
                name: 'Sally Smith', age: 29,
                interests: 'biking, cooking swiming'
              }),
        
              thirdPerson: PersonDisplayer({
                name: 'Greg Winston', age: 25,
                interests: 'design and technology'
              })
            });
          }
        });

    ![](Untitled-7e0ad1f6-4c87-4e36-a3b4-72b811269ea7.png)

- 2013
    - Lionel Messi gana su cuarto balón de oro.

        ![](https://st-listas.20minutos.es/images/2013-12/373620/4269849_640px.jpg?1388672924)

    Se presenta React en la JSConf 2013 en Florida

    ![](https://2013.jsconf.us/img/nav-logo.png)

    A tomar por culo el MVC, MVVM, two directional data-binding. 

    ![](Captura_de_pantalla_2019-06-09_a_las_12-97245f01-5ec0-4b61-8691-53c40a09bafc.50.01.png)

    One Directional data binding (el por qué de esto se queda fuera de la charla), JSX (html in js). Más reconciliación y menos mutación. 

        class HelloMessage extends React.Component {
          render() {
            return (
              <div>
                Hello {this.props.name}
              </div>
            );
          }
        }
        
        ReactDOM.render(
          <HelloMessage name="Taylor" />,
          document.getElementById('hello-example')
        );

- 2015

    Una primera versión de Vue.js Birdman gana el Oscar a la mejor película. No es un año muy bueno para París. Obama sigue siendo presidente.

    ![](https://www.the-arcade.ie/wp-content/uploads/2015/01/Birdman-Poster.jpg)

    Netflix y Airbnb usan React y están orgullosos de ello. 

    ![](https://images-eu.ssl-images-amazon.com/images/I/51LGj5--KsL.png)

    ![](https://cdn-images-1.medium.com/max/1200/1*BsKbDTA9ZUVroeJ7asId4Q.png)

     Un joven, llamado Dan Abramov,  lanza Redux, la librería que nos llevaría a dar un paso más allá en el desarrollo de aplicaciones con React. Se presenta React Native. No les bastaba con petar la web, había que hacerlo también en mobile, y nada de aplicaciones híbridas. Aplicaciones nativas.

    ![](https://redux.js.org/img/redux-logo-landscape.png)

    ![](https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png)

    Dan Abramov se incorpora Facebook

    [https://twitter.com/dan_abramov/status/671135846830075904](https://twitter.com/dan_abramov/status/671135846830075904)

- 2017

    Donald Trump es presidente. No necesitamos comentar otro evento más.

    ![](https://cdn-images-1.medium.com/max/1600/0*luXeb5u0jy0mTZzm.jpg)

    En la comunidad de React no era suficiente con tener HTML en el Javascript, en 2017 habían empezado a aflorar el CSS-in-js. 

        import styled from 'styled-components';
        // Create a component that renders a <p> element with blue text
        const BlueText = styled.p`
          color: blue;
        `;
        
        <BlueText>My blue text</BlueText>

- 2018

    Trump sigue siendo presidente. 

    ![](https://media.giphy.com/media/1ube10l4xArN6/giphy.gif)

    One directional binding way, JSX, React Native, CSS-in-js. ¿Qué lobby queda por atacar? Había que pensar en algo más adictivo que la  cocaína y lo pete tanto como los vengadores.

    ![](https://media.giphy.com/media/UMxaEzlomrkTm/giphy.gif)

    ![](https://media.giphy.com/media/3oxHQpJKupQXsmU1JS/giphy.gif)

    React Hooks se presentan en ReactConf Iceland de la mano de Sophie Alper, Dan Abramov, ambos de Facebook, y Ryan Florence, creador de React Router y Reach Router.

    ![](https://pbs.twimg.com/media/DtChhdlV4AAw3AW.jpg)

    ![](https://i.ytimg.com/vi/V-QO-KO90iQ/maxresdefault.jpg)

    ![](https://i.ytimg.com/vi/wXLf18DsV-I/maxresdefault.jpg)

    Un cambio sin precedentes en la forma de trabajar con React

        import React, { useState } from 'react';
        
        function Example() {
          // Declare a new state variable, which we'll call "count"
          const [count, setCount] = useState(0);
        
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }