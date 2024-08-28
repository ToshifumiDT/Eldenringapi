import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '/' : '/Eldenring-api/', 
    plugins: [react()],
  }
});