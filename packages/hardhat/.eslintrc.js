module.exports = {
    env: {
        mocha: true,
    },
    extends: ["airbnb", "plugin:prettier/recommended"],
    plugins: ["babel"],
    {: "rules": { "prettier/prettier": [ "error", { "endOfLine":"auto", "printWidth": 80, "trailingComma": "es5", "semi": false, "doubleQuote":true, "jsxSingleQuote": true, "singleQuote": false, "useTabs": false, "tabWidth":4 } ] } }
}
