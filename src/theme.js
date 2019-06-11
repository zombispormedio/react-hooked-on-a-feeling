import createTheme from "spectacle/lib/themes/default";

export const colors = {
  primary: "#282c34",
  secondary: "#61dafb"
};

export const theme = createTheme(colors, {
  primary: "Helvetica",
  secondary: {
    name: "Droid Serif",
    googleFont: true,
    styles: ["400", "700i"]
  }
});
