module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          rootPathPrefix: "@",
          rootPathSuffix: "src",
        },
      ],
    ],
    env: {
      production: {
        plugins: [
          "babel-plugin-root-import",
          {
            rootPathPrefix: "@",
            rootPathSuffix: "src",
          },
        ],
      },
    },
  };
};
