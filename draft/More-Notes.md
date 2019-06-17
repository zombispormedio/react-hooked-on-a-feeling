# Notes

- React Conf Iceland

    Make it easier to build great UIs

    Code Splitting - React Lazy

    Simplify hard stuff

    Performance:  avoid to be slaggy, being faster.

    Developer tooling

    React's Future: Suspense, Time Slicing

    What still sucks?

    Reusing logic, Giant components → Wrapper hell (Hocs, render props)

    Confusing classes → Convert function components to class components

    Hard for machines → classes make hard to optimize compiler

    Try to solve Wrapper Hell, results in Huge Components 

    Try to solve Huge Components, results in Wrapper Hell

    React doesn't provide a stateful primitive simpler than class component

    Removed React Mixins 

    Context → Global variables for a subtree

    No big rewrites, new patterns coexist with old patterns.

    Reactions are atoms participating in chemical reactions.

    Hooks are more direct representation of react  and really explain how to a component works inside.

    useState → Minify return value

- Everything you need to know about React Hooks

    Enables powerful new ways to share stateful logic between components, optimize performance without significant rewrites, get some of the benefits of Redux-style separation of concerns— stateful function components

    useCallback: However, as you begin to optimize and identify what’s causing frequent re-renders, you may find inline function definitions to be the cause of many of your unnecessary prop change.

- Under the hood of React’s hooks system

    useState is a useReducer

- Making Sense of React Hooks
    - **Huge components** that are hard to refactor and test.
    - **Duplicated logic** between different components and lifecycle methods.
    - **Complex patterns** like render props and higher-order components.

    Code using Hooks tends to minify better than equivalent code using classes.

    [react-spring](https://www.react-spring.io/)

    [Hooks in react-spring, a tutorial](https://medium.com/@drcmda/hooks-in-react-spring-a-tutorial-c6c436ad7ee4)

- Application State Management with React

    Redux is fine for state that is truly global, but for simple state (like whether a modal is open or form input value state) this is a big problem. To make matters worse, it doesn't scale very well.

    Have your state more logically separated and located in the react tree closer to where it matters.