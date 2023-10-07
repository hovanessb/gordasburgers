const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
		  customPrimary: "#3D5467",
		  customSecondary: "#d9fcbbff",
		  customDarkBg1: "#F97068",
		  customDarkBg2: "#212738",
		  customDarkBg3: "#EDF2EF",
		  customDarkBg3Hover: "#F97068",
		  customContentSubtitle: "rgb(178, 184, 205)",
		  customGrayBorder: "rgb(255,255,255,0.1)",
		  customGrayText: "rgb(174, 178, 183)",
		  customDarkBgTransparent: "#57C4E5",
		  customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
		  customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)"  
		},
		fontFamily: {
			'sans': ['"Zen Maru Gothic"','Proxima Nova', ...defaultTheme.fontFamily.sans],
			'mono': ['"Titan One"','Proxima Nova', ...defaultTheme.fontFamily.mono],
		},
		screens: {
		  xs: "530px",
		  sm: "640px",
		  md: "768px",
		  lg: "1024px",
		  xl: "1280px",
		  xll: "1400px",
		  "2xl": "1536px",
		},
	  },
	},
  };