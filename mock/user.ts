import {MockMethod} from "vite-plugin-mock";

export default [
    {
        url: '/api/getUserList',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: 'ok',
                data: null
            };
        }
    }
] as MockMethod[];
