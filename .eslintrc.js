module.exports = {
    "extends": "airbnb",
    "rules" : {
        "semi": [2, "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "arrow-body-style": ["error", "always"],
        "react/no-unescaped-entities": ["error", {"forbid": [">", "}"]}],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to",  "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }],
     },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    }  
}