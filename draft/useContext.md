# useContext

1. Background

Context API te permite pasar datos a través del árbol de componentes. Con esto podemos tener una serie de objetos que se pueden acceder desde cualquier parte de la aplicación. Nos evita el props drilling (pasar props que el componente hijo sólo necesita para pasárselos a su propios hijos). Con esto también podemos comunicar información entre componentes en diferentes niveles.

En el Provider se puede añadir estado y pasar por contexto funciones que modifiquen ese estado. Todo controlado claro. Los consumidores siempre consumen del Provider más cercano, y  un proveedor puede ser consumidor. En el ejemplo del tema, al consumir puede mergear con un tema que proviene de un padre

    const ThemeContext = React.createContext({});
    const App = props => (
      <ThemeContext.Provider value={{ primaryColor: green }}>
        {props.children}
      </ThemeContext.Provider>
    );
    
    const ThemedButton = () => (
      <ThemeContext.Consumer>
        {value => (
          <Button primaryColor={{ value.primaryColor }}>
            I'm button using context!
          </Button>
        )}
      </ThemeContext.Consumer>
    );

    const ThemeProvider = props => (
    	<ThemeContext.Consumer>
    	    {value => (
    			  <ThemeContext.Provider value={{ ...value, primaryColor: green }}>
    		    {props.children}
    			  </ThemeContext.Provider>
    			}
    	</ThemeContext.Consumer>
    );

useContext

    const GeneralButton = () => (
    <TranslationsContext.Consumer>
    	{
    		t => (
    			<ThemeContext.Consumer>
    	    {value => (
    	      <Button primaryColor={value.primaryColor}>
    	        {t("buttons.simple")}
    	      </Button>
    	    )}
    		  </ThemeContext.Consumer>
    		)
    	}
    </TranslationsContext.Consumer>
    );

    const GeneralButton = () => {
    	const t = useContext(TranslationsContext)
    	const theme = useContext(ThemeContext)
    
    	return (
    		<Button primaryColor={theme.primaryColor}>
    	      {t("buttons.simple")}
    	  </Button>
    	)
    };

1. Demostración

    Mostrar el ejemplo de como se loguea toda la presentación

        const useActivity = () => useContext(ActivityContext);
        
        const ActivityProvider = ({ children }) => {
          const [activity, setActivity] = useState([]);
          const notify = message => setActivity(prev => [...prev, { message, at: new Date() }]);
         
          return (
            <ActivityContext.Provider value={{{ activity, notify }}}>
              {children}
            </ActivityContext.Provider>
          );
        };

2. Casos de uso (State Management, User management, Content Provider)

    ¿Cómo sería una aplicación real? Un buen substituto de Redux.

        function App() {
          return (
            <ThemeProvider>
              <AuthenticationProvider>
                <Router>
                  <Home path="/" />
                  <About path="/about" />
                  <UserPage path="/:userId" />
                  <UserSettings path="/settings" />
                  <Notifications path="/notifications" />
                </Router>
              </AuthenticationProvider>
            </ThemeProvider>
          )
        }
        function Notifications() {
          return (
            <NotificationsProvider>
              <NotificationsTab />
              <NotificationsTypeList />
              <NotificationsList />
            </NotificationsProvider>
          )
        }
        function UserPage({username}) {
          return (
            <UserProvider username={username}>
              <UserInfo />
              <UserNav />
              <UserActivity />
            </UserProvider>
          )
        }
        function UserSettings() {
          // this would be the associated hook for the AuthenticationProvider
          const {user} = useAuthenticatedUser()
        }

[Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react)