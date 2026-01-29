import { defineConfig, presetWind3 } from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
  ],
  theme: {
    colors: {
      cream: '#FAF8F5',
      'cream-dark': '#F0EDE8',
      ink: '#2C2420',
      'ink-light': '#4A423D',
      stone: '#8A817C',
      parchment: '#E8E4DE',
      paper: '#FFFFFF',
      sienna: '#8B4513',
      'sienna-light': '#A65D2E',
      'sienna-dark': '#6B350F',
    },
  },
  shortcuts: {
    'container-editorial': 'max-w-3xl mx-auto px-6 md:px-8',
    'container-wide': 'max-w-5xl mx-auto px-6 md:px-8',
    'section-spacing': 'py-16 md:py-24',
  },
});
