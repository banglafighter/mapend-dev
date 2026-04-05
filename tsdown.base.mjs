import {defineConfig} from 'tsdown'

export const baseConfig = defineConfig({
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    treeshake: true,
    target: 'esnext',
    platform: 'neutral',
    esbuildOptions(options) {
        options.jsx = 'automatic'
    }
})