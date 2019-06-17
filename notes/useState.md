# useState

El hooks más sencillo. Substituye al this.setState. Permite contextualizar y fragmentar el estado como se necesite. Te permite poner el nombre de variable que quieras. Está formado por un array de dos elementos: el estado actual y la función de asignación, que acepta un valor o una función que como parámetro es el estado anterior.

    const [ coffee, setCoffee ] = useState("☕")
    
    setCoffee(previousCoffee => previousCoffe + "☕")
    setCoffee(coffee + "☕")

- Ejemplo Sencillo

    function EditableGreeting() {
      const [name, setName] = useState("<empty>");
      const [editingMode, setEditingMode] = useState(false);
      return (
        <div>
            <Heading>
              Hello, 
              {editingMode ? (
                <TextInput
                  aria-label="name"
                  name="name"
                  value={name}
                  onChange={ev => setName(ev.target.value)}
                  onBlur={() => setEditingMode(false)}
                  onKeyUp={ev => ev.key === "Enter" && setEditingMode(false)}
                  autoFocus
                />
              ) : (
                <Tooltip text="Edit on click">
                  <span onClick={() => setEditingMode(true)}>{name}</span>
                </Tooltip>
              )}
              !
            </Heading>
        </div>
      );
    }
    // https://codesandbox.io/s/classic-usestate-fsvc3

- Ejemplo complejo

    function ComicBookWishList() {
      const [comicBook, setComicBook] = useState("");
      const [comicBookList, setComicBookList] = useState(initialComicBooks);
      const [visibilityFilter, setVisibilityFilter] = useState(
        VisibilityFilters.ALL
      );
    
      const onSubmit = evt => {
        evt.preventDefault();
        if (comicBook === "") return;
        setComicBookList([{ title: comicBook, read: false }, ...comicBookList]);
        setComicBook("");
      };
    
      const onComicBookRead = index => {
        const newComicBookList = [...comicBookList];
        newComicBookList[index].read = !newComicBookList[index].read;
        setComicBookList(newComicBookList);
      };
    
      const filteredList = getFilteredComicBookList(comicBookList, visibilityFilter);
      return (
        <div>
            <Heading>Comic Books's Readlist</Heading>
            <form onSubmit={onSubmit}>
               <TextInput
                 aria-label="comic book"
                 name="comic-book"
                 placeholder="Your comic book"
                 value={comicBook}
                 onChange={ev => setComicBook(ev.target.value)}
                />
               <Button type="submit">Add</Button>
            </form>
            <ComicBooksFilterList 
    					onVisibilityFilterChange={setVisibilityFilter} 
    					items={comicBookList} 
    					currentVisibilityFilter={visibilityFilter} />
            <List>
              {filteredList.map((item, index) => (
                <ListItem key={`${item.title}_${index}`}>
                  <ComicBookTitle read={item.read}>{item.title}</ComicBookTitle>
                  <input
                    type="checkbox"
                    checked={item.read}
                    onChange={() => onComicBookRead(index)}
                  />
                </ListItem>
              ))}
            </List>
        </div>
      );
    }
    
    // https://codesandbox.io/s/comic-books-wishlist-zmlb9

    function ComicBookWishList() {
      const [comicBook, setComicBook] = useState("");
      const [comicBookList, setComicBookList] = useState(initialComicBooks);
      const [visibilityFilter, setVisibilityFilter] = useState(
        VisibilityFilters.ALL
      );
    
      const onSubmit = evt => {
        evt.preventDefault();
        if (comicBook === "") return;
        setComicBookList([{ title: comicBook, read: false }, ...comicBookList]);
        setComicBook("");
      };
    
      const onComicBookRead = index => {
        const newComicBookList = [...comicBookList];
        newComicBookList[index].read = !newComicBookList[index].read;
        setComicBookList(newComicBookList);
      };
    
      const filteredList = getFilteredComicBookList(comicBookList, visibilityFilter);
      return (
        <div>
            <Heading>Comic Books's Readlist</Heading>
            <form onSubmit={onSubmit}>
                <TextInput
                  aria-label="comic book"
                  name="comic-book"
                  placeholder="Your comic book"
                  value={comicBook}
                  onChange={ev => setComicBook(ev.target.value)}
                />
                <Button type="submit">Add</Button>
            </form>
            <ComicBooksFilterList 
    					onVisibilityFilterChange={setVisibilityFilter} 
    					items={comicBookList} 
    					currentVisibilityFilter={visibilityFilter} />
            <List>
              {filteredList.map((item, index) => (
                <ListItem key={`${item.title}_${index}`}>
                  <ComicBookTitle read={item.read}>{item.title}</ComicBookTitle>
                  <input
                    type="checkbox"
                    checked={item.read}
                    onChange={() => onComicBookRead(index)}
                  />
                </ListItem>
              ))}
            </List>
        </div>
      );
    }
    
    // https://codesandbox.io/s/comic-books-wishlist-zmlb9

