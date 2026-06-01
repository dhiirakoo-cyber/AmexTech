import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          courses: path.resolve(__dirname, 'courses.html'),
          courseDetails: path.resolve(__dirname, 'course-details.html'),
          about: path.resolve(__dirname, 'about.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
