import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      deny: [
        // searchForWorkspaceRoot(process.cwd()),
        ".git",
        ".env",
        "flag.txt",
        "/public/flag.txt"
      ]
    },
    headers: {
      "Server": "VITE 4.3.2"
    },
  }
})

