import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import {PluginOption} from "vite";
import {configMockPlugin} from "./configMockPlugin";
import {svgBuilder} from "./svgBuilder";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    const {VITE_USE_MOCK} = viteEnv;

    const vitePlugins: (PluginOption | PluginOption[]) = [vue(), vueJsx()];

    VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

    //添加svg-icon插件
    vitePlugins.push(svgBuilder('./src/assets/icons/'));

    return vitePlugins;
}