useReducer

Quién sepa algo de Redux, seguro que recordará los Reducers. En Redux existen 3 elementos clave, el estado, las acciones y los reducers

    function reducer(menu, action) {
    	switch(action.type){
    		case 'SERVE_DRINK': 
    			return {
    				...menu,
    				drinks: [...menu.drinks, action.item]
    			};
    		case 'SERVE_FOOD': 
    			return {
    				...menu,
    				food: [...menu.food, action.item]
    			};
    		default: 
    			return menu;
    	}
    }
    
    const [ menu, dispatch ] = useReducer(reducer, { drinks: [], food: []  })
    
    dispatch({ type: 'SERVE_DRINK', item: "☕" })
    dispatch({ type: 'SERVE_FOOD', item: "🥞" })

Ejemplo complejo

    function comicBookReducer(state, action) {
      switch (action.type) {
        case ActionTypes.ADD_COMIC_BOOK:
          return {
            ...state,
            comicBookList: [
              { title: action.comicBook, read: false },
              ...state.comicBookList
            ]
          };
        case ActionTypes.TOGGLE_READ_COMIC_BOOK: {
          const newComicBookList = [...state.comicBookList];
          const comicbook = newComicBookList[action.index];
          comicbook.read = !comicbook.read;
          return {
            ...state,
            comicbookList: newComicBookList
          };
        }
        case ActionTypes.SET_VISIBILITY_FILTER:
          return {
            ...state,
            visibilityFilter: action.visibilityFilter
          };
        default:
          return state;
      }
    }
    
    function ComicBookWishList() {
     const [comicBook, setComicBook] = useState("");
      const [{ comicBookList, visibilityFilter }, dispatch] = useReducer(
        comicBookReducer,
        initialComicbookState
      );
    
      const onSubmit = evt => {
        evt.preventDefault();
        if (comicBook === "") return;
        dispatch({ type: ActionTypes.ADD_COMIC_BOOK, comicBook });
        setComicBook("");
      };
    
      const onComicBookRead = index => {
        dispatch({ type: ActionTypes.TOGGLE_READ_COMIC_BOOK, index });
      };
    
      const filteredList = getFilteredComicBookList(comicBookList, visibilityFilter);
      return (
        <div>
            <Heading>Comic Books's Readlist</Heading>
            <form onSubmit={onSubmit}>
                <TextInput
                  aria-label="comic book"
                  name="comic-book"
                  placeholder="Your comic book"
                  value={comicBook}
                  onChange={ev => setComicBook(ev.target.value)}
                />
                <Button type="submit">Add</Button>
            </form>
            <ComicBooksFilterList 
    					onVisibilityFilterChange={newVisibilityFilter => dispatch({
                    type: ActionTypes.SET_VISIBILITY_FILTER,
                    visibilityFilter: newVisibilityFilter
                  }} 
    					items={comicBookList} 
    					currentVisibilityFilter={visibilityFilter} />
            <List>
              {filteredList.map((item, index) => (
                <ListItem key={`${item.title}_${index}`}>
                  <ComicBookTitle read={item.read}>{item.title}</ComicBookTitle>
                  <input
                    type="checkbox"
                    checked={item.read}
                    onChange={() => onComicBookRead(index)}
                  />
                </ListItem>
              ))}
            </List>
        </div>
      );
    }
    
    // https://codesandbox.io/s/comic-books-wishlist-with-usereducer-ur0sz

useState es, en realidad, useReducer

    function basicStateReducer<S>(state: S, action: BasicStateAction<S>): S {
      return typeof action === 'function' ? action(state) : action;
    }
    
    function updateState<S>(
      initialState: (() => S) | S,
    ): [S, Dispatch<BasicStateAction<S>>] {
      return updateReducer(basicStateReducer, (initialState: any));
    }
    
    // https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberHooks.js

Luego se pegan la fumada máxima con el useReducer.