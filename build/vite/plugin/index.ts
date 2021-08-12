import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import {PluginOption} from "vite";
import {configMockPlugin} from "./configMockPlugin";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    const {VITE_USE_MOCK} = viteEnv;

    const vitePlugins: (PluginOption | PluginOption[]) = [vue(), vueJsx()];

    VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

    return vitePlugins;
}