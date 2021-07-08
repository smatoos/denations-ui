const tokens = require("./properties");
const StyleDictionary = require("style-dictionary");

module.exports = {
  source: ["tokens/properties/**/*.json"],
  platforms: {
    "cjs/category": {
      buildPath: "lib/tokens/",
      transforms: [
        "attribute/cti",
        "name/ti/camel",
        "size/custom/rem",
        "size/custom/px",
      ],
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
    css: {
      buildPath: "dist/",
      transformGroup: "css",
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "size/custom/rem",
        "size/custom/px",
      ],
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
  },
};

StyleDictionary.registerFormat({
  name: "custom/cjsmodule",
  formatter: function ({ dictionary, file }) {
    const fileName = file.destination.replace(".js", "");
    return `export const ${fileName} = {${dictionary.allTokens.map(
      (token) => `\n\t${token.name}: "${token.value}"`
    )}\n};`;
  },
});

StyleDictionary.registerTransform({
  name: "size/custom/px",
  type: "value",
  matcher: (token) => token.group === "px",
  transformer: (token) => `${token.value}px`,
});

StyleDictionary.registerTransform({
  name: "size/custom/rem",
  type: "value",
  matcher: (token) => token.group === "rem",
  transformer: (token) => `${token.value}rem`,
});
