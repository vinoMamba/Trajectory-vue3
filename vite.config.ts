import {defineConfig, loadEnv} from "vite";
import {resolve} from "path";
import {wrapperEnv} from "./build/utils";
import {createVitePlugins} from "./build/vite/plugin";

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir);
}

export default defineConfig(({command, mode}) => {
    const root = process.cwd();
    const env = loadEnv(mode, root);
    const viteEnv = wrapperEnv(env);
    const {VITE_PORT} = viteEnv;

    const isBuild = command === "build";
    return {
        root,
        resolve: {
            alias: [
                {
                    find: /\/@\//,
                    replacement: pathResolve("src") + "/"
                }
            ],
        },
        server: {
            host: true,
            port: VITE_PORT,
            //出现跨域问题再来配置
            proxy: {
                '/foo': 'http://192.168.110.13:3000'
            }
        },
        plugins: createVitePlugins(viteEnv, isBuild)
    };
});
