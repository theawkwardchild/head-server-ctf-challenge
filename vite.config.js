import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    fs: {
      deny: [
        // searchForWorkspaceRoot(process.cwd()),
        ".git",
        ".env",
        "secret_menu.txt"
      ]
    },
    headers: {
      "Server": "VITE 4.3.2"
    },
  }
})

