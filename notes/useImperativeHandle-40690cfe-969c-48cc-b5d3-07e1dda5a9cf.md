# useImperativeHandle

1. Forwarded ref y useImperativeHandle

Los Forwarding Refs es una técnica para pasar un ref a sus hijos. El useImperativeHandle permite exponer una api determinada, que el ref esté compuesto por una serie de métodos como si fuese una clase.

    const FancyInput = forwardRef((props, ref) {
      const inputRef = useRef();
      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }));
      return <input ref={inputRef} />;
    })
    
    const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;

1. Demostración

    const Painter = forwardRef((props, ref) => {
      const canvasRef = useRef();
      const operationsRef = useRef([]);
      useImperativeHandle(ref, () => {
        const canvasToolkit = createCanvasToolkit(canvasRef.current);
        return {
          circle() {
            operationsRef.current.push({ name: "drawCircle" });
            canvasToolkit.drawCircle();
          },
    
    	    ...
    
          imageFromUrl(url) {
            const img = new Image();
            img.onload = () => {
              operationsRef.current.push({ name: "drawImage", args: [img] });
              canvasToolkit.drawImage(img);
            };
            img.src = url;
          },
    
          clean() {
            canvasToolkit.clean();
            operationsRef.current = [];
          },
    
          resize(width, height) {
            canvasToolkit.resize(width, height);
            operationsRef.current.forEach(({ name, args = [] }) => {
              canvasToolkit[name](...args);
            });
          }
        };
      });
      return <canvas {...props} ref={canvasRef} />;
    });
    
    function App() {
      const painterRef = useRef();
      useEffect(() => {
        function updateCanvasSize() {
          painterRef.current.resize(
            window.innerWidth - CANVAS_MARGIN,
            window.innerHeight - CANVAS_MARGIN
          );
        }
        window.addEventListener("resize", updateCanvasSize);
        return () => {
          window.removeEventListener("resize", updateCanvasSize);
        };
      }, []);
    
      return (
        <div>
            <Painter
              ref={painterRef}
              width={window.innerWidth - CANVAS_MARGIN}
              height={window.innerHeight - CANVAS_MARGIN}
            />
            <div>
              <Button
                type="button"
                onClick={() => painterRef.current.circle()}
                marginRight="1rem"
              >
                Circle
              </Button>
             {...}
            </div>
        </div>
      );
    }