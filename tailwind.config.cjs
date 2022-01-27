const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
			  orange: {
				500: "#ff3e00",
			  },
			},
			backgroundImage: theme => ({
			  'hero-pattern': "url('/images/vagabondos_restaurant_bg_1jpg.jpg')",
			  'footer-texture': "url('/img/footer-texture.png')",
			 }),
			fontFamily: {
			  'ozel': ['Arial', 'cursive', 'system-ui']
			 }
		  },
	},

	plugins: []
};

module.exports = config;
