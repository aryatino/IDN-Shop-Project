import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        account: 'account.html',
        checkout: 'checkout.html',
        login: 'login.html',
        register: 'register.html',
        shop: 'shop.html',
        view: 'view.html',
        wishlist: 'wishlist.html'
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})