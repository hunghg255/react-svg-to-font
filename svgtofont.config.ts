import { defineConfig } from 'csvg-to-font';

export default defineConfig({
  src: 'src/assets', // svg path
  dist: 'public/font', // output path
  fontName: 'svgtoicon', // font name
  css: true, // Create CSS files.
  typescript: true,
});
