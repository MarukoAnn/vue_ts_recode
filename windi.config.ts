import { defineConfig } from 'vite-plugin-windicss';
export default defineConfig({
	darkMode: 'class',
	// plugins: [createEnterPlugin()],
	theme: {
	  extend: {
		zIndex: {
		  '-1': '-1',
		},
		// colors: {
		//   primary: primaryColor,
		// },
		screens: {
		  sm: '576px',
		  md: '768px',
		  lg: '992px',
		  xl: '1200px',
		  '2xl': '1600px',
		},
	  },
	},
  });
