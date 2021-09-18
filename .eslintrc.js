module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
    plugins: [],
    // add your custom rules here
    rules: {
        "comma-dangle": ["error", "always-multiline"],
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
            },
        ],
        "linebreak-style": ["error", "unix"],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
            },
        ],
        semi: ["error", "always"],
    },
};
