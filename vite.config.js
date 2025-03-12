import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        product: path.resolve(__dirname, 'product.html'),
        category: path.resolve(__dirname, 'category.html'),
        cart: path.resolve(__dirname, 'cart.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})