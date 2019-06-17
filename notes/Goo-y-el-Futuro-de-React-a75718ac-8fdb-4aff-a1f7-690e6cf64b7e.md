# Goo y el Futuro de React

1. Qué le falta a los Hooks

    Todavía quedan una serie de métodos de las clases por implementar en Hooks, pero no es algo que nos quite el sueño a la hora de usarlos.

    - componentDidCatch, getSnapshotBeforeUpdate
2. ¿Qué pasa con las librerías que usamos y las que usaremos? 
    1. React Spring: mostrar ejemplo.

            import { useSpring, animated as anim } from 'react-spring'
            
            function Goo() {
            	const [{ pos1 }, set] = useSpring({ pos1: [0, 0], config: fast })
              const [{ pos2 }] = useSpring({ pos2: pos1, config: slow })
              const [{ pos3 }] = useSpring({ pos3: pos2, config: slow })
            	
            	useEffect(() => {
            		const intervalId = setInterval(() => {
            	      const y = Math.random() * window.innerHeight
            		     const x = Math.random() * window.innerWidth
            	      set({ pos1: [x, y] })
            	    }, 2000)
            	    return () => clearInterval(intervalId)
            	  }, [])
            	}
            }
            
            return (
                <>
                  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                      <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                    </filter>
                  </svg>
                  <div class="hooks-main">
                    <div class="hooks-filter">
                      <anim.div class="b1" style={{ transform: pos3.interpolate(trans) }} />
                      <anim.div class="b2" style={{ transform: pos2.interpolate(trans) }} />
                      <anim.div class="b3" style={{ transform: pos1.interpolate(trans) }} />
                    </div>
                    <div style={{ zIndex: 1000 }}>React en 5 minutos</div>
                  </div>
                </>
              )
            
            }

    2. Redux: Existe una release candidate que incluye su soporte

            import { useSelector } from 'react-redux'
            
            export const CounterComponent = () => {
              const counter = useSelector(state => state.counter)
              return <div>{counter}</div>
            }

    3. React Router: La próxima versión tendrá un lavado de cara importante, sin breaking changes, soportando hooks. Ryan Florence usará lo aprendido en Reach Router para aplicarlo a React router. [https://reacttraining.com/blog/reach-react-router-future/](https://reacttraining.com/blog/reach-react-router-future/)

            function usePageViews() {
              const { location } = useLocation()
              useEffect(() => {
                ga('send', 'pageview', location.pathname)
              }, [location])
            }
            
            function SomeComponent() {
              const { userId } = useParams()
              // ...
            }

    4. Apollo Client: Están en ello, pero extra oficialmente existe una librería que los integra. [https://github.com/trojanowski/react-apollo-hooks](https://github.com/trojanowski/react-apollo-hooks) 

            import gql from 'graphql-tag';
            import { useQuery } from 'react-apollo-hooks';
            
            const GET_DOGS = gql`
              {
                dogs {
                  id
                  breed
                }
              }
            `;
            
            const Dogs = () => {
              const { data, error, loading } = useQuery(GET_DOGS);
              if (loading) {
                return <div>Loading...</div>;
              };
              if (error) {
                return <div>Error! {error.message}</div>;
              };
            
              return (
                <ul>
                  {data.dogs.map(dog => (
                    <li key={dog.id}>{dog.breed}</li>
                  ))}
                </ul>
              );
            };

    5. *-hook Booom: actualmente se están haciendo muchas librerías con el sufijo -hook que integran hooks con toda clase de cosas. 
    6. Vue.js: Existe una propuesta para incluir Hooks en Vue.js, en la próxima versión seguramente los incluya

            import { state, value, computed, watch } from '@vue/observer'// reactive object
            // equivalent of 2.x Vue.observable()
            const obj = state({ a: 1 })
            
            // watch with a getter function
            watch(() => obj.a, value => {
              console.log(`obj.a is: ${value}`)
            })
            
            // a "ref" object that has a .value property
            const count = value(0)
            
            // computed "ref" with a read-only .value property
            const plusOne = computed(() => count.value + 1)
            
            // refs can be watched directly
            watch(count, (count, oldCount) => {
              console.log(`count is: ${count}`)
            })
            
            watch(plusOne, countPlusOne => {
              console.log(`count plus one is: ${countPlusOne}`)
            })

3. Adiós a las clases, el equipo de React se concentrará en los Hooks, pero aún seguirán ahí como Legacy.
4. Más Futuro
    1. Concurrent Mode: permitirá a los componentes renderizar sin bloquear el main thread
    2. Suspense for Data Fetching: permitirá asociar de forma más fácil el code splitting con el Data Fetching y además incluirá caché.