const StyleDictionary = require("style-dictionary");
const tokens = require("./tokens");

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    "cjs/category": {
      buildPath: "build/js/",
      transforms: ["attribute/cti", "name/ti/camel", "size/rem", "color/hex"],
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.js`,
        format: "custom/cjsmodule",
        filter: {
          attributes: {
            category: tokenCategory,
          },
        },
      })),
    },
    scss: {
      transformGroup: "scss",
      buildPath: `build/scss/`,
      files: [
        {
          destination: `tokens.scss`,
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: `build/css/`,
      files: [
        {
          destination: `tokens.css`,
          format: "css/variables",
        },
      ],
    },
    // Web output in scss partialformat
    "scss/category": {
      transformGroup: "scss",
      buildPath: `build/scss/`,
      files: tokens.map((tokenCategory) => ({
        destination: `_${tokenCategory}.scss`,
        format: "scss/variables",
        filter: {
          attributes: {
            category: tokenCategory,
          },
        },
      })),
    },
  },
};

StyleDictionary.registerFormat({
  name: "custom/cjsmodule",
  formatter: function ({ dictionary }) {
    return `module.exports = {${dictionary.allTokens.map(
      (token) => `\n\t${token.name}: "${token.value}"`
    )}\n};`;
  },
});
