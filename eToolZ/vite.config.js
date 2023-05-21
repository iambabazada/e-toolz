import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@src', replacement: '/src' },
      { find: '@api', replacement: '/src/api' },
      { find: '@views', replacement: '/src/views' },
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@domains', replacement: '/src/domains' },
      { find: '@types', replacement: '/src/@types' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@configs', replacement: '/src/configs' },
      // { find '@store', replacement: '/src/redux' },
    ]
  },
})

