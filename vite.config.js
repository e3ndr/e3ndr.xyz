import { sveltekit } from '@sveltejs/kit/vite';
import legacy from '@vitejs/plugin-legacy';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [
        sveltekit(),
        legacy({
            targets: ['defaults', 'ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ]
};

export default config;