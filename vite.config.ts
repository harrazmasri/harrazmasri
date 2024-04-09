import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/harrazmasri/', // use this to set base url to repo, github pages requirement
  plugins: [vue()],
})
