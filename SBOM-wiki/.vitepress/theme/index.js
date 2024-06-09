import DefaultTheme from 'vitepress/theme'

import Card from "primevue/card";
import "primevue/resources/themes/lara-light-teal/theme.css"
import "primevue/resources/primevue.min.css"

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // register your custom global components
        app.component('Card', Card)
    }
}