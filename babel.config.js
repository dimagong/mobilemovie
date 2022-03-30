// const path = require('path');
// const pak = require('../package.json');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //   [
    //     'module-resolver',
    //     {
    //       extensions: ['.tsx', '.ts', '.js', '.json'],
    //       alias: {
    //         [pak.name]: path.join(__dirname, '..', pak.source),
    //       },
    //     },
    //   ],
    //   'react-native-reanimated/plugin'
    // ]
    plugins: ["react-native-reanimated/plugin"],
    // env: {
    //   development: {
    //     plugins: ["react-native-reanimated/plugin"],
    //   },
    //   production: {
    //     plugins: ["react-native-reanimated/plugin", "react-native-paper/babel"],
    //   },
    // },
  };
};



