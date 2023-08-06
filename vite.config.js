import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import { defineConfig } from 'vite'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import postCssNesting from 'postcss-nesting'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
    clearScreen: false,
    resolve: { alias: { '@': resolve('client') } },
    build: { rollupOptions: { input: __dirname + '/index.html' } },
    plugins: [
        routify({
            ssr: { enable: production },
            routesDir: __dirname + '/client/routes',
            mainEntryPoint: __dirname + '/client/main.js',
            rootComponent: __dirname + '/client/App.svelte',
        }),
        svelte({
            compilerOptions: {
                dev: !production,
                hydratable: !!process.env.ROUTIFY_SSR_ENABLE,
            },
            extensions: ['.md', '.svelte'],
            preprocess: [mdsvex({ extension: 'md' })],
        }),
    ],
    css: { postcss: { plugins: [postCssNesting()] } },

    server: { port: 1337 },
})
