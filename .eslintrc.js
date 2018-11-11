module.exports = {
    "parser": "babel-eslint",
    "extends": [ "airbnb", "plugin:prettier/recommended", "prettier/react" ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "prettier/prettier": ["error", { "singleQuote": true }]
    },
    "env": {
        "browser": true
    }
};