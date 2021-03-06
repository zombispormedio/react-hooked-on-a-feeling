const presets = ["@babel/preset-env", "@babel/preset-react"];

const plugins = [
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-export-default-from",
  "babel-plugin-transform-react-display-name",
  "react-hot-loader/babel",
  "babel-plugin-styled-components"
];

module.exports = api => {
  api.cache(true);
  return {
    presets,
    plugins
  };
};
