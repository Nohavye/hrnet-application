import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import precss from 'precss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [precss()],
        },
    },
})
