import { type App } from "vue"
import RadioTree from "./components/RadioTree.vue"

type PluginOptions = Partial<any>

export { RadioTree };

export default {
    install: (app: App, options: PluginOptions) => {
        options = options
        app.component("RadioTree", RadioTree)
    }
}