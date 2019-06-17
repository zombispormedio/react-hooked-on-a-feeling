# Optimizaciones (useMemo, useCallback)

1. useCallback like a fool

    Tengo que disculparme con vosotros y con mis compañeros de trabajo, he abusado del useCallback sin entenderlo del todo bien, pensando que lo que hacía era una buena práctica, pero no. El useCallback persiste un inline function entre los renders del componente

    No ahorras memoria por usarlo, al contrario, persistes esa función y haces el doble de cosas.

    ¿Para qué sirve entonces? Para Reference Equality. Recordad ejemplo que teníamos antes con el canvas, si vuelve a renderizar, el canvas se vuelve a crear y se borra. No nos interesa que si cambia una función tenga que volver a renderizar.

    ¿Pero y si quiero eso en todos? No es necesario, React es super rápido como para que realmente las veces que un componente se renderize, afecte a tu performance.

    Digamos que usando el useCallback haríamos más trabajo, instanciamos una función, un array y llamamos una función, mientras que con una inline function solo creamos una nueva función y la anterior seré recogida por el garbage collector.

        const callback = useCallback(() => {},  [something])
        
        const MemoPainter = React.memo(Painter);
        
        <MemoPainter callback={callbakc} />

    useMemo

    El useMemo del mismo modo que el useCallback se puede usar para  Reference Equality y cálculos complejos.

        const memoSomething = useMemo(() => calculateSomethingHard(), [something])

    [https://kentcdodds.com/blog/usememo-and-usecallback](https://kentcdodds.com/blog/usememo-and-usecallback)

Performance Inline Functions

¿Pero crear tantas cosas no afecta a la performance?

En los navegadores actuales, el coste es poco significativo. Es mucho más costoso instancias clases y el binding event handlers en el constructor.

[](https://reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render)

Usar React Hooks mejora tu Rendimiento 😬