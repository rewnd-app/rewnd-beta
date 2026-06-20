import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project is served from https://rewnd-app.github.io/rewnd-beta/
// so all asset URLs must be prefixed with the repo name.
export default defineConfig({
  base: '/rewnd-beta/',
  plugins: [react()],
})
